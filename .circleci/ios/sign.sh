set -eu

KEYCHAIN_NAME=${KEYCHAIN_NAME:-login.keychain}

echo "Preparing provisioning profile"

export IOS_PROVISIONING_UUID=`grep UUID -A1 -a $IOS_PROVISIONING_FILE | grep -io "[-A-F0-9]\{36\}"`
export IOS_PROVISIONING_NAME=`grep "<key>Name" -A1 -a $IOS_PROVISIONING_FILE | pcregrep -o1 '<string>(.*)</string>'`
export IOS_TEAM_ID=`grep "<key>TeamIdentifier" -A2 -a $IOS_PROVISIONING_FILE | pcregrep -o1 '<string>(.*)</string>'`

cp $IOS_PROVISIONING_FILE ~/Library/MobileDevice/Provisioning\ Profiles/$IOS_PROVISIONING_UUID.mobileprovision

sed \
  -e "s/\$TEAM_ID/$IOS_TEAM_ID/g" \
  -e "s/\$CODESIGN_PROFILE/${CODESIGN_PROFILE:-ad-hoc}/g" \
  -e "s/\$PROVISIONING_NAME/$IOS_PROVISIONING_NAME/g" \
  -e "s/\$PROVISIONING_UUID/$IOS_PROVISIONING_UUID/g" \
  -e "s/\$CODESIGN_IDENTITY/$IOS_CODESIGN_IDENTITY/g" \
  -e "s/\$BUNDLE_IDENTIFIER_SUFFIX/${BUNDLE_IDENTIFIER_SUFFIX:-}/g" \
  .circleci/ios/templates/exportOptions.plist > \
  tmp/release.plist

echo "Code signing application"

OPTIONS=("OTHER_CODE_SIGN_FLAGS=--keychain '$KEYCHAIN_NAME'")

cd ios && xcodebuild \
  -verbose \
  -exportArchive \
  -exportPath build \
  -archivePath build/EmCasa.xcarchive \
  -exportOptionsPlist ../tmp/release.plist \
  ${OPTIONS[*]}

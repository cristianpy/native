set -e

fastlane android beta bin:$ROOT/android/app/build/outputs/apk/app-release.apk groups:$TESTER_GROUPS

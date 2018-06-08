var path = require("path");

/**
 * POST /graphql_api
 *
 * host: localhost:4000
 * accept: * / *
 * content-type: application/json
 * user-agent: EmCasa/1 CFNetwork/893.14 Darwin/16.7.0
 * connection: keep-alive
 * cookie: _re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIGNmYTM0NGYwYTMxMzkwYTBmNDNkYWE2NjkyNWM3NWRm.xL6JRs7yM2j-pmPdCPx8blEVs2cLAUJq_ApcrpweysM
 * accept-language: en-us
 * authorization: Token eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJSZSIsImV4cCI6MTUzMTA3NDg3MCwiaWF0IjoxNTI4NDgyODcwLCJpc3MiOiJSZSIsImp0aSI6Ijg1Mzk1NzMyLWZlMTEtNDM4ZC05N2Y2LTZjZDYwMjFmOGExZSIsIm5iZiI6MTUyODQ4Mjg2OSwic3ViIjoiMjE1IiwidHlwIjoiYWNjZXNzIn0.APCiTZfdITzppIatvX6WxMsf9Edgxx0QpVPlR8jx60-U5xH9kVThQJE6gREZWhyYpwTMb7tG5m7WQCG0mEM1WIJVABPH0CtzLh1juGDxEr-tXugOp0OC0qZ_Dx7PDYxkyKcnAl_AcG0B3CexRhBpbkSG2Rgb2rsWkqpKFHA9vlVk25T8
 * content-length: 106
 * accept-encoding: gzip, deflate
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Cowboy");
  res.setHeader("date", "Fri, 08 Jun 2018 19:11:47 GMT");
  res.setHeader("content-length", "33");
  res.setHeader("set-cookie", ["_re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIGNmYTM0NGYwYTMxMzkwYTBmNDNkYWE2NjkyNWM3NWRm.xL6JRs7yM2j-pmPdCPx8blEVs2cLAUJq_ApcrpweysM; path=/; HttpOnly"]);
  res.setHeader("cache-control", "max-age=0, private, must-revalidate");
  res.setHeader("x-request-id", "a5haulfajc51t7okejnk9a0fsv1m27kv");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("content-type", "application/json; charset=utf-8");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJkYXRhIjp7ImZhdm9yaXRlZExpc3RpbmdzIjpbXX19", "base64"));
  res.end();

  return __filename;
};

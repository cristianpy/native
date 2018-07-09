var path = require("path");

/**
 * GET /interest_types?
 *
 * host: localhost:4000
 * content-type: application/json
 * connection: keep-alive
 * accept: application/json
 * user-agent: EmCasa/1 CFNetwork/893.14 Darwin/16.7.0
 * authorization: undefined
 * accept-language: en-us
 * accept-encoding: gzip, deflate
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Cowboy");
  res.setHeader("date", "Mon, 09 Jul 2018 16:22:33 GMT");
  res.setHeader("content-length", "232");
  res.setHeader("set-cookie", ["_re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIDM3NDY5YmU2NzAyOGFhNDg2OGNmMGU2YmVmNGIyNGZk.TuWZqkkQ_4EpHmUZbGmH1W2fva0owkdrkyAKNI_Jffs; path=/; HttpOnly"]);
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "max-age=0, private, must-revalidate");
  res.setHeader("x-request-id", "cbirh7eqvtum68fe7vq97jjls2fh1p8o");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "");
  res.setHeader("access-control-allow-credentials", "true");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJkYXRhIjpbeyJuYW1lIjoiTWUgbGlndWUgZGVudHJvIGRlIDUgbWludXRvcyIsImlkIjoxfSx7Im5hbWUiOiJNZSBsaWd1ZSBlbSB1bSBob3LDoXJpbyBlc3BlY8OtZmljbyIsImlkIjoyfSx7Im5hbWUiOiJBZ2VuZGFtZW50byBwb3IgZS1tYWlsIiwiaWQiOjN9LHsibmFtZSI6IkFnZW5kYW1lbnRvIHBvciBXaGF0c2FwcCIsImlkIjo0fSx7Im5hbWUiOiJBZ2VuZGFtZW50byBvbmxpbmUiLCJpZCI6NX1dfQ==", "base64"));
  res.end();

  return __filename;
};

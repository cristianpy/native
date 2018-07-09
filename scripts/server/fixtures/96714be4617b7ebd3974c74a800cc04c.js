var path = require("path");

/**
 * POST /graphql_api
 *
 * host: localhost:4000
 * accept: * / *
 * content-type: application/json
 * user-agent: EmCasa/1 CFNetwork/893.14 Darwin/16.7.0
 * connection: keep-alive
 * cookie: _re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIDM3NDY5YmU2NzAyOGFhNDg2OGNmMGU2YmVmNGIyNGZk.TuWZqkkQ_4EpHmUZbGmH1W2fva0owkdrkyAKNI_Jffs
 * accept-language: en-us
 * authorization: Token eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJSZSIsImV4cCI6MTUzMzc0NTM2NiwiaWF0IjoxNTMxMTUzMzY2LCJpc3MiOiJSZSIsImp0aSI6IjIyMDJkZjBiLWEwOWEtNDk4NS04YjczLTQ5ZDU4MmM1ZDMyMyIsIm5iZiI6MTUzMTE1MzM2NSwic3ViIjoiMjE1IiwidHlwIjoiYWNjZXNzIn0.ACfkzlClsH6WQVJb4IIu97V_PxqT3-xl-Ki12_0yuW10qkDfcVv46LhHvF0FVvd_1ak_qAmmxIErNgAnVFbrBT8sAG_Fc1b1shxHRH-0QukRytHVHx9hgzRT_McTMAr317bERDO707MLIH7gDg6X4Srui5OntO9bkEMq-XjYsB9rufN8
 * content-length: 151
 * accept-encoding: gzip, deflate
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Cowboy");
  res.setHeader("date", "Mon, 09 Jul 2018 16:22:46 GMT");
  res.setHeader("content-length", "591");
  res.setHeader("set-cookie", ["_re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIDM3NDY5YmU2NzAyOGFhNDg2OGNmMGU2YmVmNGIyNGZk.TuWZqkkQ_4EpHmUZbGmH1W2fva0owkdrkyAKNI_Jffs; path=/; HttpOnly"]);
  res.setHeader("cache-control", "max-age=0, private, must-revalidate");
  res.setHeader("x-request-id", "fo5cich2c766grvku5hq13in5753kb7n");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("content-type", "application/json; charset=utf-8");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHRlbnNpb25zIjp7InRyYWNpbmciOnsidmVyc2lvbiI6MSwic3RhcnRUaW1lIjoiMjAxOC0wNy0wOVQxNjoyMjo0Ny4xNDQ3MDBaIiwiZXhlY3V0aW9uIjp7InJlc29sdmVycyI6W3sic3RhcnRPZmZzZXQiOjUzMjAwMCwicmV0dXJuVHlwZSI6IltMaXN0aW5nXSIsInBhdGgiOlsiZmF2b3JpdGVkTGlzdGluZ3MiXSwicGFyZW50VHlwZSI6IlJvb3RRdWVyeVR5cGUiLCJtZXRhIjpudWxsLCJmaWVsZE5hbWUiOiJmYXZvcml0ZWRMaXN0aW5ncyIsImR1cmF0aW9uIjozNTk3MDAwfSx7InN0YXJ0T2Zmc2V0Ijo0MTc4MDAwLCJyZXR1cm5UeXBlIjoiSUQiLCJwYXRoIjpbImZhdm9yaXRlZExpc3RpbmdzIiwwLCJpZCJdLCJwYXJlbnRUeXBlIjoiTGlzdGluZyIsIm1ldGEiOm51bGwsImZpZWxkTmFtZSI6ImlkIiwiZHVyYXRpb24iOjEzMDAwfV19LCJlbmRUaW1lIjoiMjAxOC0wNy0wOVQxNjoyMjo0Ny4xNDkwMTdaIiwiZHVyYXRpb24iOjQzMjAwMDB9LCJjYWNoZUNvbnRyb2wiOnsidmVyc2lvbiI6MSwiaGludHMiOltdfX0sImRhdGEiOnsiZmF2b3JpdGVkTGlzdGluZ3MiOlt7ImlkIjoiODciLCJfX3R5cGVuYW1lIjoiTGlzdGluZyJ9XX19", "base64"));
  res.end();

  return __filename;
};

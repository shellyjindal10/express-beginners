express-beginners
============

Shelly Jindal
@shellyjindal10

MIT License


### lesson-01
Simple node http server


### lesson-02
Simple node http server that reads index.html from file system

Building a full-fledged web framework is a lot of work:

 * should support multiple formats and mime types (example only returns text/html)
 * need to be more flexible about loading resources (example is hard-coded for index.html)
 * should stream the response data (servers shouldn't buffer files into memory)
 * doesn't parse url for query parameters
 * doesn't do any caching, and doesn't set any client cache headers


### lesson-03
Simple Express "Hello World" example using middleware.
Simple Express example with multiple middlewares

### lesson-04
Simple Express routing example, routing example that returns different content type responses.

### lesson-05
Simple Express response Header example.

## Notes

### Useful Links

#### Express
* http://expressjs.com/

#### Node Docs
* http://nodejs.org/api/http.html
* http://nodejs.org/api/net.html
* http://nodejs.org/api/path.html


### Common Middleware

#### body-parser

 * https://github.com/expressjs/body-parser
 * handles urlencoded and json bodies
 * for multipart bodies / file uploads try connect-busboy

#### cookie-parser
 * https://github.com/expressjs/cookie-parser

#### static-favicon
 * now use serve-favicon
 * https://github.com/expressjs/serve-favicon

#### morgan (automatic request/response logging)
 * https://github.com/expressjs/morgan)

#### More: https://github.com/senchalabs/connect


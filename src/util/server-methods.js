import zlib from 'zlib';

export function writeError(msg, res) {
  res.writeHead(500, {'Content-Type': 'text/html'});
  res.write('ERROR!');
  res.end();
}

export function redirect(location, res) {
  res.writeHead(303, {Location: location});
  res.end();
}

export function writeNotFound(res) {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('Not Found');
  console.log('Not Found:', res);
  res.end();
}

export function write(string, type, res) {
  zlib.gzip(string, (err, result) => {
    if (err) {
      res.writeError('ERROR!', res);
    }
    else {
      res.writeHead(200, {
        'Content-Length': result.length,
        'Content-Type': type,
        'Content-Encoding': 'gzip',
      });
      res.write(result);
      res.end();
    }
  });
}

export function createPage(html) {
  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Nest Service Catalog: New and Improved</title>
  </head>
  <body>
    <h5>~*server side edition*~</h5>
    <div id="main">${html}</div>

    <!-- bundle all the scripts! thanks to webpack -->
    <script type="text/javascript" src="/app.js"></script>
  </body>
  </html>`;
}

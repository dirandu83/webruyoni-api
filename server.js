const http = require("http");
const fs = require("fs");
const port = 80;

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath = "./public" + url;
  if (url === "/") {
    filePath = "./public/index.html";
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Error: File Not Found");
    } else {
      let contentType = "text/html";
      if (filePath.endsWith(".css")) {
        contentType = "text/css";
      } else if (filePath.endsWith(".js")) {
        contentType = "text/javascript";
      } else if (filePath.endsWith(".png")) {
        contentType = "image/png";
      } else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) {
        contentType = "image/jpeg";
      } else if (filePath.endsWith(".mp3")) {
        contentType = "audio/mpeg";
      } else if (filePath.endsWith(".wav")) {
        contentType = "audio/wav";
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

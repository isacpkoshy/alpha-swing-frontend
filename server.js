/**
 * Zero-Dependency High-Speed Static Dev Server for AlphaSwing Frontend Terminal.
 * Runs on http://127.0.0.1:3000 and connects to alpha-swing-backend on http://127.0.0.1:8000/api/v1
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const INDEX_PATH = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-cache"
  });
  fs.createReadStream(INDEX_PATH).pipe(res);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`AlphaSwing Frontend Terminal running at http://127.0.0.1:${PORT}`);
  console.log(`Connected to Backend API at http://127.0.0.1:8000/api/v1`);
});

import express from "express";

const server = express();
const port = 3333;

server.get("/api", (req, res) => {
  res.send("⚽API FIFA Club World Cup");
});

server.listen(port, () => {
  console.log(
    `⚽API FIFA Club World Cup, server running on: http://localhost:${port}`
  );
});

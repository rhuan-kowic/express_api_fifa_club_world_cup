import createApp from "./app";

const server = createApp();
const port = process.env.PORT;


server.listen(port, () => {
  console.log(
    `⚽API FIFA Club World Cup, server running on: http://localhost:${port}`
  );
});

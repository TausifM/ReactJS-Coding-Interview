const net = require("net");
const client = net.connect(4242, () => {
  console.log("conneted to server");
  client.write("world\r\n");
});
client.on("data", (data) => {
  console.log(data.toString());
  client.end();
});
client.on("end", () => {
  console.log("ended");
});

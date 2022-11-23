// Here’s the info for the Snek server!
// View the snakes : http://165.227.47.243:8000/view
// Host: 165.227.47.243
// Port: 50541

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

console.log("Connecting ...");
connect();
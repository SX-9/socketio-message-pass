const express = require("express");
const rateLimit = require('express-rate-limit');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.set('trust proxy', 1)
app.use(express.static(__dirname + '/public'));
app.use(rateLimit({
	windowMs: 5 * 60 * 1000, 
	max: 30, 
	standardHeaders: true, 
	legacyHeaders: true, 
}));

io.on("connection", (socket) => {
    socket.onAny((...e) => {
        console.log(new Date().toLocaleTimeString(), e);
        io.sockets.emit(...e);
    });
});

httpServer.listen(process.env.PORT, () => console.log('Server Online On Port', process.env.PORT));
const express=require('express')
const http=require('http')
const cors=require('cors');
const { Socket } = require('socket.io');
const app=express();
const port=5000;
const httpServer=http.createServer(app)

const io = require("socket.io")(httpServer, {
    cors: {
        origin: '*',
        methods:['GET','POST']
    }
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send('server is ruuning ')
})

io.on("connection", (socket) => {
	console.log(socket)
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

httpServer.listen(port,(err)=>{
    if(err) throw err;
    else{console.log(`Working on port :${port}`)}
})
const express = require("express");
const router=require("./Routes/user.route");
var app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
});

app.use("/api/user",router);

app.listen(app.get("port"),()=>{
    console.log("Servidor corriendo en el puerto",app.get("port"))
});


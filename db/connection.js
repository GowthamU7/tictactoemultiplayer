var mongoose = require("mongoose")

mongoose.connect("mongodb://srikar:srikar7@cluster0-shard-00-00.9s5zv.mongodb.net:27017,cluster0-shard-00-01.9s5zv.mongodb.net:27017,cluster0-shard-00-02.9s5zv.mongodb.net:27017/tictactoe?ssl=true&replicaSet=atlas-y30ghf-shard-0&authSource=admin&retryWrites=true&w=majority").
then((vl)=>console.log("Connected to Database")).
catch((reason)=>{console.log(reason)})


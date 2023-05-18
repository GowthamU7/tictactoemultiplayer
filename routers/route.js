var tModel = require("../db/model")
var utility = require("../utilities/util")
var home = (req,res)=>{
    res.send("Hello")
}
var create = async(req,res)=>{
    var newGame = new tModel.gameModel(
        {
            player1:req.body.player1,
            player2:req.body.player2,
            dec:{decided:false,msg:""},
            turn:"X",
            game:[['','',''],['','',''],['','','']],
            player1Score:0,
            player2Score:0
        });
    await newGame.save()
    res.json({gameId:JSON.parse(JSON.stringify(newGame))["_id"]})
}

var getDetails = async(req,res)=>{
    try{
        var data = await tModel.gameModel.findById({_id:req.query.id})
        res.json(data)
    }catch(e){
        console.log(e)
        console.log(req.query)
    }
}

var updateGrid = async(req,res)=>{
    try{
        let data = await tModel.gameModel.findById(req.query.id)
        let update = utility.checkWinner(data,{r:req.body.row,c:req.body.column,p:req.body.player})
        await tModel.gameModel.findByIdAndUpdate(req.query.id,update)
        res.send("")
    }catch(e){
        console.log(e)
    }
}


var getAll = async(req,res)=>{
    var data = await tModel.gameModel.find({})
    res.json(data)
}

var reset = async(req,res)=>{
    try{
        let data = await tModel.gameModel.findById(req.query.id)
        data.game = [['','',''],['','',''],['','','']]
        data.turn = 'X'
        data.draw = []
        data.dec = {decided:false,msg:""}
        await tModel.gameModel.findByIdAndUpdate(req.query.id,data)
        res.send('reset Successful')
    }catch(e){
        console.log(e)
    }
}



module.exports = {
    home,
    create,
    getAll,
    getDetails,
    updateGrid,
    reset
}
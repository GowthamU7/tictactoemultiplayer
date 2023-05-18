var mg = require("mongoose")

var modelSchema = mg.Schema({
    player1:String,
    player2:String,
    game:[['','',''],['','',''],['','','']],
    dec:{},
    draw:[String],
    turn:String,
    player1Score:Number,
    player2Score:Number
})


var gameModel = new mg.model('tictactoe',modelSchema)

module.exports = { gameModel }
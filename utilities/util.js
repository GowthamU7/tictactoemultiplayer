

var checkWinner = (data,details)=>{
    if(data.game[details.r][details.c] == '' && !data.dec.decided){
        data.game[details.r][details.c] = details.p
        data.turn = data.turn =="X"?"O":"X"
        var dec = decider(data.game)
        if(dec != 'D'){
            data.dec.decided = true
            data.dec.msg = `${data.turn == 'O'?data.player1:data.player2} Won!`
            if(data.turn == 'O'){
                data.player1Score++
            }else{
                data.player2Score++
            }
        }else{
            data.draw.push('D')
            if(data.draw.length == 9){
                data.dec.decided = true
                data.dec.msg = "It is a draw!"
            }else{
                data.dec.decided = false
                data.dec.msg = "You still have chance"
            }
        }
    }
    return data
}


var decider = (grid)=>{
    for(let i=0;i<3;i++){
        if(grid[i][0]+grid[i][1]+grid[i][2] === 'XXX' || grid[i][0]+grid[i][1]+grid[i][2] === 'OOO') return grid[i][0]
    }
    for(let i=0;i<3;i++){
        if(grid[0][i]+grid[1][i]+grid[2][i] === 'XXX' || grid[0][i]+grid[1][i]+grid[2][i] === 'OOO') return grid[0][i]
    }
    if(grid[0][0]+grid[1][1]+grid[2][2] === 'XXX' || grid[0][0]+grid[1][1]+grid[2][2] === 'OOO') return grid[0][0]
    if(grid[0][2]+grid[1][1]+grid[2][0] === 'XXX' || grid[0][2]+grid[1][1]+grid[2][0] === 'OOO') return grid[0][2]
    return 'D'
}

module.exports={checkWinner}
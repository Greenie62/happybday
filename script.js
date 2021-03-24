var candles = document.querySelectorAll(".candle");


candles.forEach(c=>{
    c.style.backgroundColor = `hsl(${Math.random() * 200 | 0},100%,50%)`
})


var crosswordDOM = document.querySelector(".crossWord")

var crosswordMatrix=[
    [0,0,'H','A','P','P','Y',0,0],
    [0,'B',0,0,'A',0,0,0,0],
    [0,'I',0,0,'T',0,'T','O',0],
    [0,'R',0,0,'S',0,'E',0,'M'],
    [0,'T',0,0,0,0,'A',0,'A'],
    [0,'H',0,0,0,0,'C',0,'G'],
    [0,'D','O','G',0,0,'H',0,'G'],
    [0,'A',0,0,0,0,0,0,'I'],
    [0,'Y','O','U',0,0,0,0,'E'],
]

var indexes = [2,4,10,24,35,55,73]
var idxCounter = 0;
var questionCounter = 1;

crosswordMatrix.forEach(row=>{
    row.forEach(cel=>{
     
        let gameTile = document.createElement("div");
            gameTile.className="gametile";
            if(cel === 0){
                gameTile.classList.add('emptyTile')
            }
            else{
                gameTile.classList.add("letterTile")
                gameTile.setAttribute('data-letter',cel)
                // gameTile.innerHTML = `<h3>${cel}</h3>`
            }
            indexes.forEach((i,index)=>{
                if(idxCounter === i){
                    // indexes.splice(index,1)
                    console.log("WTF?")
                    gameTile.innerHTML = `<h3>${questionCounter}</h3>`
                    questionCounter++
                }
             
            })
            crosswordDOM.appendChild(gameTile)
            idxCounter++


    })
})



let letterTiles = document.querySelectorAll(".letterTile")


console.log(letterTiles)
let letterIdx=0;


function changeTiles(){
    letterTiles[letterIdx].innerHTML = `<h3>${letterTiles[letterIdx].getAttribute('data-letter')}`
    letterIdx++;
    if(letterIdx < letterTiles.length){
    return setTimeout(changeTiles,1000)
    }
    console.log("Happy birthday!")
}


changeTiles()
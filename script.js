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

var indexes = [{num:2,answer:'happy'},{num:4,answer:'pats'},{num:10,answer:'birthday'},{num:24,answer:{across:'to',down:"teach"}},{num:35,answer:'maggie'},{num:55,answer:'dog'},{num:73,answer:'you'}]
var idxCounter = 0;
var questionCounter = 1;
let numCount=0;

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
                let h3Text = document.createElement("h3");
                h3Text.className = 'h3letter'
                h3Text.innerHTML = cel
                gameTile.appendChild(h3Text)
            }
            indexes.forEach((i,index)=>{
                if(idxCounter === i.num){
                    // indexes.splice(index,1)
                    console.log("WTF?")

                    let h3num = document.createElement("h3");
                        h3num.className = 'h3number'
                        h3num.innerHTML = questionCounter
                    gameTile.appendChild(h3num)

                    gameTile.setAttribute("num-idx",numCount)
                    numCount++
                    questionCounter++
                }
             
            })
            crosswordDOM.appendChild(gameTile)
            idxCounter++


    })
})



let letterTiles = document.querySelectorAll(".h3letter")
let gameTiles = document.querySelectorAll('.letterTile')
let h3numbers = document.querySelectorAll(".h3number")
console.log(letterTiles)
let letterIdx=0;


function changeTiles(){
    if(gameTiles[letterIdx].getAttribute("num-idx")){
        h3numbers[gameTiles[letterIdx].getAttribute('num-idx')].innerHTML = ""
    }
    letterTiles[letterIdx].style.opacity = 1
    letterIdx++;
    if(letterIdx < letterTiles.length){
    return setTimeout(changeTiles,500)
    }
    else{
        fetchDog()
    }
    console.log("Happy birthday!")
}


setTimeout(()=>{
changeTiles()
},1500);


let dogImageDOM = document.querySelector(".dogImage")
let progressDOM = document.querySelector(".progress");
let scoreCard = document.querySelector(".scoreCard");
let progress = 0;

function fetchDog(){
    scoreCard.style.opacity = 1;
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res=>res.json())
    .then(res=>{
        console.log(res);
        dogImageDOM.innerHTML = `<img src=${res.message} class='dogpic' alt='img'>` 
        calculate()
    })
}



function calculate(){
    progressDOM.innerHTML = `${progress}%`
    let number = Math.random() * 20 | 0;
    progress += number;

    if(progress < 100){
        setTimeout(calculate,500)
    }
    if(progress > 100){
        progress = 100;
        progressDOM.innerHTML = `${progress}%`
        setTimeout(()=>{
            progressDOM.innerHTML = ""
            let score = (Math.random() * 100 | 0) + 1750
            let message = ""
            if(score < 1800){
                message = "Musta forgot how to type!! 😁"
            }
            else{
                message = "Awesome!!"
            }
            progressDOM.innerHTML = `<h2>${score}</h2><br><h3>${message}</h3>`
        },500)
    }

}
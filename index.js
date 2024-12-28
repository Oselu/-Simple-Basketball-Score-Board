let scBoard = document.getElementById("sc-board") 
let scBoardAway = document.getElementById("sc-board-away")
let homeCount = 0
let awayCount = 0
function OnePointerA(){
    homeCount=homeCount+1
    scBoard.textContent= homeCount
}

function TwoPointerA(){
    homeCount= homeCount+2
    scBoard.textContent=homeCount
}

function ThreePointerA(){
    homeCount=homeCount+3
    scBoard.textContent=homeCount
}

function OnePointerB(){
    awayCount=awayCount+1
    scBoardAway.textContent= awayCount
}

function TwoPointerB(){
    awayCount= awayCount+2
    scBoardAway.textContent=awayCount
}

function ThreePointerB(){
    awayCount=awayCount+3
    scBoardAway.textContent=awayCount
}

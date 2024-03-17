let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; // playerX,player0

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');// if game is reset then again  msg is hidefrom display 
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('button was clicked');
        // box.innerText="abc";//to get some value in the box

        if (turnO === true) {//player O turn
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X" ////player X turn
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () => {// after winning game all button is disabled 
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {// after winning game all button is disabled 
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";// reset the game or boxes
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disableBoxes();
}

const checkWinner = () => {
    for (pattern of winpatterns) {
        // console.log(patern[0],patern[1],patern[2]);// take  individual  index 
        // console.log(
        //     boxes[patern[0]].innerText, //innerText check  this is my position 1 
        //     boxes[patern[1]].innerText,//innerText check this is my position 2
        //     boxes[patern[2]].innerText);// check element of position 0,1,2

        //we can store inside the indivisual variable
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {// check position is not empty 
            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("winner", post1Val);

                showWinner(post1Val); // for display msg  to create new function
            }
        }
    }
}
newGameBtn.addEventListener('click', resetGame); // when  function resetGame  is triggered   if   we add EventListener
resetBtn.addEventListener('click', resetGame)
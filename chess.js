'use strict';

function chessGo() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let chess = document.querySelector('.chess');
    let block;
    let flag = true;

    for (let i = 0; i < 9; i++) {

        for (let j = 0; j < 9; j++) {

            if (i == 0) {
                block = document.createElement('div');
                block.className = 'block white';
                if (j > 0) {
                    let letter = letters[j - 1];
                    block.innerHTML = letter;

                }
                chess.appendChild(block);
            } else {
                if (j == 0) {
                    block = document.createElement('div');
                    block.className = 'block white';
                    let number = numbers[i - 1];
                    block.innerHTML = number;

                    chess.appendChild(block);
                } else {
                    if (j == 1) {
                        flag = !flag;
                    }

                    block = document.createElement('div');

                    if (flag) block.className = 'block white';
                    else block.className = 'block black';


                    chess.appendChild(block);
                    flag = !flag;
                }
            }
        }

    }
}


chessGo();
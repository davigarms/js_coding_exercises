const tvRemote = function(word) {
    let count = 0;
    let capsOn = false;
    word = "a" + word;
    for (let i = 0; i < word.length - 1; i++) {
        let letterFrom = {};
        let letterTo = {};
        for (let j = 0; j < keyboard.length; j++) {
            if (keyboard[j].name.toLowerCase() === word[i].toLowerCase()) {
                letterFrom = keyboard[j];
            }
        }
        let nextLetter = word[i + 1];
        if ((isUpperCase(nextLetter) && !capsOn) || (!isUpperCase(nextLetter) && capsOn)) {
            letterTo = capsLockKey;
            count += moveLetter(letterFrom, letterTo);
            letterFrom = capsLockKey;
            capsOn = !capsOn;
        }
        for (let j = 0; j < keyboard.length; j++) {
            if (keyboard[j].name.toLowerCase() === word[i + 1].toLowerCase()) {
                letterTo = keyboard[j];
            }
        }
        count += moveLetter(letterFrom, letterTo);
    }
    return count;

}

const isUpperCase = function(letter) {
    return letter === letter.toUpperCase();

}

const moveLetter = function(letterFrom, letterTo) {
    let movesX = Math.abs(letterFrom.x - letterTo.x);
    let movesY = Math.abs(letterFrom.y - letterTo.y);
    return movesX + movesY + 1;
}



const keyboard = [
    { name: "a", x: 0, y: 0 },
    { name: "b", x: 1, y: 0 },
    { name: "c", x: 2, y: 0 },
    { name: "d", x: 3, y: 0 },
    { name: "e", x: 4, y: 0 },
    { name: "1", x: 5, y: 0 },
    { name: "2", x: 6, y: 0 },
    { name: "3", x: 7, y: 0 },    
    { name: "f", x: 0, y: 1 },
    { name: "g", x: 1, y: 1 },
    { name: "h", x: 2, y: 1 },
    { name: "i", x: 3, y: 1 },
    { name: "j", x: 4, y: 1 },
    { name: "4", x: 5, y: 1 },
    { name: "5", x: 6, y: 1 },
    { name: "6", x: 7, y: 1 },   
    { name: "k", x: 0, y: 2 },
    { name: "l", x: 1, y: 2 },
    { name: "m", x: 2, y: 2 },
    { name: "n", x: 3, y: 2 },
    { name: "o", x: 4, y: 2 },
    { name: "7", x: 5, y: 2 },
    { name: "8", x: 6, y: 2 },
    { name: "9", x: 7, y: 2 },    
    { name: "p", x: 0, y: 3 },
    { name: "q", x: 1, y: 3 },
    { name: "r", x: 2, y: 3 },
    { name: "s", x: 3, y: 3 },
    { name: "t", x: 4, y: 3 },
    { name: ".", x: 5, y: 3 },
    { name: "@", x: 6, y: 3 },
    { name: "0", x: 7, y: 3 },   
    { name: "u", x: 0, y: 4 },
    { name: "v", x: 1, y: 4 },
    { name: "w", x: 2, y: 4 },
    { name: "x", x: 3, y: 4 },
    { name: "y", x: 4, y: 4 },
    { name: "z", x: 5, y: 4 },
    { name: "-", x: 6, y: 4 },
    { name: "/", x: 7, y: 4 }
];

const capsLockKey = {x: 0, y: 5};

const spaceKey = {x: 1, y: 5};

module.exports = {
    tvRemote
};
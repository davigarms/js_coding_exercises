const tvRemote = function(word) {
    let buttonPresses = 0;

    let initialPos = [0, 0];

    let chars = word.split("");

    const keyboard = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'], 
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'], 
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'], 
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
      ];

      chars.forEach(char => {
        let row = keyboard.findIndex(row => row.indexOf(char) > -1);
        let col = keyboard[row].indexOf(char);

        let colDiff = Math.abs(col - initialPos[0]);
        let rowDiff = Math.abs(row - initialPos[1]);

        buttonPresses += rowDiff + colDiff + 1; //Add Ok Button
                    
        initialPos = [col, row];
      });

      return buttonPresses;
}

module.exports = {
    tvRemote
};
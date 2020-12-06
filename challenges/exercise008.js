const tvRemote = function(word) {
    let presses = 0;
    presses += word.length;

    let initialPos = [0, 0];

    const keyboard = [
        ['a', 'b', 'c', 'd', 'e', '1', '2', '3'], 
        ['f', 'g', 'h', 'i', 'j', '4', '5', '6'], 
        ['k', 'l', 'm', 'n', 'o', '7', '8', '9'], 
        ['p', 'q', 'r', 's', 't', '.', '@', '0'],
        ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
      ];

      let row = keyboard.findIndex(row => row.indexOf(word) > -1);
      let col = keyboard[row].indexOf(word);

      let colDiff = Math.abs(col - initialPos[1]);
      let rowDiff = Math.abs(row - initialPos[0]);

      presses += rowDiff + colDiff; 

      return (presses)
}

module.exports = {
    tvRemote
};
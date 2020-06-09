'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});




function readLine() {

    return inputString[currentLine++];
}

// Complete the checkMagazine function below.

// # Complete the checkMagazine function below.

// # The parameters are an array of strings

// # Given the words in the magazine and the words in the ransom note, 

// # print Yes if he can replicate his ransom note exactly using whole words from the magazine; 

// # otherwise, print No.

// #The words in his note are case-sensitive and he must use only whole words available in the magazine.

// # magazine is an array
// # note is the array


    //Question: How do check for case sensitivity?
    //Does localCompare method just test for case sensitivity or everything?
    //Answer: note.localCompare(magazine)
    


function checkMagazine(magazine, note) {
    //1. Take the magazine string and change it to an array using .split(' ')
    const magazineStr = magazine.split(' ')
    //2. Take the note string and also change it to an array using .split(' ')
    const noteStr = note.split(' ')
    //3. Now for each string in the note array, need to check:
    // See if the string is included in the magazine array, if true, print No
    noteStr.localCompare(magazineStr)
        if (1) {
            console.log('Yes')
        }else {
            console.log('No')
        }
    

    //Otherwise, check to see if the uppercases and lowercases match using .localCompare method. 
    //If 1, print Yes, otherwise print no.


}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}








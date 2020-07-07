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
    const magazineArr = magazine.toString().split(' ');
    const noteArr = note.toString().split(' ');
    //Implement the Anagram Algorithm for this problem
    //Make an edge case for this problem.  The words are case-sensitve so if that doesn't match, then this is automatically "NO"
    // if (magazine.localCompare(note) === 1) {
    //     return "NO"
    // }
    //For the magazine
    //Create a JS object called checkMagazine
    const checkMag = {};
    //Loop over the words from the magazine.
    for(let i=0; i < magazineArr.length; i++) {
        let word = magazineArr[i]
        //If the word is found in the object, then increment the word.
        //If the word is not found in the object, then set it equal to 1
        checkMag[word] ? checkMag[word] +=1 : checkMag[word] = 1
     }
    //For the note
    //Loop through the note
    for (let i = 0; i < noteArr.length; i++) {
        let word = noteArr[i]
        //If the word is not found in checkMagazine, return 'NO'
        if(!checkMag[word]) {
            return "NO"
            //Otherwise decrement the word in the note
        }else {
           checkMag[word] -= 1 
        }
        //Return "Yes" for the loop
    }
    return "YES"   
}

console.log(checkMagazine('two times two is four', 'two times two is four'))










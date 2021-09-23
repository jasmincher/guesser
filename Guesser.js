function letterGuesser(){
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    let rand = Math.floor(Math.random() * alphabet.length)

    let input = prompt(`Your letter is ${alphabet[rand]}. Guess ${alphabet[rand]}'s index number`);

    if(parseInt(input) === rand){
        alert("You definitely know the alphabet");
    }else{
        alert(`Incorrect, you will have to re-learn the abc's. The index of ${alphabet[rand]} is ${rand}`);
    }
}

letterGuesser();
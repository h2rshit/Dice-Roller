function rolldice() {
    const numDice = document.getElementById("numInp").value;
    //const diceResult = document.getElementById("result");
    // const diceImages = document.getElementById("resultImages");
    const values = [];
    const Images = [];

    for (let index = 0; index < numDice; index++) {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        Images.push(`<img src="Images/${value}.png" alt="Dice image of ${value}">`); 
    }
resultImages.innerHTML = Images.join("");
}
//Random Number Generator
//12/2/20

generateRandom = function(toNum) {
    generateRandom = Math.floor(Math.random() * toNum) + 1;
    //console.log(generateRandom);
    return generateRandom
};

//generateRandom(10);
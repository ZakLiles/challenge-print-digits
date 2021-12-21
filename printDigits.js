const printDigits = num => {
    while(num){
        console.log(num % 10);
        num = Math.floor(num / 10);
    }
    console.log(" ")
}

const testCases = [1, 314, 12, 485, 3284, 6894, 83];

for (let i = 0; i<testCases.length; i++){
    printDigits(testCases[i]);
}

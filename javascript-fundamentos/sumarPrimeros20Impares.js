const sumOddFirst = (oddLimitNumber) => {
    let sum = 0;
    for (let i = 1; i <= oddLimitNumber; i += 2) {
        sum += i;     
    }
    return sum;
}

const sumOddFirstV2 = (firstOddNumber) => {
    let sum = 0;
    for (let i = 0; i < firstOddNumber; i++) {
        let nextOddNumber = i * 2 + 1;
        sum += nextOddNumber            
    }
    return sum;
}
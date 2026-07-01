function reverseNumber(num) {
    const sign = Math.sign(num);

    num = Math.abs(num);

    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse * sign;
}

console.log(reverseNumber(123));     
console.log(reverseNumber(-456));   
console.log(reverseNumber(1200));  
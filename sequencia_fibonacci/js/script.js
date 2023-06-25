function fibonacciSequence() {
    let a = 1;
    let b = 1;
    let c;
    while (a <= 500) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    }
}
fibonacciSequence();
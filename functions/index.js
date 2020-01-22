//1
function sum(sum1, sum2) {
    console.log(sum1 + sum2);
}

sum(4, 66);

//2
function largest(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is the largest.");
    } else {
        console.log(num2 + " is the largest");
    }
}

largest(73, 70);

//3
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd");
    }
}

evenOrOdd(10);

//4
function stringyMcStringFace(string) {
    if (string.length <= 20) {
        console.log(string + string);
    } else {
        console.log(string.substring(0, string.length / 2));
    }
}

stringyMcStringFace("Thisisprobablywaymorethantwentycharacters");


//Optional Challenge
//1 
function fibonacciSum(n) {
    var fibonacciArray = [1, 1];
    var sum = 0;

    for (var i = 3; i <= n; i++) {
        fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 3]);
    }
    for (var x = 0; x < fibonacciArray.length; x++) {
        sum += fibonacciArray[x];
    }
    console.log("The sum of Fibonacci sequence numbers: " + fibonacciArray + " is " + sum);
}

fibonacciSum(4);


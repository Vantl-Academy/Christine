
function print(value) {
    console.log(value)
}


//you don't need the space after integer1, < that's only really for readability.
// do not need to wrap parenthesis after return
function plus(integer1, integer2) {
    print(integer1 + integer2)
    return integer1 + integer2
}

plus (1,2)

let sum = plus(1, 2);
let sum2 = plus(sum, sum);

print(sum2)


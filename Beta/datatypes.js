
let number = 1
let float = 1.1; // this doesn't really work because you would have negative powers.

// on or off
// on off on off off 
// 24 = 2*10 + 4*1 -> 1 10 100 -> 10^0 10^1 10^2 -->
// 2^0 2^1 2^2 2^3
// 16 + 8
// sums of powers of two

let string = "cat" // List.of("c", "a", "t") -> ["c", "a", "t"]
// a -> 1, b -> 2 ... z -> 26


// 3 1 17
// ASCII ^ is something like this
// binary has a translation table

// Organization of data -> Everything is a graph
// Relational types ->
// (Start here) c -> a -> t


// cat catherine
// c -> a -> t -> (STOP)
//             -> h -> r -> i -> n -> e



function add(list) {
    var sum = 0
    for (var i = 0; i < list.length; i++) {
        sum = sum + retrieve(list, i)
    }
    // i = 0 is i < list.size () = 3 ? Yes ? -> {
    // do what i said
    // }
    // i = 1 is i < list.size () = 3 ? Yes ? -> {
    // do what i said
    // }
    // i = 0,i = 1, i = 2, i =3 ->
    list.forEach(element => {
        
    });
    return sum;
}

//console.log(summation([24, 31, 28, 28]))


function summation(list) {
    var sum = 0 //var = variable
    return list.reduce((sum, element) => sum + element) // lamda = unnamed functions
}


function reduce(list, parameter) {

}


function reduction(list) {
    return list


function retrieve(list, index) {
    let test = ["a", "b", "c"];
    return list[index] // + *
}




// Write a function ..... function subtractor(alpha, list)
// Have two parameters
// The first parameter, alpha (integers)
// The second parameter, list of elements (number)
// return alpha - [list]

function print(value) {
    console.log(value)
}3

function alpha(list) {
    let sum = 0
    let element = [24, 31, 28, 28]
    return list.reduce((subtract, element) => subtract + element);
   
}

    vbbbb
function subtractor(alpha, list) {
    let sum = summation(list)
    return alpha - sum

}


let sub = subtractor(5, [1, 2, 3]) 
function* getFibonachi (n) {
    
    let start = 0

    let prev = 0
    let next = 1
    let sum = prev + next

    while(start < n - 1) {
        yield sum

        prev = next
        next = sum
        sum = prev + next
        start++
    }

}

let iter = getFibonachi (30)


// let obj = iter.next()

// while(obj.done === false) {
//     console.log(obj.value)
    
//     obj = iter.next()
// }

// Քանի որ generator function-ը վերադարձնում է iterator object, ուստի for of ցիլը կիրառելի կլինի նաև այդ օբյեկտի վրա, այսինքն 23-րդ տողից սկսած կարող ենք կարող ենք գրել հետևյալ կերպ

for(value of iter) {
    console.log(value)
}

// // 0 1 1 2 3 5 8 13
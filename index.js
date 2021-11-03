// example data
const exampleArray = [10, 4, 100, 35, 31, 23, 443, 221, 342, 10, 12, 42];
const shit = ["function", null, function() {}, () => {}, 10, 100, {}];
const exampleArray2 = [
    [10, 4, "100", 35, "31", "23", 443, "221", "342", 10, 12, 42]
]

//object
function Point(x, y) {
    this.x = x;
    this.y = y;
}

// My proposals

/**
 * Exercise 1
 * imperative
 */

/**
 * Search for first position for a value in a array and return the index or null if not found.
 * @param {*} array Array where to search
 * @param {*} value Value for search to
 * @returns index for first occurrence or null
 */
function findInArray(array,value) {
    if ( ! Array.isArray(array) ) {
        console.error('First argument must be an array')
        return
    }
    for ( idx in array ) {
        if ( array[idx] === value) return idx
    }
    return null
}
/* Tests */
//console.log(findInArray('',1))
//console.log(findInArray([0,1,2,3,4],1))
//console.log(findInArray([0,1,2],3))
console.log(`Ejercicio 1 imperativo: ${findInArray(exampleArray,4)}`)

/**
 * Exercise 1
 * declarative
 */

/**
 * Similar to previous, but return undefined in can't fiend value.
 * @param {*} array 
 * @param {*} value 
 * @returns 
 */
function findInArrayDeclarative(array,value) {
    if ( ! Array.isArray(array) ) {
        console.error('First argument must be an array')
        return
    }
    return array.indexOf( value )
}
/* Tests */
//console.log(findInArrayDeclarative('',1))
//console.log(findInArrayDeclarative([0,1,2,3,4],1))
//console.log(findInArrayDeclarative([0,1,2],3))
console.log(`Ejercicio 1 declarativo: ${findInArrayDeclarative(exampleArray,4)}`)

/**
 * Exercise 2
 */

/**
 * 
 * @param {*} array 
 * @returns 
 */
function getStrings(array) {
    return array.filter(
        item => typeof(item) === "string"
    )
}
/* Tests */
console.log('Ejercicio 2:', getStrings(shit))



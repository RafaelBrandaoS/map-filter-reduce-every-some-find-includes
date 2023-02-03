/* ========== map() ========== */

// dobrar valores
const numbers = [1, 5, 6, 4, 8, 9, 14]

function dobraNumbers(num) {
   return num * 2
}

const dobrarNumbers = numbers.map(dobraNumbers)

//console.log(dobrarNumbers)

// farenheight para celsils

const farenheight = [23, 80, 22, 117, 75]

function convercao(elem) {
   return Math.round((elem - 32) * 5/9)
}

const celsius = farenheight.map(convercao)

//console.log(celsius)

/* ========== map() ========== */



/* ========== filter() ========== */

const array = [4, 2, 5, 27, 14, 4, 3, 5, 2, 10]

const removeRepitidos = array.filter((elem, index, arr) => arr.indexOf(elem) === index)

//console.log(removeRepitidos)

/* ========== filter() ========== */
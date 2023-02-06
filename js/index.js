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

const filterArray = [4, 2, 5, 27, 14, 4, 3, 5, 2, 10]

const removeRepitidos = filterArray.filter((elem, index, arr) => arr.indexOf(elem) === index)

//console.log(removeRepitidos)

/* ========== filter() ========== */



/* ========== reduce() ========== */

const foguetes = [
   { pais: 'Russia', lancamentos: 35 },
   { pais: 'US', lancamentos: 28 },
   { pais: 'China', lancamentos: 19 },
   { pais: 'Europa', lancamentos: 8 },
   { pais: 'India', lancamentos: 5 },
   { pais: 'Japão', lancamentos: 4 },
   { pais: 'Inglaterra', lancamentos: 2 }
]

const totalDeLancamentos = foguetes.reduce( ( preVal, elem ) => preVal + elem.lancamentos, 0 )

//console.log(totalDeLancamentos)

/* ========== reduce() ========== */

/* ========== every() ========== */

// verificar se todos os elementos são maiores que 10
const everyArray = [19, 16, 30, 22, 22, 38, 17]

const maiorQueDez = everyArray.every( elem => elem >= 10)

//console.log(maiorQueDez)

//verificar se todos são maiores de idade

const usuarios = [
   {id: 13, nome: 'Isabelle', idade: 20},
   {id: 17, nome: 'Rafael', idade: 18},
   {id: 22, nome: 'Alisson', idade: 19},
   {id: 28, nome: 'Giovana', idade: 18},
   {id: 37, nome: 'Lara', idade: 19},
   {id: 39, nome: 'Guilherme', idade: 22}
]

const maiorDeIdade = usuarios.every(p => p.idade >= 18)

console.log(maiorDeIdade)

/* ========== every() ========== */
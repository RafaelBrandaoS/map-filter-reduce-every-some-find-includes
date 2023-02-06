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
   {id: 28, nome: 'Giovanna', idade: 18},
   {id: 37, nome: 'Lara', idade: 19},
   {id: 39, nome: 'Guilherme', idade: 22}
]

const maiorDeIdade = usuarios.every(p => p.idade >= 18)

//console.log(maiorDeIdade)

/* ========== every() ========== */



/* ========== some() ========== */

//verificar se há algum numero primo

function ePrimo( value ) {
   for (let i = 2; i < value; i++) {
      if (value % i === 0) {
         return false
      }
   }

   return value > 1
}

const somaArray = [6, 8, 12, 14, 42]

const numeroPrimo = somaArray.some(ePrimo)

//console.log(numeroPrimo)

//verificar por condições em valores/objetos

const equipe = [
   {id: 12, nome: 'Marcianos', piloto: true },
   {id: 22, nome: 'Petroboys', piloto: true },
   {id: 32, nome: 'Obesmartes', piloto: false },
   {id: 42, nome: 'Marconaldos', piloto: false }
]

const temPiloto = equipe.some(pessoa => pessoa.piloto)

//console.log(temPiloto)

/* ========== some() ========== */



/* ========== fing() ========== */


//pizzas
const pizzas = [
   'Mussarela',
   'Calabreza',
   'Marguerita',
   'QuatroQueijos'
]

const pizza = pizzas.find(p => p.startsWith('Q'))

//console.log(pizza)

//frutas
const frutas = [
   {name: 'maçã', quantidade: 3},
   {name: 'pera', quantidade: 0},
   {name: 'uva', quantidade: 8}
]

const fruta = frutas.find(fruta => fruta.name == "uva")

console.log(fruta)

/* ========== find() ========== */
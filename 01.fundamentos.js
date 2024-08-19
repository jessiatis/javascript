// Variables y Tipos de Datos
let fam = "Arrieta \n Pistala" //String
let fam2 = 'sj' //String
let fam3 = `Hola ${fam2}` //String
let num = 1 // Number
let num2 = 15
let bool = false //Boolean
let xy //Undefined
let za = null //Null

bool = true //Reassing 

const mor = fam+" Si" //Concat

console.log(fam,fam3,num,bool) //Print
  
// Operadores
console.log(num==bool) //True
console.log(num===bool) //False
console.log(num!=bool) //False
console.log(num!==bool) //True
console.log(num>10) //False
console.log(bool>=num) //True
console.log(num==bool && num2<num) //False
console.log(num==bool || num2<num) //True
console.log(!false) //True
console.log(!fam2) //True


// Estructuras de Control
if (fam2){
  console.log("Es verdadero")
} else{
  console.log("Es falso")
}

const ternaria = !fam2 
  ? "Es verdaderisimo" 
  : "Es falsisimo"
console.log(ternaria)

if (num==0){
  console.log(1)
} else if (num==1){
  console.log(2)
} else if (num==bool){
  consolo.log(3)
} else {
  console.log(4)
}


switch (num){
  case 0: {
    console.log(1.1)
  } 
  case 1: {
    console.log(2.2)
  } 
  case bool: {
    console.log(3.3)
    break
  }
  default:{
    console.log(4.4)
  }
}

// Funciones
function echo(dato1,dato2='x'){
  console.log(dato2," - ",dato1)
}

echo(fam2)
echo(fam2,fam2)
echo("Hola", "Mundo")

function sumar(num1, num2=0){
  const result = num1+num2
  return result
}

const miSuma = sumar(50,50)
console.log(miSuma)
echo(miSuma)

console.log(sumar(50,1))

function dividir(x,y){
  if (y!==0 && x!==0){
    const result = x/y
    return result 
  } else{
    const result = "La operación no se puede realizar"
    return result
  }
}

function dividir2(x,y){
  // Excepciones
  if(y===0 || x===0){
    return "La operación no se puede realizar"
  }
  if(typeof y === "string" || typeof x === "string"){
    return "Valores invalidos"
  }
  
  //Proceso
  const result = x/y
  return result
}
const miDiv = dividir2(20,5)
echo(`El resultado es: ${miDiv} de mi división y la suma es: ${miSuma}`)
echo(dividir2(10,0))
echo(dividir2("20",12))


const multiplicar = (x,y) => {
  return (typeof x == "number" && typeof y == "number")
    ? x*y 
    : "Valores no correctos"
}

echo(multiplicar("50",5))
echo(multiplicar(30,2))
echo(multiplicar(30,undefined))

const multiplicar2 = (x,y) => (
  x*y
)
echo(multiplicar2(45,3))

const multiplicar3 = (x,y) => x*y
echo(multiplicar3(4,5))

console.log("---------------------------------------------")

// Objetos y Arrays
const gata = {
  color: "negra",
  peluda: true,
  nombre: "Mia",
  edad: 22,
  incapacidades: {
    ciega: false,
    sorda: false,
    muda: true,
    coja: false,
  },
  capacidades: [
    "callada",
    "tierna",
    "juguetona",
    "cazadora",
  ],
  llamar: () => console.log("GGGGGG"),
  comer: (comida) => {
    if(!comida){
      console.log("* mirando fijamente")
      return null
    }
    if(comida == "clara de huevo"){
      console.log("* irme enojada")
      return null
    }
    console.log(`* Comiendo ${comida}`)        
  }
}

const incapacidad = gata.incapacidades.muda ? "es muda" : "no es muda"
const pelaje = gata.peluda ? "es peluda" : "no es peluda"
console.log(`Mi gata ${gata.nombre}, es una gata ${pelaje} y ${gata.color}.`)
console.log(`Ella ${incapacidad} con ${gata.edad} meses de edad.`)
console.log(`Me encanta que sea ${gata.capacidades[0]} pero ademas es:`)
gata.capacidades.forEach((capacidad)=>{
  console.log("-" , capacidad)
})


console.log("---------------------------------------------")

gata.llamar()
gata.llamar()
gata.llamar()
gata.llamar()

gata.comer()
gata.comer("pepitas")
gata.comer("pescado")
gata.comer("clara de huevo")

console.log("---------------------------------------------")


//exercicio 2
let caixa = document.getElementById("caixa")
let ver = document.getElementById("exibir")

function mostrar() 
      {
          ver.innerHTML = "Ola, "+ caixa.value +" tudo bem?"
      }

//exercicio 3
var metros = document.getElementById("Metros")
var ez = 100;
var show = document.getElementById("show")

function converter()
{
    show.innerHTML = parseInt(metros.value) / ez
}

//exercicio 4

var h = document.getElementById("numeracao")
var antecessor = document.getElementById("aa")
var sucessor = document.getElementById("sucessor")
function ol()
{
    aa.innerHTML = (h.value) - 1
    sucessor.innerHTML = (h.value) + 1
}






//exercicio 5

var nume1 = document.getElementById("maior")
var nume2 = document.getElementById("menor")
var resultado = document.getElementById("meee")

function resposta()
{
    if(nume1.value > nume2.value)
        {
            resultado.innerHTML = nume1.value
        } 
     
     else{
        resultado.innerHTML = nume2.value
     }   
}

//exercicio 6



//exercicio 7

var p = 1

while(p <= 100)
    {
        console.log(p)
        p = p + 1
    }
 
//exercicio 8

var j = 0
 while(j <= 50)
    {
    console.log(j) 
    j = j + 5
    }

 //exercicio 9
 
 var o = 100
  while(o >= 0)
    {
        console.log(o)
        o = o - 10
    }
let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

alert(`A soma dos números informados é: ${numberOne + numberTwo}`)
alert(`A subtração dos números informados é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos números informados é: ${numberOne * numberTwo}`)
alert(`A divisão dos números informados é: ${(numberOne / numberTwo).toFixed(2)}`)
alert(`O resto da divisão dos números informados é: ${numberOne % numberTwo}`)

let par = (numberOne + numberTwo) % 2 

if (par == 0) {
  alert('O número é par')
}

else {
  alert('Número é impar')
}

if (numberOne == numberTwo) {
  alert (`Os 2 números digitados são iguais`)
}

else {
  alert ('Os 2 números digitados são diferentes')
}
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input,output})
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
const firstName = await rl.question("podaj imie: ")
const lastName = await rl.question("podaj nazwisko: ")
const age:number = parseInt(await rl.question("Podaj wiek: "))
if(age>=18){
    console.log("pełnoletni")
}else{
    console.log("niepełnoletni")
}
console.log(`${firstName} ${lastName}`)
rl.close()
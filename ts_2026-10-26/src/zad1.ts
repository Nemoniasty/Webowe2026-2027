import { readFile, writeFile } from "node:fs/promises";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { type City } from "./models.js";

const rl = readline.createInterface({input,output});
// const cities:string[] = (await readFile("miasta.txt","utf-8")).split("\n");
// // console.log(cities);
// const search:string = await rl.question("Enter name of the city you are looking for: ");
// const searchResult:string[] = cities.filter(city => {
//     const cityData:string[] = city.split("|");

//     return cityData[0]?.toLowerCase().startsWith(search.toLowerCase());
// });
// console.log(JSON.stringify(searchResult,null,2));


// const cities:City[] = JSON.stringify(await readFile("miasta.txt","utf-8")).split("\n").map(city=>city.split("|"));


const cities:City[] = (await readFile("miasta.txt","utf-8"))
        .trim()
        .split("\n")
        .map(city=>{
            const [name,population,province]=city.split("|");
            if (name === undefined || population === undefined || province === undefined) {
                throw new Error(`Invalid city data: ${city}`);
            }

            return {
                name,
                population:Number(population),
                province
            };
        })
// console.log(JSON.stringify(cities,null,2));
const search:string = await rl.question("Enter name of the city you are looking for: ");
const searchResult:City[] = cities.filter(city=> city.name.toLowerCase().startsWith(search.toLowerCase()))
console.log(JSON.stringify(searchResult,null,2));
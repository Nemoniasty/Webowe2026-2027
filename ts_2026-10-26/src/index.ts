import { readFile, writeFile } from "node:fs/promises"
import type { Student } from "./models.js"

const students:Student[]=JSON.parse(await readFile("students.json","utf-8"))
    // .then(res=>{console.log(res)})
console.log(students)

const newStudent:Student = {
    id:0,
    name:"Alek",
    surname:"Slowik",
    age:18
}
students.push(newStudent)
await writeFile("students2.json",JSON.stringify(students,null,2))

const fs = require("fs") /// file accesing pacakges
const os = require("os") // operating system packages

// accessing command line arguments
// const [ , , n1, n2 ] = process.argv

// const sum = (num1, num2) => {
//   return +num1 + +num2
// }
// console.log("The addition of number is " , sum(n1,n2))

//console.log(hey "name" welcome to nodejs)

// files accessing 

// read a file 
fs.readFile("./sample.txt", "utf-8", (err, data)=>{
    if(err) {
        console.log(err)
    }else {
        console.log("file read succesfully")
        console.log(data);
    }
})

//writing
const content = "hey i'm a new file writen by nodejs"

fs.writeFile("./newfile.txt", content, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("file writtedn sucessfully")
    }
})

// updation of file 

const newContent = "\n new content added to this file"

fs.appendFile("./newfile.txt", newContent, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log("updated succesfully")
    }
})

//delete a file 
// fs.unlink("./newfile.txt", (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("file deleted sucessfully")
//     }
// })


fs.readdir("./newFolder", (err, data)=>{
    if(err){
        console.log(err) 
    }else {
        console.log(data)
    }
})

// os level access
console.log("OS version-----", os.version());
console.log("Free memory-----", os.freemem());
console.log("total memory----", os.totalmem());
console.log("CPU-------", os.cpus());

//date and time
let time = Date.now(); 
console.log("timestamp---:", time);
let date = new Date();
let utc = date.toUTCString();
console.log("utc---:", utc);
let today = date.getDate();
console.log("date---:", today);
let month = date.getMonth();
console.log("month---:", month)
let year = date.getFullYear();
console.log("year----:", year)
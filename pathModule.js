const path = require('path')
console.log(path.sep)
let myPath = path.join('/home/ahmed','/Downloads')
console.log(myPath)
let base = path.basename(myPath)
console.log(base)
let absPath = path.resolve(__dirname)
console.log(absPath)
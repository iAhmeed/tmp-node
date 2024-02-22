const fs = require('fs')
let first = fs.readFileSync('./first.txt','utf8')
let second = fs.readFileSync('./second.txt','utf8')
console.log(first)
console.log(second)
fs.writeFileSync('./first.txt','Hello 1',{flag : "a"})
fs.writeFileSync('./second.txt','Hello 2',{flag : "a"})
fs.readFile('./first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const firstAsync = result
    fs.readFile('./second.txt','utf8',(err,result) =>{
        if (err) {
            console.log(err)
            return
        }
        const secondAsync = result
        fs.writeFile('./resultAsync.txt',`This is the result ${firstAsync} ${secondAsync}`,(err,result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})
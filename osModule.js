const os = require('os')
console.log(os.userInfo())
console.log(os.uptime())
myOS = {
    name : os.type(),
    release : os.release(),
    TotalMem : os.totalmem(),
    FreeMem : os.freemem()
}
console.log(myOS)
console.log(myOS.TotalMem > myOS.FreeMem)
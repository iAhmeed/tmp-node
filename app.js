const amount = 9
if (amount < 10) {
    console.log('Small Number')
}
else {
    console.log('Large Number')
}
console.log(`Hey it's my first app`)
SayHi = require('./modules')
names = require('./names')
SayHi(names.name1)
SayHi(names.name3)
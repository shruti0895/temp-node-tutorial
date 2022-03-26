const os = require('os');

// info about current user

const currentUser = os.userInfo()
console.log(currentUser)

// method returns the system uptime in seconds

console.log(os.uptime())

const currentOS = {
    name :  os.type(),
    release : os.release(),
    totalMem : os.totalmem()
}

console.log(currentOS)
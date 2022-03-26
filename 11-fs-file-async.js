const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8', (err, res) =>{
    if(err) {
        console.error(err)
        return
    }
    console.log(res)
    const first = res
    readFile('./content/second.txt','utf8', (err, res) =>{
        if(err) {
            console.error(err)
            return
        }
        console.log(res)
        const second = res
        writeFile('./content/result-async.txt', `${first} ${second}`, (err, ress) => {
            if(err){console.error(err); return}
            console.log(res)
        })
    })
})
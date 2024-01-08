
function resolveAfterNSeconds(n){
    return new Promise(resolve => {
        setTimeout(() => {resolve("finished")}, 1000 * n)
    })
}


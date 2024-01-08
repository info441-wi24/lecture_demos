
function resolveAfterNSeconds(n){
    return new Promise(resolve => {
        setTimeout(() => {resolve("finished")}, 1000 * n)
    })
}

async function testAwait(){
    console.log("about to wait")
    await resolveAfterNSeconds(5)
    console.log("finished the 5 second wait")
}

testAwait()
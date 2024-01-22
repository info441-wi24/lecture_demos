async function createUser(){
    // get info from html inputs
    let first_name = document.getElementById("first_name_input").value
    let last_name = document.getElementById("last_name_input").value
    let favorite_ice_cream = document.getElementById("favorite_ice_cream_input").value

    // put info in JSON format
    let myData = {
        first_name: first_name,
        last_name: last_name,
        favorite_ice_cream: favorite_ice_cream
    }
    console.log(myData)

    // send info in POST request to server API
    await fetch("api/v1/users", {
        method: "POST",
        body: JSON.stringify(myData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}



//TODO: make this getUsers
async function getPterosaurs(){
    let response = await fetch("api/v1/getPterosaurs")
    let PterosaurJson = await response.json();

    let PterosaurHtml = PterosaurJson.map(onePterosaur => {
        return `
        <div>
            <p>${onePterosaur.Genus}</p>
            <img src="${onePterosaur.img}" />
        </div>
        `
    }).join("")

    document.getElementById("results").innerHTML = PterosaurHtml
}
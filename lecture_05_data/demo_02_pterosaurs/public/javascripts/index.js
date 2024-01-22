async function getPterosaurs(){
    let response = await fetch("api/v1/getPterosaurs")
    let PterosaurJson = await response.json();

    document.getElementById("results").innerHTML = PterosaurJson
}
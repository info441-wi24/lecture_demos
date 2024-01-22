async function getPterosaurs(){
    let response = await fetch("api/getPterosaurs")
    let PterosaurJson = await response.json();

    document.getElementById("results").innerHTML = PterosaurJson
}
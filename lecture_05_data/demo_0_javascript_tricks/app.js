///////////////////////////
//Template Strings

// values that we want in html
let title = "This page"
let subtitle = "this is an example page"
let description = "This is the description of my page"

// string addition
let html =  "<html><body>" +
            "<h1>" + title + "</h1>" +
            "<h2>" + subtitle + "</h2>" +
            "<p>" + description + "</p>" +
            "</body></html>"

console.log(html)

// template strings
let html2 = `
<html>
<body>
    <h1>${title}</h1>
    <h2>${subtitle}</h2>
    <p>${description}</p>
</body>
</html>
`
console.log(html2)

// What if description is undefined?

// solution 1: ternary operator
// condition ? true return value : false return value
let html3 = `
<html>
<body>
    <h1>${title}</h1>
    <h2>${subtitle}</h2>
    <p>${description ? description : ""}</p>
</body>
</html>
`
console.log(html3)

// solution 2: function
function descriptionHtml(description){
    if(description){
        return `<p>${description}</p>`
    } else{
        return ""
    }
}
let html4 = `
<html>
<body>
    <h1>${title}</h1>
    <h2>${subtitle}</h2>
    ${descriptionHtml(description)}
</body>
</html>
`
console.log(html4)


////////////////////////
// Iterators Demo

let dataArr = [
    "first name : Kyle",
    "last name : Thayer",
    "age : 40",
    "glasses : yes"
]

// "forEach" runs a function on each item in an object/array
// we will use it to extract the values into an object
let valuesDictionary = {}
dataArr.forEach(item => {
    let split_item = item.split(" : ")
    let item_key = split_item[0]
    let item_value = split_item[1]
    valuesDictionary[item_key] = item_value
})
console.log(valuesDictionary)

// "map" creates a modified version of an array
// the new array has values that are the result of running a function
// on items in the original array

// map demo 1: replace ":" with "="
let modifiedDataArr = dataArr.map(item =>{
    return item.replace(":", "=")
})
console.log(modifiedDataArr)

//map demo 2: just get the key (first part) of each string
let modifiedDataArr2 = dataArr.map(item => {
    return item.split(" : ")[0]
})
console.log(modifiedDataArr2)

// "filter" goes through an array and makes a new array with 
// only the items that passed a given function (returned true)
// try keeping only "name" items
let filteredDataArr = dataArr.filter(item => {
    if(item.includes("name")){
        return true //keep it
    }else{
        return false // don't keep it
    }
})
console.log(filteredDataArr)

//note: this is equivalent:
// let filteredDataArr = dataArr.filter(item => {return item.includes("name")})

// we can "chain" these commands together
// get only name info, but also replace ":" with "="
let filteredDataArr2 = 
    dataArr
        .filter(item => item.includes("name"))
        .map(item => item.replace(":", "="))

console.log(filteredDataArr2)



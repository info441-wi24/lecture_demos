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
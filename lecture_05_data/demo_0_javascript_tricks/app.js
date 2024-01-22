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
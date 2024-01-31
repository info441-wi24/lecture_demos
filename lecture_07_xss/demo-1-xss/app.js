import * as cheerio from 'cheerio'
import express from 'express'
const app = express()

// based on answer here: https://stackoverflow.com/questions/40263803/native-javascript-or-es6-way-to-encode-and-decode-html-entities
const escapeHTML = str => String(str).replace(/[&<>'"]/g, 
  tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag]));

const userInputWithHTML = "You <em>shouldn't</em> allow <strong>any</strong> html from users to be rendered as html."

function vulnerableAddUserInput(){
    return `
    <p>
    <strong>Here is the user input:</strong> ${userInputWithHTML}
    </p>
    `
}


function fixWithFunction(){
    return `
    <p>
    <strong>Here is the user input:</strong> ${escapeHTML(userInputWithHTML)}
    </p>
    `
}


function fixWithInnerText(){
    let htmlString =  `
    <p>
    <strong>Here is the user input:</strong> <span id='userInput1'></span>
    </p>
    `

    let parsedHTML = cheerio.load(htmlString)
    parsedHTML('#userInput1').text(userInputWithHTML)

    return parsedHTML.html()

    // in the browser, use:
    //   document.getElementById("userInput1").innerText = userInputWithHTML
}


app.get('/', (req, res) => {
    res.send(`
    <html><body>
    <h1> demo for xss escaping</h1>

    <h2> vulnerable user input </h2>
    ${vulnerableAddUserInput()}

    
    <h2> fix with a function </h2>
    ${fixWithFunction()}

    <h2> fix with a innerhtml </h2>
    ${fixWithInnerText()}
    
    </body>
    </html>
    `)
})

app.listen(3000, ()=>{
    console.log('Example app listening at http://localhost:3000')
})
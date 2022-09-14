const path = require('path');
const hw2Functions = require('../code/HW2')

exports.getHW2 = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'hw2.html'))
}

exports.postHW2 = (req, res) => {
    fText = req.body.fText
    pWord = req.body.palText
    
    res.send(`
        <h2> Traducción </h2>
        <p> ${hw2Functions.translateF(fText)} </p>
        <h2> Palindrome </h2>
        <p><strong>${pWord}</strong> ${hw2Functions.isPalindorme(pWord)}</p>
    `)
    
}
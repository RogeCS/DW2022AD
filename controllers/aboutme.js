const path = require('path');

exports.getAboutMe = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'about.html'))
}
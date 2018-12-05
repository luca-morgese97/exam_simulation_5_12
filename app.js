
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

function string_square(s) {
    if (typeof s === 'string') {
        let length = s.length;
        return length * length;
    } else {
        return -1;
    }
}

app.get('/', function (req, res) {
    res.send('Hello there!');
});

app.get('/square', function(req, res) {
    let stringValue = req.query.string;
    let value = string_square(stringValue);
    res.json({"result": value});
});

app.listen(port, () => {
    console.log('App listening on port: ' + port);
});

module.exports.string_square = string_square;
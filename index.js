const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); 

// වෙබ් පිටුව පෙන්වීම
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('------------------------------------');
    console.log('VIRELIX STORE IS LIVE!');
    console.log('URL: http://localhost:3000');
    console.log('------------------------------------');
});
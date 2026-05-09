const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// ආරම්භක බඩු කිහිපයක්
let products = [
  {name:"Smart Watch", img:"https://via.placeholder.com/300", price:25, cat:"electronics"},
  {name:"LED Shoes", img:"https://via.placeholder.com/300", price:40, cat:"fashion"}
];

// Home Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Login Page
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

// Vendor Dashboard
app.get('/vendor', (req, res) => res.sendFile(path.join(__dirname, 'vendor.html')));

// සියලුම බඩු ලබා ගැනීමට (API)
app.get('/api/products', (req, res) => res.json(products));

// අලුත් බඩු ඇතුළත් කිරීමට (Vendor Dashboard එකෙන්)
app.post('/api/add-product', (req, res) => {
    products.push(req.body);
    console.log("අලුත් බඩුවක් ඇතුළත් කළා:", req.body.name);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log('VIRELIX LIVE AT: http://localhost:3000');
});
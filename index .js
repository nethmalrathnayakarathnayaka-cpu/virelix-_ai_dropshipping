app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/vendor', (req, res) => {
    res.sendFile(path.join(__dirname, 'vendor.html'));
});
const express = require('express');
const createUser = require('./user');
const createCompany = require('./company');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/users/new', (req, res) => {
    res.json(createUser());
});

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany());
});

app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

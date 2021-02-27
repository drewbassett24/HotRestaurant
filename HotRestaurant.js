const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        customerName: "Mr Bassett",
        phoneNumber: "12134356",
        customerEmail: "codswallop.com",
        customerID: "Table1",
    },
];
const waitingList = [];


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/book_a_table', (req, res) => res.sendFile(path.join(__dirname, 'book_a_table.html')));

app.get('/availability', (req, res) => res.sendFile(path.join(__dirname, 'availability.html')));

app.get('/api/tables', (req, res) => res.json(tables));

app.get('/api/waitingList', (req, res) => res.json(waitingList));

app.post('/api/tables', (req, res) => {

const newReservation = req.body;
newReservation.routeName = newReservation.name.replace(/\s+/g, '').toLowerCase();
console.log(newReservation);
    tables.push(newReservation);
    res.json(newReservation);

});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


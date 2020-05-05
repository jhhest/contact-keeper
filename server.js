const express = require("express");

const app = express();

// app.get('/', (req, res) => res.send('Hello world'))
app.get('/', (req, res) => res.json({ msg: "Welcom to the ContactKeeper API"}))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));

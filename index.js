require("dotenv").config();
const express = require("express");
const { initializeFirebaseApp, postData, getData } = require("./lib/firebase.js");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
initializeFirebaseApp();

app.get("/", async (req, res) => {
    console.log("no id");
    res.send(`<a href="https://github.com/Keeraxm/aurl">Refer to github-page for instructions</a>`)
});

app.get("/:id", async (req, res) => {
    const { id } = req.params || null;
    const redirectURL = await getData(id)
    res.redirect(redirectURL);
});

app.post("/api/upload/", async (req, res) => {
    const body = req.body;
    const docId = await postData(body);
    res.send(docId);
});

// obsolete:
// app.get("/api/retrieve/:id", async (req, res) => {
//     const { id }= req.params;
//     const data = await getData(id);
//     res.send(data);
// });

app.listen(PORT, function(err) {
    if (err) console.logs(err);
    console.log(`Listning on: ${PORT}`);
});
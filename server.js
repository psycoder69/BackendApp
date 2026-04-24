import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.json({ "message": "Hello from the backend app!" });
});

app.get("/home", (req, res) => {
    res.json({ "message": "Hello from my home route "});
});

app.get("/about", (req, res) => {
    res.send("This is an about page");
});

app.get("contact-us", (req, res) => {
    res.send("This is my contact-us page. You can contact us at anshu.singh.dev.official@gmail.com");
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
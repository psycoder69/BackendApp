import express from "express";

const PORT = 8000;

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

app.get("/contact-us", (req, res) => {
    res.send("This is my contact-us page. You can contact us at anshu.singh.dev.official@gmail.com");
});

app.get("/health", (req, res) => {
    res.send("<h3>Health check: Looks Good</h3>");
});

app.get("/check", (req, res) => {
    res.send("<h3>Checking 123</h3>");
});

app.get("/welcome", (req, res) => {
    res.send("<h3>Welcome to my server!</h3>");
});

app.get("/info", (req, res) => {
    res.json({"message": "/info route message"});
});

app.get("/poll", (req, res) => {
    res.json({"message": "polling ..."});
});

app.get("/test", (req, res) => {
    res.json({"message": "testing test route"});
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
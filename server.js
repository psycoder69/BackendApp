import express from "express";

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
    res.json({ "message": "Hello from the backend app!" });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
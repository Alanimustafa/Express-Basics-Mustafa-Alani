// -------------------------[Requires/Imports]
const express = require("express");
// -->brings it in
const app = express();
// --> init it
const PORT = 3000;
// -------------------------[Middleware]
// app.use()
// app.set()

// -------------------------[Routes]
// app.put()
app.get("/", (req, res) => {
  // ---------->twins
  res.send("Welcome to the Party");
});

app
  .route("/express")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

app
  .route("/users")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

app
  .route("/products")
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {});

app.get("/perscholas", (req, res) => {
  // ---------->twins
  res.send("RTT55");
});

// -------------------------[Server]
app.listen(PORT, () => {
  console.log("Server is Listening on PORT3000");
});
// ---------PORT-----callbackFn()
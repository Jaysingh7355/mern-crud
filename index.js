const express = require("express");
const Users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

app.get("/users", (req, res) => {
  const html = `
        <ul>
            ${Users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
  res.send(html);
});
// routes api
app.get("/api/users", (req, res) => {
  return res.json(Users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = Users.find((user) => user.id === id);
  return res.json(user);
});

app.post('/api/users', (req,res)=>{
   // TODO create New User 
   return res.json({Status: "panding" })
});

app.patch('/api/users/:id', (req,res)=>{
    // TODO create New User 
    return res.json({Status: "panding" })
 });

 app.delete('/api/users/:id', (req,res)=>{
    // TODO create New User 
    return res.json({Status: "panding" })
 });

app.listen(PORT, () => console.log("server started at the port", PORT));

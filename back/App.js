// import formData from 'form-data';
// import Mailgun from 'mailgun.js';
require('dotenv').config();
const port = process.env.PORT || 3001
const mysql = require('mysql2')
const express = require("express");
const cors = require("cors");
// const nodemailer = require("nodemailer")
const session = require("express-session");
const moment = require("moment");

const app = express();
app.use(express.json());
app.use(cors());

// app.use(
//     session({
//       secret: "m0n7ug0d",
//       resave: false,
//       saveUninitialized: false,
//     })
//   );

//   app.use((req, res, next) => {
//     if (req.session.user) {
//       req.session.lastActivity = moment();
//     }
//     next();
//   });

//   app.use((req, res, next) => {
//     if (req.session.user) {
//       // Actualizar la marca de tiempo de la última actividad en la sesión
//       req.session.lastActivity = moment();
//     }
//     next();
//   });
  
//   // Middleware para verificar la inactividad y cerrar la sesión
//   app.use((req, res, next) => {
//     if (req.session.user && req.session.lastActivity) {
//       const currentTime = moment();
//       const lastActivityTime = moment(req.session.lastActivity);
//       const inactiveDuration = moment.duration(currentTime.diff(lastActivityTime));
  
//       // Verificar si ha pasado más de 1 minuto de inactividad
//       if (inactiveDuration.asMinutes() > 1) {
//         // Cerrar la sesión y redirigir al usuario
//         req.session.destroy();
//         return res.redirect("/login");
//       }
//     }
//     next();
//   });




const con = mysql.createConnection(process.env.DATABASE_URL)

const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




// const API_KEY = 'b80462b988dcd5d65428388861b606a3-6d8d428c-339bec3b'
// ;
// const DOMAIN = 'sandboxa29cfbd1034041d7bdc89c23ab6e5f7b.mailgun.org';

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: 'api', key: API_KEY});
app.post('/upload', (req, res) => {
    const nombre = req.body.name;
   
    const file = req.files.file;
    console.log(file)
    con.query("INSERT INTO media (nombre, archivo) VALUES (?, ?)", [nombre, file],
        (err, result) => {
        if (err){
            console.log("error")
            res.send(err)
        } else {
            console.log("sirvió")
            res.send(req)
        }
    })
})
app.post('/register', (req, res) => {
    const email = req.body.email;
    const usuario = req.body.username;
    const password = req.body.password;

//     if (!validarCorreo(email)) {
//         return res.send({ message: "Correo electrónico inválido" });
//       }
    con.query("INSERT INTO usuario (email, usu, clave) VALUES (?, ?, ?)", [email, usuario, password], 
        (err, result) => {
            if(result){
                console.log(email)
                console.log(usuario)
                console.log(password)
                console.log(result)
                res.send(result);
            }else{
                console.log(email)
                console.log(usuario)
                console.log(password)
                console.log(result)
                res.send({message: "pon los datos de forma correcta!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // req.session.user = { id: 1, username: usuario };
    // req.session.lastActivity = moment();
    con.query("SELECT * FROM usuario WHERE usu = ? AND clave = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
})

// Ruta para el home
// app.get("/home", (req, res) => {
//     // Verificar si el usuario tiene una sesión válida
//     if (!req.session.user) {
//       return res.redirect("/login");
//     }
//     res.send("");
//   });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


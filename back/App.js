// import formData from 'form-data';
// import Mailgun from 'mailgun.js';

const express = require("express");
const mysql = require("mysql");
const multer = require("multer");



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

  

 const con = mysql.createConnection({
     user: "root",
     host: "localhost",
     password: "",
     database: "myclothes",
    
 })

 

const validarCorreo = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




// const API_KEY = 'b80462b988dcd5d65428388861b606a3-6d8d428c-339bec3b'
// ;
// const DOMAIN = 'sandboxa29cfbd1034041d7bdc89c23ab6e5f7b.mailgun.org';

// const mailgun = new Mailgun(formData);
// const client = mailgun.client({username: 'api', key: API_KEY});
app.post('/register', (req, res) => {
    const email = req.body.email;
    const usuario = req.body.username;
    const password = req.body.password;

     if (!validarCorreo(email)) {
         return res.send({ message: "Correo electrónico inválido" });
       }
     con.query("INSERT INTO usuario (email, usu, clave) VALUES (?, ?, ?)", [email, usuario, password], 
         (err, result) => {
             if(result){
                res.send(result);
             }else{
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
 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); // Directorio donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname); // Nombre del archivo en el servidor
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
      res.status(400).send("No se ha seleccionado ningún archivo");
    } else {
      res.send("Archivo subido correctamente");
    }
  });
  
  

// Ruta para el home
// app.get("/home", (req, res) => {
//     // Verificar si el usuario tiene una sesión válida
//     if (!req.session.user) {
//       return res.redirect("/login");
//     }
//     res.send("");
//   });
  

app.listen(3001, () => {
    console.log("running backend server");
})

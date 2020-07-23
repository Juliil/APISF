const express =  require("express");
const app = express();
const multer = require("multer");
const serveIndex = require("serve-index")

//definição da view
app.set('view engine', 'ejs');

//configuração do multer para armazenamento
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"https://apisfbml.herokuapp.com/uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage})

//endpoints de consumo
app.use("https://apisfbml.herokuapp.com/uploads", express.static(__dirname + 'https://apisfbml.herokuapp.com/uploads'));
app.use('https://apisfbml.herokuapp.com/uploads', serveIndex(__dirname + 'https://apisfbml.herokuapp.com/uploads'));

//Requisição da view
app.get("https://apisfbml.herokuapp.com/", (req, res) => {
    res.render("index");
})

//Envio de arquivos
app.post("https://apisfbml.herokuapp.com/upload", upload.single("file"), (req, res) =>{
    res.send("Arquivo Enviado com sucesso!");
})


app.listen(process.env.PORT || 8080, () => {
    console.log("servidor rodando!");
})

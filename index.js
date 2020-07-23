const express =  require("express");
const app = express();
const multer = require("multer");
const serveIndex = require("serve-index")

//definição da view
app.set('view engine', 'ejs');

//configuração do multer para armazenamento
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"apisfbml.herokuapp.comuploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage})

//endpoints de consumo
app.use("apisfbml.herokuapp.com/uploads", express.static(__dirname + 'apisfbml.herokuapp.com/uploads'));
app.use('apisfbml.herokuapp.com/uploads', serveIndex(__dirname + 'apisfbml.herokuapp.com/uploads'));

//Requisição da view
app.get("apisfbml.herokuapp.com/", (req, res) => {
    res.render("index");
})

//Envio de arquivos
app.post("apisfbml.herokuapp.com/upload", upload.single("file"), (req, res) =>{
    res.send("Arquivo Enviado com sucesso!");
})


app.listen(8080, () => {
    console.log("servidor rodando!");
})

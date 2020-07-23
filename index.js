const express =  require("express");
const app = express();
const multer = require("multer");
const serveIndex = require("serve-index")

//definição da view
app.set('view engine', 'ejs');

//configuração do multer para armazenamento
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"uploads/");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage})

//endpoints de consumo
app.use("/uploads", express.static(__dirname + '/uploads'));
app.use('/uploads', serveIndex(__dirname + '/uploads'));

//Requisição da view
app.get("/", (req, res) => {
    res.render("index");
})

//Envio de arquivos
app.post("/upload", upload.single("file"), (req, res) =>{
    res.send("Arquivo Enviado com sucesso!");
})
//Local
//app.listen(8080, () => {
//    console.log("servidor rodando!");
//})

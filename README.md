# WEBAPI com upload de arquivos e endpoints

*Documentação*

A web api foi desenvolvida em NodeJS pelo framework Express com visando atingir o objetivo de entregar o conteúdo de arquivos locais nos formatos _txt_ | _csv_ | _xlsx_ | _html_ para externos que consumissem a API.

*Sobre o Desenvolvimento*

O desenvolvimento consiste em pequenos passos:

- [X] instalação das dependências
* Instalação do express no projeto 
```npm install express --save```

* Middleware _Multer_ para o upload dos arquivos dentro do cache da aplicação
```npm install multer --save```

* Adição da biblioteca _serveIndex_ para mapeamento dos dados no endpoint _/Uploads_
```npm install serve-index --save```

- [X] Condificação do index.js
* Para uma aplicação simples e funcional, logo após importar as dependências, defini o view do projeto como EJS.

* Adição da configuração no Storage do Middleware multer definindo o callback _cb_ para guardar os arquivos enviados dentro de um endpoint publico

* Definição do GET, POST e o LISTEN (Aqui no github a aplicação está definida localmente porta 8080).

* Inclusão dos dois endpoints de consumo. ```app.use("/uploads", express.static(__dirname + '/uploads'));``` e ```app.use('/uploads', serveIndex(__dirname + '/uploads'));``` um para o recebimento e um para listagem de arquivos enviados.

- [X] Codificação do index.ejs
* Form h1 com método POST com encrypt ```multipart/form-data``` para envio de arquivos com conteúdo
* Input de seleção de arquivo
* Input de envio


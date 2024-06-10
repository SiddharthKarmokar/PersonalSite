import express from 'express';
import bodyParser from 'body-parser';
import req from "express/lib/request.js";
const app = express();
const PORT = 3000;


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//HTML request GET
//Home
app.get('/', (req, res) => {
    res.render('index.ejs');
})
//Contact me
app.get('/contactMe', (req, res) => {
    res.render('ContactMe.ejs');
})
//Skills
app.get('/skills', (req, res) => {
    res.render('Skills.ejs');
})
//Projects
app.get('/projects', (req, res) => {
    res.render('Projects.ejs');
})

//HTML request POST

//LISTEN
app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
})
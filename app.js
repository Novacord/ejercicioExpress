import dotenv from 'dotenv';
import express from 'express';


dotenv.config();


const app = express();

app.use(express.json());
app.use(express.text());


app.post('/campus/:nombre', (req, res) => {
    let obj = {
        DATA: req.body,
        'URL-GET': req.query,
        PARAMETROS: req.params  
    } 
    res.send(obj);
});


let config = JSON.parse(process.env.CONFIG);

app.listen(config,() => {
    console.log(`Server running on port http://${config.host}:${config.port}`);
});


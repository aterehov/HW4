import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import tableRouter from "./controllers/tableController"
import chairRouter from "./controllers/chairController"
import cupboardRouter from "./controllers/cupboardController"
import log from './middleware/log';

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log(req.body);

    res.json({ code: res.statusCode, message: res.statusMessage, headers: res.getHeaders() });
});

app.use("/", log);
app.use("/api/table", tableRouter);
app.use("/api/chair", chairRouter);
app.use("/api/cupboard", cupboardRouter);


app.listen(port, async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log('Server running on port ' + port);
});


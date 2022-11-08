const express = require('express');
const app = express();
const cors = require('cors');
const connecction = require('./db');
const todoRouter = require('./routes/todoRoutes')


connecction();

app.use(cors());
app.use(express.json());

app.use('/api/todo', todoRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
import express from "express";
import chalk from "chalk";

const app = express();

app.use('/', (req,res)=>{
    res.send('Hello Server')
})

app.listen(4005, ()=>{
    console.log(chalk.bgBlue(`Server is runnig on port `));
})
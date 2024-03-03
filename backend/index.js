import express from "express";
import chalk from "chalk";

const app = express();

app.listen(4005, ()=>{
    console.log(chalk.bgBlue(`Server is runnig on port `));
})
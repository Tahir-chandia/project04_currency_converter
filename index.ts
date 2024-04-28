#! /usr/bin/env node 

import inquirer from "inquirer";

const currency :any = {
            USD:1, //base currency
            INR:83,
            PKR:279,
            SAR:3.75,
            AED:3.67,
            EUR:0.93,
            GBP:0.79,      
}

let answeres = await inquirer.prompt([{
        name:"from",
        type:"list",
        message:"Enter from currency",
        choices:["USD","INR","PKR","SAR","AED","EUR","GBP"]
},
{       name:"to",
        type:"list",
        message:"Enter to currency",
        choices:["USD","INR","PKR","SAR","AED","EUR","GBP"]
},

{           name:"amount",
            type:"number",
            message:"Enter your amount",
            
}
])

let fromAmount = currency[answeres.from]
let toAmount = currency[answeres.to]
let amount = answeres.amount
let baseAmount  = amount/ fromAmount
let convertedAmount = baseAmount * toAmount
console.log(Math.floor(convertedAmount));


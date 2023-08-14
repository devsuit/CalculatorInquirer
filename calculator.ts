//Name: Syed Qalab Abbas Shah
// Roll No:	PIAIC160920
// Course:	Certified Web 3.0 and Metaverse Developer
// Email:	sqabbas1994@gmail.com


import inquirer from "inquirer";
import chalk from "chalk";
import * as addModule from "./operations/add.js";
import * as subtractModule from "./operations/subtract.js";
import * as multiplyModule from "./operations/multiply.js";
import * as divideModule from "./operations/divide.js";

interface OperationFunction {
  (calc1: number, calc2: number): number;
}

async function main() {
  const operationChoices = ["Add", "Subtract", "Multiply", "Divide"];
  const selectedOperationInput = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "Select an operation which you like to perform:",
      choices: operationChoices,
    },
  ]);

  const selectedOperation = selectedOperationInput.operation;

  const aInput = await inquirer.prompt({ type: "input", name: "fn", message: "Enter your first number:" });
  const num1 = parseFloat(aInput.fn);

  const bInput = await inquirer.prompt({ type: "input", name: "sn", message: "Enter your second number:" });
  const num2 = parseFloat(bInput.sn);

  let operationFunction: OperationFunction;
  switch (selectedOperation) {
    case "Add":
      operationFunction = addModule.add;
      break;
    case "Subtract":
      operationFunction = subtractModule.subtract;
      break;
    case "Multiply":
      operationFunction = multiplyModule.multiply;
      break;
    case "Divide":
      operationFunction = divideModule.divide;
      break;
    default:
      throw new Error("Invalid operation selected.");
  }

  try {
    const result = operationFunction(num1, num2);
    console.log("--------------------------------------------")
    console.log(chalk.yellow(`Result: ${result}`));
    console.log("--------------------------------------------")
  } catch (error) {
   console.error(chalk.red((error as any).message));
  }
}

main();

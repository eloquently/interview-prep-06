import { Stack } from './stacks.js';
import readline from 'readline';

// read input from the console using Node's readline library

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('welcome to the simple word processor');
console.log('type add TEXT HERE to add text');
console.log('type undo to undo the last command');
console.log('type ctrl+c to exit');

rl.setPrompt(' > ');
rl.prompt();

let doc = "";
<<<<<<< Updated upstream
const history = new Stack();
=======
let history = new Stack();
>>>>>>> Stashed changes
let future = new Stack();

rl.on('line', (line) => {
    // split input by words
    const input = line.split(/\s+/);
    
    // check first word of input for command
    const command = input[0];
    
    // store the rest of the line for later processing
    const restOfLine = input.slice(1).join(' ');
    
    switch(command) {
        case 'add':
            history.push(doc);
            doc += restOfLine + '\n';
            future = new Stack();
            break;
        case 'undo':
            // undoing
            if(history.peek() !== undefined) {
                future.push(doc);
                doc = history.pop();
            } else {
                console.log('nothing to undo');
            }
            break;
        case 'redo':
<<<<<<< Updated upstream
            // redoing...
=======
            if(future.peek() !== undefined) {
                history.push(doc);
                doc = future.pop();
            } else {
                console.log('nothing to redo');
            }
>>>>>>> Stashed changes
            break;
    }
    
    // print out document
    console.log("your document:");
    console.log(doc);
    
    rl.prompt();
}).on('close', () => {
    // ctrl+c received -- exit the program
    console.log('Goodbye!');
    process.exit(0);
});
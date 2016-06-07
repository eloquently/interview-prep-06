import { Stack } from './stacks.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.setPrompt(' > ');

console.log('welcome to the simple word processor');
console.log('type add TEXT HERE to add text');
console.log('type undo to undo the last command');
console.log('type ctrl+c to exit');


rl.prompt();

let doc = "";

const history = new Stack();
rl.on('line', (line) => {
    const input = line.split(/\s+/);
    const command = input[0];
    const restOfLine = input.slice(1).join(' ');
    switch(command) {
        case 'add':
            doc += restOfLine + '\n';
            break;
        case 'undo':
            // undoing...
            break;
    }
    
    console.log("your document:");
    console.log(doc);
    
    rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
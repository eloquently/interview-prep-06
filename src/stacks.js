export class Stack {
    constructor() {
        this.arr = [];
    }
    
    push(newValue) {
        this.arr.push(newValue);
    }
    
    pop() {
        return this.arr.pop();
    }
    
    peek() {
        return this.arr[this.arr.length-1];
    }
}

export const reverseString = (str) => {
    const stack = new Stack();
    
    for(let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    
    
    let newStr = '';
    
    while(stack.peek() !== undefined) {
        newStr = newStr + stack.pop();
    }
    
    return newStr;
};

export const minValueInStack = (stack) => {
    let min = Number.MAX_VALUE;
    
    const backUpStack = new Stack();
    
    while(stack.peek() !== undefined) {
        const top = stack.pop();
        if(top < min) min = top;
        backUpStack.push(top);
    }
    
    while(backUpStack.peek() !== undefined) {
        stack.push(backUpStack.pop());
    }
    
    return min;
};
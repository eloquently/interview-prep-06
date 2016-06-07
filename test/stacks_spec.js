import { expect } from 'chai';

import * as stacks from '../src/stacks';

describe('stacks', () => {
    if(stacks.Stack) {
        describe('Stack', () => {
            it('pop and push work', () => {
                const stack = new stacks.Stack();
                stack.push(2);
                stack.push(1);
                expect(stack.pop()).to.eq(1);
                expect(stack.pop()).to.eq(2);
            });
            
            it('peek works', () => {
                const stack = new stacks.Stack();
                stack.push(2);
                stack.push(1);
                expect(stack.peek()).to.eq(1);
                expect(stack.peek()).to.eq(1);
            });
        });
    }
    if(stacks.reverseString) {
        describe('reverseString()', () => {
            it('reverses a short string', () => {
                expect(stacks.reverseString('asdf')).to
                    .eq('fdsa');
            });
            
            
            it('reverses a longer string', () => {
                expect(stacks.reverseString('A man, a plan, a canal, Panama!')).to
                    .eq('!amanaP ,lanac a ,nalp a ,nam A');
            });
        });
    }
    
    if(stacks.minValueInStack) {
        describe('minValueInStack()', () => {
            
            let stack1, stack2, stack3;
            
            beforeEach( () => {
                stack1 = new stacks.Stack();
                stack1.push(3); 
                stack1.push(4); 
                stack1.push(0); 
                stack1.push(10);
                stack1.push(15);
                
                stack2 = new stacks.Stack();
                stack2.push(1);
                stack2.push(2);
                stack2.push(3);
                stack2.push(4);
                stack2.push(10);
                
                stack3 = new stacks.Stack();
                stack3.push(3);
                stack3.push(2);
                stack3.push(4);
                stack3.push(8);
                stack3.push(1);
            });
            
            it('does not change stack', () => {
                stacks.minValueInStack(stack1);
                const stackContents = [];
                while(stack1.peek() !== undefined) {
                    stackContents.push(stack1.pop());
                }
                expect(stackContents).to.eql([15,10,0,4,3]);
            });
            
            it('returns min from middle', () => {
                expect(stacks.minValueInStack(stack1)).to.eq(0);
            });
            
            it('returns min from beginning', () => {
                expect(stacks.minValueInStack(stack2)).to.eq(1);
            });
            
            it('returns min from end', () => {
                expect(stacks.minValueInStack(stack3));
            });
        });
    }
})
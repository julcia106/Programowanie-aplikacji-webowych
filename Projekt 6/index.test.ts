import { Fibonacci } from ".";

describe('Fibonacci', ()=> {
    it('calculate 0', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(0);
        expect(ret).toBe(0);
    })

    it('calculate 1', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(1);
        expect(ret).toBe(1);
    })

    it('calculate 6', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(6);
        expect(ret).toBe(8);
    })
})
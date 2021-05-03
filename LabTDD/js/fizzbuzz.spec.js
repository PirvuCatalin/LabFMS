const fizzbuz = require('./fizzbuzz')

describe('Test suite pentru algoritmul fizzbuz', ()=> {

    it('Test pentru val 1', ()=> {
        expect(fizzbuz(1)).toEqual('1')
    })

    // it('Test pentru val 2', ()=> {
    //     expect(fizzbuz(2)).toEqual('12')
    // })

    // it('Test pentru val 3', ()=> {
    //     expect(fizzbuz(3)).toEqual('12Fizz')
    // })

    // it('Test pentru val 4', ()=> {
    //     expect(fizzbuz(4)).toEqual('12Fizz4')
    // })

    // it('Test pentru val 5', ()=> {
    //     expect(fizzbuz(5)).toEqual('12Fizz4Buzz')
    // })
    // it('Test pentru val 6', ()=> {
    //     expect(fizzbuz(6)).toEqual('12Fizz4BuzzFizz')
    // })
    // it('Test pentru val 9', ()=> {
    //     expect(fizzbuz(9)).toEqual('12Fizz4BuzzFizz78Fizz')
    // })
    // it('Test pentru val 10', ()=> {
    //     expect(fizzbuz(10)).toEqual('12Fizz4BuzzFizz78FizzBuzz')
    // })
    // it('Test pentru val 15', ()=> {
    //     expect(fizzbuz(15)).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz')
    // })
    // it('Test pentru val 16', ()=> {
    //     expect(fizzbuz(16)).toEqual('12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz16')
    // })
})

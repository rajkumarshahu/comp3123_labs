var should = require('should');
var calc = require('./calculator');

calc.addTwoNumbers("a", "b");

describe('Calculator', function(){
    describe('when used synchronously', function(){

        it('should add two numbers correctly', function(){
            calc.addTwoNumbers(2,2).should.equal(4);
        })
    })
})
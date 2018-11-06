var comparer = require('./comparer');
var calculator = require('./calculator');


function CompareAndGetResult(num1, num2){
    comparer.num1 = num1;
    comparer.num2 = num2;
    calculator.num1 = num1;
    calculator.num2 = num2;

    if(comparer.AreNumberEqual(num1, num2))
    {
        console.log(calculator.Add());
    }
    else
    {
        console.log(calculator.Subtract());
    }
}
console.log();
CompareAndGetResult(9, 9);
console.log();
CompareAndGetResult(99, 11);

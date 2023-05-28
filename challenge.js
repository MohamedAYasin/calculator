// Good Luck! You got this 💪🏾


const calculator = (num1, num2, operator) => {
    let result;

    switch(operator){
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid Operator');
        return null;
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
    return result;
  };

  // Test cases
  calculator(5, 2, '%')

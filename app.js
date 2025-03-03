$(document).ready(() => {

    const inputValue = $('#valueField');
    const calculator = new Calculator();
    const inputHandler = new InputHandler(inputValue, calculator);

    inputHandler.listen();

});

class InputHandler {
    constructor(inputValue, calculator) {
        this.inputValue = inputValue,
        this.calculator = calculator,
        this.regexNumbers = /[0-9]/,
        this.regexOperators = /[-*+\/\(\)]/,
        this.keysToEvoke = ['Backspace', 'Enter', 'Delete']
    }

    listen() {
        this.inputValue.keydown((e) => this.handleCalculator(e));
    }

    handleCalculator(e) {
        if (this.validateInput(e) ) {
            if(e.key == 'Enter')
                this.execCalc(this.inputValue.val());
        }
        else {
            e.preventDefault();
            return;
        }
    }

    validateInput(e) {
        return (this.regexNumbers.test(e.key) || this.regexOperators.test(e.key) || this.keysToEvoke.includes(e.key));
    }

    execCalc(expression) {
        this.inputValue.val(this.calculator.calculate(expression));
    }
}

class Calculator {
    calculate(expression) {
        try {
            return eval(expression);
        }
        catch (err) {
            alert('Expressão inválida')
        }
    }
}
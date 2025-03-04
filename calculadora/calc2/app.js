$(document).ready(() => {
    const btn = $('.btn');
    const inputValue = $('#valueField');
    const calculator = new Calculator();

    const btnHandler = new BtnHandler(inputValue,btn, calculator);
    const inputHandler = new InputHandler(inputValue, calculator);
    
    btnHandler.listen(calculator);
    inputHandler.listen(calculator);

});

function InputHandler(inputValue) {

    const regexNumbers = /[0-9]/;
    const regexOperators = /[-*+\/\(\)]/;
    const keysToEvoke = ['Backspace', 'Enter', 'Delete'];

    this.listen = () =>{
        inputValue.keydown((e) => this.handleCalculator(e));
    };

    this.handleCalculator = (e) => {
        if (this.validateInput(e)) {
            if (e.key == 'Enter')
                this.execCalc(inputValue.val());
        }
        else {
            e.preventDefault();
            return;
        }
    };

    this.validateInput = (e) =>{
        return (regexNumbers.test(e.key) || regexOperators.test(e.key) || keysToEvoke.includes(e.key));
    };

    this.execCalc = (calculator)=>{
        const expression = inputValue.val();
        const result = calculator.calculate(expression);
        inputValue.val(result);
        return;
    }

    this.clear = ()=>{
        inputValue.val('');
    }

    this.remove = ()=>{
        let value = inputValue.val();
        value = value.slice(0, value.length - 1);
        inputValue.val(value);
    }

     this.insert = (clickValue)=>{
        const toInsertValue = inputValue.val() + clickValue;
                inputValue.val(toInsertValue);
                inputValue.focus();
    }
}

function BtnHandler(btn, inputHandler){

    this.listen = (calculator)=>{

        btn.click((e)=>{
            const clickValue = $(e.target).text();

            if(clickValue === '='){
               this.execCalc(calculator);
            }
            else if(clickValue === 'C'){
                inputHandler.clear();
            }
            else if(clickValue.trim() === '<<')
            {
                inputHandler.remove();
            }
            else{
                inputHandler.insert(clickValue);
            }

        });
    }

    this.execCalc = (calculator)=>{
        calculator.calculate(inputValue.val());
    }
}

function Calculator() {
    this.calculate = (expression) => {
        try {
            return eval(expression);
        }
        catch (err) {
            alert('Expressão inválida')
        }
    }
}
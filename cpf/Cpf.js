class CpfService {
    constructor(cpfWithChars) {
        this.cpfWithChars = cpfWithChars;
        this.cpf = this.clearCpf(cpfWithChars);
        this.isValid = false;
        this.cpfArray = Array.from(this.cpf).map(Number);
        this.cpfToValidate = this.cpfArray.slice(0, 9);
    }

    clearCpf(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    verifyCpf() {

        if(this.isSequence())
            return false;

        const firstNumber = this.getFirstNumber();
        this.cpfToValidate.push(firstNumber);
        const secondNumber = this.getSecondNumber();
        this.cpfToValidate.push(secondNumber);
        
        return this.isCpfValid();
       
    }

    isSequence(){
        const sequence =  this.cpf[0].repeat(this.cpf.length);
        return this.cpf === sequence
    }

    getFirstNumber() {
        return this.processChars(10);
    }

    getSecondNumber() {
        return this.processChars(11)
    }

    processChars(iteratorQuantity) {
        let charsTotalValue = this.cpfToValidate.reduce((totalValue = 0, char) => {

            totalValue += char * iteratorQuantity;
            --iteratorQuantity;

            return totalValue;

        }, 0);
        const result = this.getDigitByTotalSum(charsTotalValue);
        return result > 9 ? 0 : result;
    }

    getDigitByTotalSum(totalValue) {
        return 11 - (totalValue % 11);
    }

    isCpfValid(){
        if(this.cpfToValidate.join("") == this.cpf)
            this.isValid = true;
        else
            this.isValid = false;
        
        return this.isValid;
    }
}

const cpfService = new CpfService('630.729.413-27');
// const cpfService = new CpfService('111.111.111-11');
console.log(cpfService.verifyCpf());
class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.shouldResetDisplay) {
            this.currentOperand = '';
            this.shouldResetDisplay = false;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }
        
        // Handle very large numbers
        if (computation.toString().length > 12) {
            computation = parseFloat(computation.toExponential(6));
        }
        
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
        this.shouldResetDisplay = true;
    }

    showError(message) {
        this.currentOperand = message;
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetDisplay = true;
        this.currentOperandElement.classList.add('error');
        
        // Remove error class after 2 seconds
        setTimeout(() => {
            this.currentOperandElement.classList.remove('error');
            this.clear();
            this.updateDisplay();
        }, 2000);
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        if (typeof this.currentOperand === 'string' && this.currentOperand.includes('Cannot')) {
            this.currentOperandElement.innerText = this.currentOperand;
        } else {
            this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand) || '0';
        }
        
        if (this.operation != null) {
            this.previousOperandElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.innerText = '';
        }
    }
}

// Initialize calculator
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Add event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Number buttons
    document.querySelectorAll('[data-number]').forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.dataset.number);
            calculator.updateDisplay();
        });
    });

    // Operator buttons
    document.querySelectorAll('[data-operator]').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all operators
            document.querySelectorAll('[data-operator]').forEach(btn => 
                btn.classList.remove('active'));
            
            // Add active class to clicked operator
            button.classList.add('active');
            
            calculator.chooseOperation(button.dataset.operator);
            calculator.updateDisplay();
        });
    });

    // Equals button
    document.getElementById('equals').addEventListener('click', () => {
        // Remove active class from all operators
        document.querySelectorAll('[data-operator]').forEach(btn => 
            btn.classList.remove('active'));
        
        calculator.compute();
        calculator.updateDisplay();
    });

    // Clear button
    document.getElementById('clear').addEventListener('click', () => {
        document.querySelectorAll('[data-operator]').forEach(btn => 
            btn.classList.remove('active'));
        
        calculator.clear();
        calculator.updateDisplay();
    });

    // Delete button
    document.getElementById('delete').addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
    });

    // Decimal button
    document.querySelector('[data-decimal]').addEventListener('click', () => {
        calculator.appendNumber('.');
        calculator.updateDisplay();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            calculator.appendNumber(e.key);
            calculator.updateDisplay();
        }
        
        if (e.key === '.') {
            calculator.appendNumber('.');
            calculator.updateDisplay();
        }
        
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            calculator.chooseOperation(e.key);
            calculator.updateDisplay();
        }
        
        if (e.key === 'Enter' || e.key === '=') {
            calculator.compute();
            calculator.updateDisplay();
        }
        
        if (e.key === 'Escape') {
            calculator.clear();
            calculator.updateDisplay();
        }
        
        if (e.key === 'Backspace') {
            calculator.delete();
            calculator.updateDisplay();
        }
    });
});
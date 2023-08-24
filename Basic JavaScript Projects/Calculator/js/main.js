const calculator = {
    display_value: '0', 
    first_operand: null,
    wait_second_operand: false,
    operator: null,
};

function Input_Digit(digit) {
    const {display_value, wait_second_operand } = calculator;
    if (wait_second_operand === true) {
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    } else {
        calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}

function Input_Decimal(dot) {
    if (calculator.wait_second_operand === true) return;
    if (!calculator.display_value.includes(dot)) {
        calculator.display_value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const {first_operand, display_value, operator} = calculator;
    const value_of_input = parseFloat(display_value);
    if (operator && calculator.wait_second_operand) {
        calculator.operator = Next_Operator;
        return;
    }
    if (first_operand == null) {
        calculator.first_operand = value_of_input;
    } else if (operator) {
        const value_now = first_operand || 0;
        let result = Perform_Calculation[operator](value_now, value_of_input);
        result = Number(result).toFixed (9);
        result = (result *1).toString();
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (first_operand, second_operand) => first_operand / second_operand,
    '*': (first_operand, second_operand) => first_operand * second_operand,
    '+': (first_operand, second_operand) => first_operand + second_operand,
    '-': (first_operand, second_operand) => first_operand - second_operand,
    '=': (first_operand, second_operand) => second_operand,
};

function calculator_reset() {
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}

function update_display() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display_value;
}

update_display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        update_display();
        return
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        update_display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        calculator_reset();
        update_display();
        return;
    }
    Input_Digit(target.value);
    update_display();
})
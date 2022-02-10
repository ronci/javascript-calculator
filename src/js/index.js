class Calculator {
  constructor() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operation = "";
    this.phase = true;

    this.digitsElement = document.querySelector(".digits");
    this.operationElement = document.querySelector(".operations");
    this.totalElement = document.querySelector("#total");
    this.ACElement = document.querySelector(".modifier");
    this.digitsClick();
    this.operationClick();
    this.ACClick();
  }

  add(num1, num2) {
    if (!num1 || !num2) {
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return;
    }
    this.totalElement.textContent = num1 + num2;
  }

  submit(num1, num2) {
    if (!num1 || !num2) {
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return;
    }
    this.totalElement.textContent = num1 - num2;
  }

  multiply(num1, num2) {
    if (!num1 || !num2) {
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return;
    }
    this.totalElement.textContent = num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      alert("숫자는 0으로 나눌 수 없습니다.");
      return;
    }
    if (!num1 || !num2) {
      return;
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return;
    }
    this.totalElement.textContent = parseInt(num1 / num2);
  }

  digitsClick() {
    this.digitsElement.addEventListener("click", ({ target }) => {
      if (this.phase && this.firstNumber.toString().length < 3) {
        this.firstNumber = this.firstNumber * 10 + parseInt(target.textContent);
        this.totalElement.textContent = this.firstNumber;
      } else if (!this.phase && this.secondNumber.toString().length < 3) {
        this.secondNumber = this.secondNumber * 10 + parseInt(target.textContent);
        this.totalElement.textContent = this.secondNumber;
      }
    });
  }

  operationClick() {
    this.operationElement.addEventListener("click", ({ target }) => {
      if (target.textContent === "=") {
        this.showAnswer();
      } else if (
        target.textContent === "+" ||
        target.textContent === "-" ||
        target.textContent === "X" ||
        target.textContent === "/"
      ) {
        this.phase = false;
        this.operation = target.textContent;
        this.totalElement.textContent = target.textContent;
      }
    });
  }

  showAnswer() {
    if (this.operation === "+") {
      this.add(this.firstNumber, this.secondNumber);
    } else if (this.operation === "-") {
      this.submit(this.firstNumber, this.secondNumber);
    } else if (this.operation === "X") {
      this.multiply(this.firstNumber, this.secondNumber);
    } else if (this.operation === "/") {
      this.divide(this.firstNumber, this.secondNumber);
    }
  }
  
  ACClick() {
    this.ACElement.addEventListener("click", () => {
      this.calculatorInit();
    });
  }

  calculatorInit() {
    this.totalElement.textContent = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.phase = true;
    this.operation = "";
  }
}

const calculator = new Calculator();

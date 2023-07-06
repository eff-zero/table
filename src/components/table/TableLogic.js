export class TableLogic {
  actualBalance;
  interestRate;
  capitalPayment;

  percentage;
  interestPlusCapital;
  interestValue;

  data = [];

  constructor({ base, interestRate, capitalPayment }) {
    this.actualBalance = Number(base);
    this.interestRate = Number(interestRate);
    this.capitalPayment = Number(capitalPayment);
    this.percentage = this.interestRate / 100;
  }

  calculateNewInterestValue() {
    this.interestValue = this.actualBalance * this.percentage;
  }

  calculateNewInterestPlusCapital() {
    this.interestPlusCapital = this.capitalPayment + this.interestValue;
  }

  calculateNewActualBalance() {
    this.actualBalance -= this.capitalPayment;
  }

  pushData() {
    this.data.push({
      actualBalance: this.actualBalance,
      interest: this.interestValue,
      capitalPayment: this.capitalPayment,
      interestPlusCapital: this.interestPlusCapital,
    });
  }

  updateData() {
    this.calculateNewActualBalance();
    this.calculateNewInterestValue();
    this.calculateNewInterestPlusCapital();
  }

  checkLastRow() {
    const lastRow = this.data.at(-1);
    const { actualBalance, interest } = lastRow;
    if (actualBalance > this.capitalPayment) return;

    lastRow.capitalPayment = 0;
    lastRow.interestPlusCapital = actualBalance + interest;

    this.data.splice(-1, 1, lastRow);
  }

  generateTable() {
    this.calculateNewInterestValue();
    this.calculateNewInterestPlusCapital();
    this.pushData();

    while (this.actualBalance > this.capitalPayment) {
      this.updateData();
      this.pushData();
    }

    this.checkLastRow();
    return this.data;
  }
}

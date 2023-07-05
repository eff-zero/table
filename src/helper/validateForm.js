export function validateForm({ base, capitalPayment, interestRate }) {
  const errors = {};
  let minimalTax = 0;

  if (base && interestRate) {
    minimalTax = calculateMinimalInterestRate(base, interestRate);
  }

  if (!base) {
    errors.base = 'Campo requerido';
  }

  if (!interestRate) {
    errors.interestRate = 'Campo requerido';
  }

  if (!capitalPayment) {
    errors.capitalPayment = 'Campo requerido';
  } else if (capitalPayment < minimalTax) {
    errors.capitalPayment = `El valor del pago debe ser mayor a ${minimalTax}`;
  }

  errors.isInvalid = !!Object.keys(errors).length;
  return errors;
}

function calculateMinimalInterestRate(base, interestRate) {
  const percentage = interestRate / 100;
  return percentage * base;
}

export const Sum = (a, b) => a + b;
export const Sub = (a, b) => a - b;
export const Mul = (a, b) => a * b;
export const Div = (a, b) => a / b;

export const Total = (subTotal, tax) => {
  return `$ ${Sum(subTotal, tax)}`;
};

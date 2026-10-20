export function fibs(fibsLength) {
  const baseArr = [0, 1];

  if (fibsLength === 1) return [0];

  while (baseArr.length !== fibsLength) {
    const last = baseArr.at(baseArr.length - 1);
    const beforeLast = baseArr.at(baseArr.length - 2);

    baseArr.push(last + beforeLast);
  }

  return baseArr;
}

function fibsNumAt(n) {
  if (n <= 2) return n - 1;
  return fibsNumAt(n - 1) + fibsNumAt(n - 2);
}

export function fibsRec(fibsLength) {
  if (fibsLength === 1) return [0];

  let arr = [];
  arr.push(fibsNumAt(fibsLength));
  return arr.concat(fibsRec(fibsLength - 1)).sort((a, b) => a - b);
}

export function fibs(fibsLength) {
  if (fibsLength === 1) return [0];
  if (fibsLength === 2) return [0, 1];

  const baseArr = [0, 1];

  while (baseArr.length !== fibsLength) {
    baseArr.push(baseArr.at(-1) + baseArr.at(-2));
  }
  
  return baseArr;
}

export function fibsRec(fibsLength) {
  if (fibsLength === 1) return [0];
  if (fibsLength === 2) return [0, 1];

  const prev = fibsRec(fibsLength - 1);
  prev.push(prev.at(-1) + prev.at(-2));
  return prev;
}

const _flip = (arr, index) => {
  const arrayCopy = [...arr];
  const flipped = arrayCopy.slice(0, index + 1);
  flipped.reverse();
  arrayCopy.splice(0, index + 1, ...flipped);

  return arrayCopy;
};

const _equalArrays = (arr1, arr2) => {
  return (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index])
  );
};

const _containsSpecificArray = (arrs, searchFor) => {
  for (const arr of arrs) {
    if (_equalArrays(arr, searchFor)) {
      return true;
    }
  }
  return false;
};

const _findMinFlips = (stackOrder) => {
  const numPancakes = stackOrder.length;

  const solved = Array.from(
    { length: numPancakes },
    (value, index) => 1 + index
  );

  if (_equalArrays(stackOrder, solved)) {
    return 0;
  }

  const tieredStackList = [[[...stackOrder]]];
  let numFlips = 0;
  const maxFlips = 2 * numPancakes + 5;
  while (numFlips <= maxFlips) {
    const lastTier = tieredStackList[numFlips];
    numFlips++;
    const newTier = [];
    const flattened = tieredStackList.flat(1);
    for (const order of lastTier) {
      for (let i = 1; i < numPancakes; i++) {
        const flipped = _flip(order, i);
        if (_equalArrays(flipped, solved)) {
          return numFlips;
        }
        const alreadyFound = _containsSpecificArray(flattened, flipped);
        if (!alreadyFound) {
          newTier.push([...flipped]);
        }
      }
    }
    tieredStackList.push(newTier);
  }
  throw new Error("Minimum flips not found");
};

export default _findMinFlips;

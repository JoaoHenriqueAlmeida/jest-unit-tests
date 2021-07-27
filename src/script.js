const average = (myArray) => {
  let accumulator = 0;
  if (myArray.length === 0) {
    return undefined;
  }
  for (let i = 0; i < myArray.length; i += 1) {
    if (typeof myArray[i] !== 'number') {
      return undefined;
    } 
  accumulator += myArray[i];
  } 
  return Math.round(accumulator / myArray.length);
};

console.log(average([3, 4, 5]));
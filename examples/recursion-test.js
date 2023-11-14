const createDeeplyNestedObject = (depth, currentDepth = 0) => {
  if (currentDepth === depth) {
    return 'Reached maximum depth';
  }

  return {
    nestedObject: createDeeplyNestedObject(depth, currentDepth + 1),
  };
};

const iterativeReplacer = (value) => {
  let queue = [value];

  while (queue.length) {
    const current = queue.shift();

    if (Array.isArray(current)) {
      queue = [...queue, ...current];
    } else if (current !== null && typeof current === 'object') {
      for (const property in current) {
        queue.push(current[property]);
      }
    }
  }
};

const recursiveReplacer = (value) => {
  if (Array.isArray(value)) {
    for (const item of value) {
      recursiveReplacer(item);
    }
  } else if (value !== null && typeof value === 'object') {
    for (const property in value) {
      recursiveReplacer(value[property]);
    }
  }
};

(() => {
  /**
   *  I manually tweaked the depth of this object to avoid a Stack-Size limit
   *  in the recursive function that creates the object.
   *
   *  Adjust the depth number for different results.
   */
  const deeplyNestedObject = createDeeplyNestedObject(6000);

  const startRecursive = performance.now();

  try {
    recursiveReplacer(deeplyNestedObject);

    console.log('\x1b[32m%s\x1b[0m', 'Recursive function succeed');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Recursive function failed');
  } finally {
    const endRecursive = performance.now();
    const timeSpent = endRecursive - startRecursive;

    console.log(`Time spent processing: ${timeSpent} milliseconds`);
  }

  console.log('-------------');

  const startIterative = performance.now();

  try {
    iterativeReplacer(deeplyNestedObject);

    console.log('\x1b[32m%s\x1b[0m', 'Iterative function succeed');
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Iterative function failed');
  } finally {
    const endIterative = performance.now();
    const timeSpent = endIterative - startIterative;

    console.log(`Time spent processing: ${timeSpent} milliseconds`);
  }
})();

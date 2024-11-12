export default function iterateThroughObject(reportWithIterator) {
  const result = [];

  const iter = reportWithIterator[Symbol.iterator]();
  let valueObject = iter.next();
  while (!valueObject.done) {
    result.push(valueObject.value);
    valueObject = iter.next();
  }
  return result.join(' | ');
}

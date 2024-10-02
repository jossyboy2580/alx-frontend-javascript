export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  trueOrFalse = false;
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // No need to redefine using 'let' inside the block
    const task2 = false; // No need to redefine using 'let' inside the block
    if (task && task2) {
      return [task, task2];
    }
  }

  return [task, task2];
}

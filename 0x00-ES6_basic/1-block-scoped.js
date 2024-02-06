export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // No need to redefine using 'let' inside the block
    task2 = false; // No need to redefine using 'let' inside the block
  }

  return [task, task2];
}

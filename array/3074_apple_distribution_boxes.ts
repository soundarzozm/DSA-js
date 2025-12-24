function minimumBoxes(apple: number[], capacity: number[]): number {
  capacity.sort((a, b) => b - a);
  let totalApples = 0;

  for (let ap of apple) totalApples += ap;

  let count = 0;
  for (let box of capacity) {
    count++;
    totalApples -= box;

    if (totalApples <= 0) break;
  }

  return count;
}

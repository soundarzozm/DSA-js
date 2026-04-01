// 2751. Robot Collisions

function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string,
): number[] {
  const robots = positions.map((p, i) => ({
    position: p,
    health: healths[i],
    direction: directions[i],
    id: i,
  }));

  robots.sort((a, b) => a.position - b.position);

  const stack: typeof robots = [];

  for (let robot of robots) {
    if (robot.direction === "R") {
      stack.push(robot);
      continue;
    }

    let destroyed = false;
    while (stack.length > 0 && stack[stack.length - 1].direction === "R") {
      const top = stack[stack.length - 1];

      if (top.health === robot.health) {
        stack.pop();
        destroyed = true;
        break;
      } else if (top.health > robot.health) {
        top.health -= 1;
        destroyed = true;
        break;
      } else {
        stack.pop();
        robot.health -= 1;
      }
    }

    if (!destroyed) {
      stack.push(robot);
    }
  }

  return stack.sort((a, b) => a.id - b.id).map((r) => r.health);
}

const positions = [3, 5, 2, 6],
  healths = [10, 10, 15, 12],
  directions = "RLRL";
console.log(survivedRobotsHealths(positions, healths, directions));

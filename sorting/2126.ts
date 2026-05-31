// 2126. Destorying Asteroids

function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids = asteroids.sort((a: number, b: number) => a - b);
  let currentMass = mass;

  for (let asteroid of asteroids) {
    if (currentMass < asteroid) return false;
    currentMass += asteroid;
  }

  return true;
}

const mass = 10,
  asteroids = [3, 9, 19, 5, 21];
console.log(asteroidsDestroyed(mass, asteroids));

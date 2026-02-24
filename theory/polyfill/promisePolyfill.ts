Promise.myAll = function (promises: Promise<string>[]) {
  return new Promise((resolve, reject) => {
    const n = promises.length;
    const results = new Array(n);
    let completed = 0;

    if (n === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;
          completed++;

          if (completed === n) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAllSettled = function (promises: Promise<string>[]) {
  return new Promise((resolve, reject) => {
    const n = promises.length;
    const results = new Array(n);
    let completed = 0;

    if (n === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          results[index] = {
            status: "rejected",
            reason: err,
          };
        })
        .finally(() => {
          completed++;
          if (completed === n) {
            resolve(results);
          }
        });
    });
  });
};

Promise.myRace = function (promises: Promise<string>[]) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

let promises = [];
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve, reject) => {
    let success = true;
    if (i % 2 !== 0) success = false;

    if (success) {
      // If operation is successful, call resolve with data
      resolve("Operation successful!");
    } else {
      // If operation fails, call reject with an error
      reject(new Error("Something went wrong."));
    }
  });
  promises.push(promise);
}

const finalPromise = Promise.myAllSettled(promises);
finalPromise.then((res) => console.log(res));

function count() {
  let n = 1;

  function reset() {
    n = 0;
  }
}

count(); // 1
count(); // 2
count(); // 3

count.reset();

count(); // 1
count(); // 2
count(); // 3

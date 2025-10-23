function hasSameDigits(s: string): boolean {
  let stringBufferArray = s.split("");
  let numberBufferArray = stringBufferArray.map((digit: string) =>
    Number(digit),
  );

  while (numberBufferArray.length > 2) {
    for (let i = 0; i < numberBufferArray.length - 1; ++i) {
      numberBufferArray[i] =
        (numberBufferArray[i] + numberBufferArray[i + 1]) % 10;
    }
    numberBufferArray.pop();
  }

  return numberBufferArray[0] === numberBufferArray[1];
}

let s = "3902";
console.log(hasSameDigits(s));

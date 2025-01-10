function myPow(x: number, n: number): number {
  let halfPower: number
  if (n==0) return 1
  if (x==0) return 0

  if (n < 0) return (1 / myPow(x, -n))

  if (n % 2 == 0){
      halfPower = myPow(x, n/2)
      return halfPower * halfPower
  }
  else {
      halfPower = myPow(x, (n-1)/2)
      return x * halfPower * halfPower
  }
};
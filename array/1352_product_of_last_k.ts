class ProductOfNumbers {
  private prefixProducts: number[];
  private zeroIndex: number;
  constructor() {
    this.prefixProducts = [];
    this.zeroIndex = -1;
  }

  add(num: number): void {
    if (num === 0) this.zeroIndex = this.prefixProducts.length;
    let lastProduct: number;
    if (this.prefixProducts.length === 0) lastProduct = 1;
    else lastProduct = this.prefixProducts[this.prefixProducts.length - 1] || 1;
    this.prefixProducts.push(lastProduct * num);
  }

  getProduct(k: number): number {
    if (this.prefixProducts.length - k - 1 < this.zeroIndex) return 0;
    return Math.floor(this.prefixProducts[this.prefixProducts.length - 1] / (this.prefixProducts[this.prefixProducts.length - k - 1] || 1));
  }
}

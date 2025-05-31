class TimeMap {
  map: Map<string, Array<[number, string]>>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    let currentTimestamps: Array<[number, string]> = this.map.get(key) || [];
    currentTimestamps.push([timestamp, value]);
    this.map.set(key, currentTimestamps);
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) return "";
    let array = this.map.get(key) || [];
    let idx = this.floorBinarySearch(array, timestamp);
    if (idx === -1) return "";
    return array[idx][1];
  }

  floorBinarySearch(
    timestamps: Array<[number, string]>,
    target: number,
  ): number {
    let ans: number = -1;
    let left: number = 0;
    let right: number = timestamps.length - 1;
    let mid: number;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (timestamps[mid][0] <= target) {
        ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return ans;
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

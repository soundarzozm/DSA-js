function search(nums: number[], target: number): boolean {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        
        // Check if the middle element is the target
        if (nums[mid] === target) {
            return true;
        }
        
        // Handle duplicates: reduce the search space if duplicates are found
        else if (nums[mid] === nums[low] && nums[mid] === nums[high]) {
            high = high - 1;
            low = low + 1;
        }
        
        // Left side is sorted
        else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;  // Target is in the left half
            } else {
                low = mid + 1;   // Target is in the right half
            }
        }
        
        // Right side is sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;   // Target is in the right half
            } else {
                high = mid - 1;  // Target is in the left half
            }
        }
    }

    return false;  // If we etargetit the loop, the element was not found
};

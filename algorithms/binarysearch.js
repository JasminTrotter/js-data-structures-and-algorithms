function search(numbers, target) {
  function binarySearch(nums, l, r, t) {
    // exit if target not found
    if (l === r && nums[l] !== t) return -1;
    const mid = Math.floor((l + r) / 2);
    // check the middle, return if equals target
    if (nums[mid] === t) return mid;

    // else if middle is greater than target, search left half
    if (nums[mid] > t) {
      return binarySearch(nums, l, mid, t);
    }
    // else search right half
    return binarySearch(nums, mid + 1, r, t);
  };

  return binarySearch(numbers, 0, numbers.length - 1, target);
}

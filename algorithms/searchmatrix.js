var searchMatrix = function (matrix, target) {
  const mid = Math.floor((matrix.length - 1) / 2);

  const rowSearchResult = rowSearch(matrix, target);
  if (rowSearchResult < 0) return false;

  let lo = 0;
  let hi = matrix[rowSearchResult].length - 1;

  while (lo <= hi) {
    let pointer = Math.floor((lo + hi) / 2);
    console.log(pointer)
    if (matrix[rowSearchResult][pointer] === target) return true;
    else if (matrix[rowSearchResult][pointer] > target) hi = pointer - 1;
    else lo = pointer + 1;
  }

  return false;
};

var rowSearch = function (matrix, target) {
  let lo = 0;
  let hi = matrix.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length - 1]) return mid;
    else if (matrix[mid][0] > target) hi = mid - 1;
    else lo = mid + 1;
  }

  return -1;
};

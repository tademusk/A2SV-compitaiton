/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
    return nums
        .sort( (a, b) => (b.length - a.length)  ||  b.localeCompare(a) )
        [k-1];
};

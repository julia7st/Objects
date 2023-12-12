var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n);
    for (let j = 0; j < n; j++) {
        nums1[m + j] = Number(nums2[j]);
    }
    nums1.sort((a, b) => a - b);
};


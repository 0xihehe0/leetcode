var merge = function (nums1, m, nums2, n) {
    nums1 = nums1.slice(0,m)
    nums2 = nums2.slice(0,n)
    for (let index = 0; index < nums2.length; index++) {
        const element = nums2[index];
        nums1.push(element);
    }

    let recursive = data => {
        console.log(data);
        if(data.length === 1){
            return data
        }
        let mid = Math.floor(data.length / 2);
        let left = data.slice(0, mid);
        let right = data.slice(mid, data.length);
        let orderLeft = recursive(left);
        let orderRight = recursive(right);
        let newList = []
        while (orderRight.length || orderLeft.length) {
            if(orderRight.length && orderLeft.length){
                newList.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            }else if(orderLeft.length){
                newList.push(orderLeft.shift())
            }else if(orderRight.length){
                newList.push(orderRight.shift())
            }
        }
        console.log(newList);
        return newList
    };

    nums1 = recursive(nums1);
    console.log(nums1);
};

var sorts = function (m,n,nums1,nums2){
    nums1.splice(m,)
};

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3;
let n = 3;
merge(nums1, m, nums2, n);

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let checkStatus = true;
    if(s.length !== goal.length) {
        checkStatus = false
    }
    console.log((s + s).indexOf(goal));
    if((s + s).indexOf(goal) === -1){
        checkStatus = false
    }
    return checkStatus;
};

let s = "abcd" , goal = "aabb";
console.log(rotateString(s, goal));
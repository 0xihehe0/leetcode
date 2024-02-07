/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map2 = new Map();
    if(s.length !== t.length) {
        return false;
    }
    for (const char of s) {
        console.log(char);
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    for (let z = 0; z < t.length; z++) {
        const element = t[z];
        if(!map2.has(element)){
            return false;
        }
        map2.set(element,(map2.get(element) -1 ));
        if(map2.get(element) === 0) {
            map2.delete(element);
        }
    }
    if(map2.size === 0){
        return true;
    }
    return false
};

let s = 'paper',
    t = 'tisle';
    console.log(isAnagram("aabb","abbb"));

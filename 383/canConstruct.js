/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const cnt = new Array(26).fill(0);
    for (const c of magazine) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const c of ransomNote) {
        cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true
};

let ransomNote = 'aza',
    magazine = 'zbaa';
console.log(canConstruct(ransomNote, magazine));

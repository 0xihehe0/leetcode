/**
 * @param {string} digits
 * @return {string[]}
 */
let map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
]);

var letterCombinations = function (digits) {
    let allarr = [];
    if(digits.length === 0){
        return allarr;
    }
    generateCombinations(0, allarr, '', digits);
    return allarr
};

function generateCombinations(index, allarr, str, digits) {
    if (index === digits.length) {
        allarr.push(str);
        return
    } else {
        let checkNum = digits[index]
        let checkStr = map.get(checkNum);
        for (var i = 0; i < checkStr.length; i++) {
            generateCombinations(index + 1, allarr, str + checkStr[i], digits);
        }
    }
}

let digits = '23';
console.log(letterCombinations(digits));

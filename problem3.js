//Signature
function getQuestionPart(phrases) {
    for (var index in phrases) {
        if (phrases[index].includes(" ")) {
            phrases[index] = phrases[index].replace(/\s/g, "");
        }
    }
    var length_word_min = Math.min(phrases[0].length, phrases[1].length, phrases[2].length);
    var w1 = [];
    var w2 = [];
    for (var index = length_word_min - 1; index > 0; index--) {
        var count = 0;
        w1 = [];
        w2 = [];
        for (var _i = 0, phrases_1 = phrases; _i < phrases_1.length; _i++) {
            var item = phrases_1[_i];
            w1.push(item.substring(0, index));
            w1.push(item.substring(index));
            w1.push(item.substring(0, item.length - index));
            w1.push(item.substring(item.length - index));
            w2.push(index);
        }
        // console.log(index)
        // console.log(w1)
        //console.log(w2)
        for (var _a = 0, w1_1 = w1; _a < w1_1.length; _a++) {
            var word = w1_1[_a];
            for (var index2 = 0; index2 <= w1.length; index2++) {
                if (word == w1[index2]) {
                    //console.log((`this ${count}`))
                    count = count + 1;
                }
            }
            if (count >= 3) {
                break;
            }
            else {
                count = 0;
            }
        }
        if (count >= 3) {
            break;
        }
    }
    //console.log("-----------------")
    //console.log(w1)
    //console.log(w2)
    var duplicates = [];
    for (var i = 0; i < w1.length; i++) { //i=0,1,2...
        var word = w1[i];
        for (var j = i + 1; j < w1.length; j++) { //j=1,2,3...
            if (word === w1[j] && !duplicates.includes(word)) { //do not include value now
                duplicates.push(word);
            }
        }
    }
    //console.log(duplicates); // Output: ["FRIEND"]
    var result = w1.reduce(function (acc, curr, index, arr) {
        if (index % 2 === 0) {
            acc.push([curr, arr[index + 1]]);
        }
        return acc;
    }, []);
    var result2 = result.filter(function (subarray) { return subarray.includes(duplicates[0]); });
    //console.log(result2);
    var updatedResult = result2.map(function (subarray) { return subarray.filter(function (element) { return element !== duplicates[0]; }); });
    console.log("".concat(phrases, "===").concat(updatedResult));
    return updatedResult;
    // return array of three strings that makes a question for "Remote Associates Test".
}
//let updatedResult=getQuestionPart(["BATHROOM","BATH SALTS","BLOODBATH"])
var updatedResult = getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);

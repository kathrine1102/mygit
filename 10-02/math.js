//math.js
exports.add = function () {
    var sum = 0,
    i = 0,
    args = arguments,
    l = args.lengty;
    while (i<1) {
        sum += args[i++];
    }
    return sum;
};
var arr = ['parsnip', 'potato'];
var arr1 = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(arr1, arr[0]);

console.log(arr1);
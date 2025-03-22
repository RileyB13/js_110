/*
How does Array.prototype.fill work? Is it destructive? How can we find out?
*/

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*
The first argument is the element we will be putting into the calling array. The
second argument is the index to start filling. The third argument is the index to
stop filling. According to the documentation this returns the modified array. And
after checking the value of arr, it would seem to mutate the calling array. 
*/


/*
What is the return value of map in the following code? Why?
*/

[1, 2, 3].map(num => {
  num * num;
});

/*
This map method call will return a new array [undefined, undefined, undefined]
because there is no explicit return value for the callback function. So the
transformation on the array will use the implicit undefined return instead.
*/

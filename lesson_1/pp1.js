/*
What is the return value of the filter method call below? Why?
*/

[1, 2, 3].filter(num => 'hi');

/*
This returns a new array [1, 2, 3], because the callback will return the truthy
value 'hi' for each element.
*/

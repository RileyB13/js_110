/*
The following code differs slightly from the above code. What is the return value
of map in this case? Why?
*/

[1, 2, 3].map(num => num * num);

/*
This one returns [1, 4, 9] because the in-line version of writing the callback
allows the expression to be returned without the explicit return keyword.
*/

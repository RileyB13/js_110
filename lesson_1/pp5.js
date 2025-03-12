/*
What is the callback's return value in the following code? Also, what is the return
value of every in this code?
*/

[1, 2, 3].every(num => {
  return num = num * 2;
});

/*
I missed the part where this was asking me to give the return for the callback as 
well. This I believe will return true, as the assignment that takes place returns
a truthy value in every iteration of this callback.

2, 4, 6, then true.
*/

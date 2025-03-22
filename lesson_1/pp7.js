/*
What is the return value of map in the following code? Why?
*/

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/*
The return value of map in the above code is a new array [undefined, 'bear']. This
is because we've tucked the only explicit return inside an if statement. So elements
that meet the conditional requirement get returned by the callback, any that don't
return undefined implicitly from the callback.
*/



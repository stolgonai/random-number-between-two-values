# random-number-between-two-values

Easy way to create random number between two values

used React-class

Getting a random integer between two values
This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() \* (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

"use strict";
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let Place = ['Italy', 'Germany', 'Agra', 'Eiffel Tower', 'Times Square',];
// • Print your array in its original order.
console.log('\n1)Original ' + Place);
// • Print your array in alphabetical order without modifying the actual list.
console.log('\n2)copy ' + [...Place].sort());
// • Show that your array is still in its original order by printing it.
console.log('\n3)Original ' + Place);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('\n4)copy ' + [...Place].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log('\n5)Original ' + Place);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('\n6)Original ' + Place.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('\n7)Original ' + Place.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\n8)Original ' + Place.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\n9)Original ' + Place.sort().reverse());
let copy_arr = [...Place];
console.log('\n copy arr ' + copy_arr.sort());
console.log('\n copy arr ' + copy_arr.reverse());
console.log('\n copy arr ' + copy_arr.sort().reverse());

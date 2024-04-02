
arr=[{"id":15,"title":"cs period","description":"data structures"},{"id":13,"title":"cs period","description":"data structures"},{"id":11,"title":"cs period","description":"data structures"},{"id":6,"title":"cs period","description":"data structures"}]

console.log(arr);

function removeAtIndex(arr,tar){
    arr.splice(tar,1);
    return arr
}
var arr1 = [3, 8,7,6,5,-4,2,1];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});


document.write(arr1)
// output :
-4,1//,2,3,5,6,7,8 
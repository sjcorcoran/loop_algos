// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE
// example sum
var num=0
var sum=0
while(num<10){
    num++;
    console.log(num)
    sum=num+sum;
    console.log(sum)
}
// Fizzbuzz
var i=0
while(i<30){
    i++
    if(i %3 ==0 && i %5 ==0)
    console.log("Fizzbuzz")
    else if( i %3 ==0)
    console.log("Fizz")
    else if(i %5 ==0)
    console.log("Buzz")
else{
    console.log(i)
}
}
// Print odds
var skip=0
while (skip<20){
    if(skip %2==1)
    console.log(skip)
    skip++
}


let count = 0;
 
document.getElementById('DecrementBtn').onclick = function(){
    count -=1;
    document.getElementById("CounterLabel").innerHTML = count;
}

 
document.getElementById('IncrementBtn').onclick = function(){
    count +=1;
    document.getElementById("CounterLabel").innerHTML = count;
}


document.getElementById('ResetBtn').onclick = function(){
    count =0;
    document.getElementById("CounterLabel").innerHTML = count;

}



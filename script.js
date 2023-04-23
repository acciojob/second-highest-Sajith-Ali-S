
		let len = arr.length

function isAllElementsSame (arr){
    
    for(let i =1;i<len; i++){
        if(arr[0]!=arr[i])return false;
    }
    return true;
}

function secondHighest(arr) {
    
    if(arr.length==0 || isAllElementsSame(arr)==true)return -Infinity

    let max = -Infinity;
    for(let i =0;i<len;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }

    let smax = -Infinity;
    for(let j = 0 ; j < len ;  j++){

        if(arr[j]>smax && arr[j]!=max){
            smax=arr[j];
        }

    }
return smax

    
}


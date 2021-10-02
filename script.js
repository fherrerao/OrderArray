function getIndexToIns(arr, num) {
    arr = [...arr, num];
    arr.sort((a,b)=>a-b); 
    
    return arr.indexOf(num);
  }
  
  getIndexToIns([4, 6], 51);
function getLastNumber(end) {
    let ascendingNumbers = new Array();
    for (var i= 1; i < end ; i++){
      var temp = i;
      var c =10;
      var flag = 0;
      while (temp > 0) {
          if (temp % 10 >= c) {
              flag = 1;
              break;
          }
          c = temp % 10;
          temp = temp / 10;
      }
      if(flag == 0) {
          if( typeof i !== "undefined"){
              ascendingNumbers.push(i);
          }
      }
    }
    return ascendingNumbers[ascendingNumbers.length - 1]
}

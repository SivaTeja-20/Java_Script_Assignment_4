//Day calculation from date using "Zeller’s" Rule
       
function dayy(d,m,y){
    //According to Zeller’s rule the month is counted as follows:
    //March is 1, April is 2….. January is 11 and February is 12.
    //So the year starts from March and ends with February. So if the given date has month as January or February subtract 1 from the year. 
    var month = [0,11,12,1,2,3,4,5,6,7,8,9,10];
    //m is the month number.
      if (month[m]==11 || month[m]==12){
        var  yy=y-1
      }else{
          yy=y
      }
    var y1 = yy%10;
    var y2 = (yy-y1)%100;

    //A is the last two digits of the year.
    var A = y1+y2;

    //B is the first two digits of the year.            
    var B = (yy-A)/100;

    //d is  the day of the month.
    var dat = Math.floor( d+ ( (  (13*month[m])-1  )/5  ) + A  +   Math.floor(A/4)  +   Math.floor(B/4)  -  2*B  )
    var data = dat%7
   
    if (data>=0){
          console.log(switch1(data))
    }else{
       console.log(switch1(data+7))
    }
}


function switch1(data){

    var day = ""
    switch (data) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:  
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
      }
      return day
}

console.log(dayy(9,2,2022))




//Signature
// set minute to degree
function map_min():Map<string,number>{
  let aa:string[]=[]//array
  let bb:number[]=[]//array
  for (let i=0;i<60;i++) {
    if (i<=9){
    aa.push('0'+String(i))
    }
    else{aa.push(String(i))}
  }
  for (let i=0;i<360;) {
    bb.push(i)
    i=i+6
  }
  const Minute : Map<string, number> = new Map();
  for (let index in aa){
    Minute.set(aa[index], bb[index]);
  }
  return Minute
}

//--------------------------------------------------------------------------------------------------------
function map_hour():Map<string,number>{
  // set hour to degree
  let cc:string[]=[]//array
  let dd:number[]=[]//array
  let ee:number[]=[]//array
  for (let i=0;i<24;i++) {
    if (i<=9){
      cc.push('0'+String(i))
      }
      else{cc.push(String(i))}
  }
  for (let i=0;i<720;) {
    dd.push(i)
    i=i+30
  }
  dd.forEach(element=>{
    if(element>=360)
    {element=element-360}
    ee.push(element)
  })
  const Hour : Map<string, number> = new Map();
  for (let index in cc){
    Hour.set(cc[index], ee[index]);
  }
  return Hour
}

//--------------------------------------------------------------------------------------------------------
function getClockAngle(hh_mm:string):number {
  const Minute:Map<string,number>=map_min();
  const Hour:Map<string,number>=map_hour();
  let hh_mm2 = hh_mm.split(":",2); 
  let hour_time = hh_mm2[0]
  let min_time = hh_mm2[1]

  // console.log(typeof(min_time));
  // console.log((min_time));
  // console.log(Minute.get(min_time));


  // console.log(typeof(hour_time));
  // console.log((hour_time));
  // console.log(Hour.get(hour_time));
  let max =Math.max(Minute.get(min_time),Hour.get(hour_time))
  let min =Math.min(Minute.get(min_time),Hour.get(hour_time))
  let result:number =max-min
  let result2:number =360-result
  let result3:number =Math.min(result,result2)
  // console.log("----------------------");
  // console.log(max);
  // console.log(min);
  // console.log(result);
  // console.log(result2);
  // console.log(result3);
  return result3
  

  // return the shorter angle between the hour and minute hands of the clock, in degree
  }
  
//--------------------------------------------------------------------------------------------------------
  const result= getClockAngle("17:30")
  console.log(result)
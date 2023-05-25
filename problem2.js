//Signature
// set minute to degree
function map_min() {
    var aa = []; //array
    var bb = []; //array
    for (var i = 0; i < 60; i++) {
        if (i <= 9) {
            aa.push('0' + String(i));
        }
        else {
            aa.push(String(i));
        }
    }
    for (var i = 0; i < 360;) {
        bb.push(i);
        i = i + 6;
    }
    var Minute = new Map();
    for (var index in aa) {
        Minute.set(aa[index], bb[index]);
    }
    return Minute;
}
//--------------------------------------------------------------------------------------------------------
function map_hour() {
    // set hour to degree
    var cc = []; //array
    var dd = []; //array
    var ee = []; //array
    for (var i = 0; i < 24; i++) {
        if (i <= 9) {
            cc.push('0' + String(i));
        }
        else {
            cc.push(String(i));
        }
    }
    for (var i = 0; i < 720;) {
        dd.push(i);
        i = i + 30;
    }
    dd.forEach(function (element) {
        if (element >= 360) {
            element = element - 360;
        }
        ee.push(element);
    });
    var Hour = new Map();
    for (var index in cc) {
        Hour.set(cc[index], ee[index]);
    }
    return Hour;
}
//--------------------------------------------------------------------------------------------------------
function getClockAngle(hh_mm) {
    var Minute = map_min();
    var Hour = map_hour();
    var hh_mm2 = hh_mm.split(":", 2);
    var hour_time = hh_mm2[0];
    var min_time = hh_mm2[1];
    // console.log(typeof(min_time));
    // console.log((min_time));
    // console.log(Minute.get(min_time));
    // console.log(typeof(hour_time));
    // console.log((hour_time));
    // console.log(Hour.get(hour_time));
    var max = Math.max(Minute.get(min_time), Hour.get(hour_time));
    var min = Math.min(Minute.get(min_time), Hour.get(hour_time));
    var result = max - min;
    var result2 = 360 - result;
    var result3 = Math.min(result, result2);
    // console.log("----------------------");
    // console.log(max);
    // console.log(min);
    // console.log(result);
    // console.log(result2);
    // console.log(result3);
    return result3;
    // return the shorter angle between the hour and minute hands of the clock, in degree
}
//--------------------------------------------------------------------------------------------------------
var result = getClockAngle("17:30");
console.log(result);

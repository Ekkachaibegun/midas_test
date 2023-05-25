//Signature
function getQuestionPart(phrases:string[]):string[]{

    for (let index in phrases){//delete" "
        if (phrases[index].includes(" ")) {
            phrases[index]=phrases[index].replace(/\s/g,"");
        }
    }

    let length_word_min=Math.min(phrases[0].length,phrases[1].length,phrases[2].length)
    let w1:string[]=[]
    let w2:number[]=[]
    for (let index=length_word_min-1;index>0;index--){//รับข้อความที่มีการแบ่ง
        let count=0;
        w1=[]
        w2=[]
        for (let item of phrases){
            w1.push(item.substring(0,index));//แบ่งคำ xตัวแรก
            w1.push(item.substring(index));//แบ่งคำตัวที่2
            w1.push(item.substring(0,item.length - index));////แบ่งคำ xตัวหลัง
            w1.push(item.substring(item.length - index));////แบ่งคำของตัวแรก
            w2.push(index)
        }
        // console.log(index)
        // console.log(w1)
        //console.log(w2)




        for(let word of w1){//หากมีคำซ้ำเกิน3คำ ให้หยุด
            for (let index2=0;index2<=w1.length;index2++){
                if (word==w1[index2]){
                    //console.log((`this ${count}`))
                    count=count+1}
            }
            if (count>=3){break}
            else{
                count=0}
        }
        if (count>=3){break}
    }
    //console.log("-----------------")
    //console.log(w1)
    //console.log(w2)
    let duplicates = [];

    for (let i = 0; i < w1.length; i++) {//i=0,1,2...  หาคำที่ซ้ำ
        let word = w1[i];
        for (let j = i + 1; j < w1.length; j++) {//j=1,2,3...
            if (word === w1[j] && !duplicates.includes(word)) {//do not include value now
                duplicates.push(word);
            }
        }
    }
    //console.log(duplicates); // Output: ["FRIEND"]

    let result = w1.reduce((acc, curr, index, arr) => {
        if (index % 2 === 0) {
          acc.push([curr, arr[index + 1]]);
        }
        return acc;
      }, []);//แบ่งw1เป็ชุดคำ
    let result2 = result.filter(subarray => subarray.includes(duplicates[0]));//ลบชุดคำที่ไม่มี คำซ้ำ

    //console.log(result2);
    let updatedResult = result2.map(subarray => subarray.filter(element => element !== duplicates[0]));//ลบคำซ้ำ

    console.log(`${phrases}===${updatedResult}`);
    return updatedResult


// return array of three strings that makes a question for "Remote Associates Test".
}



//let updatedResult=getQuestionPart(["BATHROOM","BATH SALTS","BLOODBATH"])
let updatedResult=getQuestionPart(["BEFRIEND","GIRLFRIEND","FRIENDSHIP"])



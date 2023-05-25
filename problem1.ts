//Signature
class Card {//class
    suit: string;
    num: number;
  
    constructor(suit: string, num: number) {
      this.suit = suit;
      this.num = num;
    }
  }

//--------------------------------------------------------------------------------------------------------
function plus(input_card1,input_card2,input_card3){//sum of number
    if (input_card1.suit === input_card2.suit && input_card2.suit === input_card3.suit) {
        const sum = input_card1.num + input_card2.num+ input_card3.num;
        return [input_card1.suit,sum]
      }
      else if(input_card1.suit === input_card2.suit){
        const sum = input_card1.num + input_card2.num;
        return [input_card1.suit,sum,input_card3]
      }
      else if(input_card2.suit === input_card3.suit){
        const sum = input_card2.num + input_card3.num;
        return [input_card1.suit,sum,input_card1]
      }
      else if(input_card1.suit === input_card3.suit){
        const sum = input_card1.num + input_card3.num;
        return [input_card1.suit,sum,input_card2]
      }
      else{return [input_card1.suit,0]}
}
//--------------------------------------------------------------------------------------------------------
function getarray(input1:string):[string,number]{//splite text and number
    let fristword:string=input1[0];
    let lastword:number=parseInt(input1.slice(1))
      
    return [fristword,lastword]
}

//--------------------------------------------------------------------------------------------------------
//Signature
function getHandScore(input:string) {
    //defalut card
    const card1: any = new Card("S",0);
    const card2: any = new Card("C",0);
    const card3: any = new Card("H",0);
    const card4: any = new Card("D",0);
    const cards = [card1,card2,card3,card4];

    //input cards
    const inputt: string[] = input.split('');
    for (let i = 0; i < input.length; i++) {
        if (inputt[i] === 'A') {
            inputt[i] = '11';
        }
        else if(inputt[i] === 'J' ||inputt[i] === 'Q'||inputt[i] === 'K'){
            inputt[i] = '10';
        }
      }
    let input0:string
    input0 = inputt.join('');
    let inputtt = input0.split(" ",3); 
    let input1 = inputtt[0]
    let input2 = inputtt[1]
    let input3 = inputtt[2]
    const [fristword1, lastword1] =getarray(input1)
 
    const card_hand1: any = new Card(fristword1, lastword1);
    const [fristword2, lastword2] =getarray(input2)
    const card_hand2: any = new Card(fristword2, lastword2);
    const [fristword3, lastword3] =getarray(input3)
    const card_hand3: any = new Card(fristword3, lastword3);


    //find sum
    let reult_sum:number
    let reult_suit:string
    let a:number,b:number,c:number
    if (card_hand1.suit === card_hand2.suit && card_hand2.suit === card_hand3.suit) {
        a=card_hand1.num
        b=card_hand2.num
        c=card_hand3.num
        reult_sum = card_hand1.num + card_hand2.num+ card_hand3.num;
        reult_suit = card_hand1.suit
      }
      else if(card_hand1.suit === card_hand2.suit){
        a=card_hand1.num
        b=card_hand2.num
        reult_sum = card_hand1.num + card_hand2.num;
        reult_suit = card_hand1.suit
      }
      else if(card_hand2.suit === card_hand3.suit){
        b=card_hand2.num
        c=card_hand3.num
        reult_sum = card_hand2.num + card_hand3.num;
        reult_suit = card_hand2.suit
      }
      else if(card_hand1.suit === card_hand3.suit){
        a=card_hand1.num
        c=card_hand3.num
        reult_sum = card_hand1.num + card_hand3.num;
        reult_suit = card_hand1.suit
        }
      else{
        reult_sum=0
        reult_suit=""
    }
    const card_hand = [card_hand1,card_hand2,card_hand3];
    if (reult_suit!=""){
        const result: any = new Card(reult_suit, reult_sum);
        card_hand.push(result)
    }




    //input cards===default card
    for(let index1 in cards){
        for(let index2 in card_hand){
            if (cards[index1].suit===card_hand[index2].suit){
                cards[index1].num=card_hand[index2].num
            }
        }
    }
    //show text
    console.log(`your frist card ${input1}`)
    console.log(`your second card ${input2}`)
    console.log(`your third card ${input3}`)
    console.log(`Score values for each suit:`)
    cards.sort((a, b) => b.num - a.num);

    //change text
    let dummy_show:Card[]=[];

    for(let index in cards){
        if (cards[index].suit==="S")
        {cards[index].suit="Spades"}
        else if(cards[index].suit==="C")
        {cards[index].suit="Clubs"}
        else if(cards[index].suit==="H")
        {cards[index].suit="Hearts"}
        else{cards[index].suit="Diamonds"}

        //caseA-A-A
        if(lastword1===lastword2 && lastword2===lastword3){//case8-8-8 or ....
            cards[index].num= 32.5//case8-8-8 or ....
            if(lastword1===lastword2 && lastword2===lastword3 && lastword1===11){//caseA-A-A
                cards[index].num= 35//caseA-A-A
                console.log(`this case is A-A-A : ${cards[index].num}`)}//caseA-A-A
            else{console.log(`this case same rank : ${cards[index].num}`)}//case8-8-8 or ....
        }
        //show text
        else if(cards[index].num!=0){
            console.log(`${cards[index].suit} : ${cards[index].num}`)
        }
        else {
            dummy_show.push(cards[index]);//for worth card 0
        }
    }

    

    if (dummy_show.length==3){
        console.log(`${dummy_show[0].suit}, ${dummy_show[1].suit} and ${dummy_show[2].suit} : 0`)
    }
    else if(dummy_show.length==2){
        console.log(`${dummy_show[0].suit} and ${dummy_show[1].suit} : 0`)
    }else if(dummy_show.length==1){
        console.log(`${dummy_show[0].suit} : 0`)
    }
    const score=cards[0].num
    console.log(`Max of ${input} is ${cards[0].num}`)
    return score

    }

//--------------------------------------------------------------------------------------------------------


let max=getHandScore("S8 S10 CA")
console.log(`So the score is ${max} here.`)



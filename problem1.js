//Signature
var Card = /** @class */ (function () {
    function Card(suit, num) {
        this.suit = suit;
        this.num = num;
    }
    return Card;
}());
function plus(input_card1, input_card2, input_card3) {
    if (input_card1.suit === input_card2.suit && input_card2.suit === input_card3.suit) {
        var sum = input_card1.num + input_card2.num + input_card3.num;
        return [input_card1.suit, sum];
    }
    else if (input_card1.suit === input_card2.suit) {
        var sum = input_card1.num + input_card2.num;
        return [input_card1.suit, sum, input_card3];
    }
    else if (input_card2.suit === input_card3.suit) {
        var sum = input_card2.num + input_card3.num;
        return [input_card1.suit, sum, input_card1];
    }
    else if (input_card1.suit === input_card3.suit) {
        var sum = input_card1.num + input_card3.num;
        return [input_card1.suit, sum, input_card2];
    }
    else {
        return [input_card1.suit, 0];
    }
}
function getarray(input1) {
    var fristword = input1[0];
    var lastword = parseInt(input1.slice(1));
    return [fristword, lastword];
}
//Signature
function getHandScore(input) {
    //defalut card
    var card1 = new Card("S", 0);
    var card2 = new Card("C", 0);
    var card3 = new Card("H", 0);
    var card4 = new Card("D", 0);
    var cards = [card1, card2, card3, card4];
    //input cards
    var inputt = input.split('');
    for (var i = 0; i < input.length; i++) {
        if (inputt[i] === 'A') {
            inputt[i] = '11';
        }
        else if (inputt[i] === 'J' || inputt[i] === 'Q' || inputt[i] === 'K') {
            inputt[i] = '10';
        }
    }
    var input0;
    input0 = inputt.join('');
    var inputtt = input0.split(" ", 3);
    var input1 = inputtt[0];
    var input2 = inputtt[1];
    var input3 = inputtt[2];
    var _a = getarray(input1), fristword1 = _a[0], lastword1 = _a[1];
    var card_hand1 = new Card(fristword1, lastword1);
    var _b = getarray(input2), fristword2 = _b[0], lastword2 = _b[1];
    var card_hand2 = new Card(fristword2, lastword2);
    var _c = getarray(input3), fristword3 = _c[0], lastword3 = _c[1];
    var card_hand3 = new Card(fristword3, lastword3);
    //find sum
    var reult_sum;
    var reult_suit;
    var a, b, c;
    if (card_hand1.suit === card_hand2.suit && card_hand2.suit === card_hand3.suit) {
        a = card_hand1.num;
        b = card_hand2.num;
        c = card_hand3.num;
        reult_sum = card_hand1.num + card_hand2.num + card_hand3.num;
        reult_suit = card_hand1.suit;
    }
    else if (card_hand1.suit === card_hand2.suit) {
        a = card_hand1.num;
        b = card_hand2.num;
        reult_sum = card_hand1.num + card_hand2.num;
        reult_suit = card_hand1.suit;
    }
    else if (card_hand2.suit === card_hand3.suit) {
        b = card_hand2.num;
        c = card_hand3.num;
        reult_sum = card_hand2.num + card_hand3.num;
        reult_suit = card_hand2.suit;
    }
    else if (card_hand1.suit === card_hand3.suit) {
        a = card_hand1.num;
        c = card_hand3.num;
        reult_sum = card_hand1.num + card_hand3.num;
        reult_suit = card_hand1.suit;
    }
    else {
        reult_sum = 0;
        reult_suit = "";
    }
    var card_hand = [card_hand1, card_hand2, card_hand3];
    if (reult_suit != "") {
        var result = new Card(reult_suit, reult_sum);
        card_hand.push(result);
    }
    //input cards===default card
    for (var index1 in cards) {
        for (var index2 in card_hand) {
            if (cards[index1].suit === card_hand[index2].suit) {
                cards[index1].num = card_hand[index2].num;
            }
        }
    }
    //show text
    console.log("your frist card ".concat(input1));
    console.log("your second card ".concat(input2));
    console.log("your third card ".concat(input3));
    console.log("Score values for each suit:");
    cards.sort(function (a, b) { return b.num - a.num; });
    //change text
    var dummy_show = [];
    for (var index in cards) {
        if (cards[index].suit === "S") {
            cards[index].suit = "Spades";
        }
        else if (cards[index].suit === "C") {
            cards[index].suit = "Clubs";
        }
        else if (cards[index].suit === "H") {
            cards[index].suit = "Hearts";
        }
        else {
            cards[index].suit = "Diamonds";
        }
        //caseA-A-A
        if (lastword1 === lastword2 && lastword2 === lastword3) { //case8-8-8 or ....
            cards[index].num = 32.5; //case8-8-8 or ....
            if (lastword1 === lastword2 && lastword2 === lastword3 && lastword1 === 11) { //caseA-A-A
                cards[index].num = 35; //caseA-A-A
                console.log("this case is A-A-A : ".concat(cards[index].num));
            } //caseA-A-A
            else {
                console.log("this case same rank : ".concat(cards[index].num));
            } //case8-8-8 or ....
        }
        //show text
        else if (cards[index].num != 0) {
            console.log("".concat(cards[index].suit, " : ").concat(cards[index].num));
        }
        else {
            dummy_show.push(cards[index]); //for worth card 0
        }
    }
    if (dummy_show.length == 3) {
        console.log("".concat(dummy_show[0].suit, ", ").concat(dummy_show[1].suit, " and ").concat(dummy_show[2].suit, " : 0"));
    }
    else if (dummy_show.length == 2) {
        console.log("".concat(dummy_show[0].suit, " and ").concat(dummy_show[1].suit, " : 0"));
    }
    else if (dummy_show.length == 1) {
        console.log("".concat(dummy_show[0].suit, " : 0"));
    }
    var score = cards[0].num;
    console.log("Max of ".concat(input, " is ").concat(cards[0].num));
    console.log("So the score is ".concat(cards[0].num, " here."));
    return score;
}
var max = getHandScore("S8 S10 CA");
console.log("So the score is ".concat(max, " here."));

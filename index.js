// code your solution here
function saturdayFun(play='roller-skate'){
    return `This Saturday, I want to ${play}!`;
}

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`;
}

// wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%"

function wrapAdjective(special='*') {
        return function(str){
            return `You are ${special}${str}${special}!`;
        };
};
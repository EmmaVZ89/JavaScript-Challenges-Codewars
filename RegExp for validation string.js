// You have to using only one regexp!
//
// input format:
//
// let str = 'name:xxx,age:111,skill:xxx';
// 1) name/age/skill may be in any order, example:
//
// //is positive:
// 'name:xxx,age:111,skill:xxx'
// 'skill:xxx,name:xxx,age:111'
// 'name:xxx,skill:xxx,age:111' e.t.c.
// 2) name/skill have to be letters [A-Za-z]+
//
// 3) age have to be number (0 is good value) [0-9]+
//
// 4) comma "," can't be in start or end
//
// 5) in positive tests don't worry about space e.t.c. (for example there is no test: "name: xxx, age: xxx, skil: xxx").
//
// Have fun :)


let reg = /^(age:\d+(,(name|skill):[a-z]+){2}|(name|skill):[a-z]+,age:\d+,(name|skill):[a-z]+|((name|skill):[a-z]+,){2}age:\d+)$/i;

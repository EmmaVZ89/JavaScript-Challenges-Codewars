// Create a function method that allow you to wrap an existing function. The method signature would look something like this:
//
// Usage Example:
// function speak(name){
//    return "Hello " + name;
// }
//
// speak = speak.wrap(function(original, yourName, myName){
//    greeting = original(yourName);
//    return greeting + ", my name is " + myName;
// })
//
// var greeting = speak("Mary", "Kate");

function speak(name){
   return "Hello " + name;
}

Function.prototype.wrap = function(fn){
    let that = this;
    return function(arg2,arg3){
      return fn(that,arg2,arg3);
  };
};

speak = speak.wrap(function(original, yourName, myName){
   greeting = original(yourName);
   return greeting + ", my name is " + myName;
});


var greeting = speak("Mary", "Kate");

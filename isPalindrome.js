var puncChars = ".,' ?!:;"
var contains = function(str,char){
    for (var i = 0; i < str.length; i++){
        if(str[i]===char){
            return true
        }
    }
        return false
}

var stripPunctuation = function (dirtyStr){
    var cleanStr = ''
    for (var i = 0;i < dirtyStr.length; i++){
        var char = dirtyStr[i]
        if (!contains(puncChars,char)){
        cleanStr += char
        }   
    }
    return cleanStr
}


var answer = ""

var isPalindrome = function(input){  
  var strip = stripPunctuation(input)


  if(strip[0] !== strip[strip.length-1]){
        answer+= 'Not a palindrome.'
      return
  }
    if(strip[0] === strip[strip.length-1]){
     
        if(strip.slice(1,-1).length < 2){ 
            answer+= "It's a palindrome."
        return 
        } 
      isPalindrome(strip.slice(1,-1))
       return
    } 
}

isPalindrome('a man. a plan. a canal. panama!')

log(answer)
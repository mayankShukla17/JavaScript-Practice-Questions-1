// 3)Write a program with a user defined function to accept a character from user to check whether it is vowel or consonant?
// (Note: Function must return a Boolean value true for vowel or false for consonant).

function vowelConsonant(char){
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'||char==='A'||char==='E'||char==='I'||char==='O'||char==='U')
        return true;
    else 
        return false;    
}


console.log(vowelConsonant('a'));
console.log(vowelConsonant('f'));
console.log(vowelConsonant('z'));
console.log(vowelConsonant('u'));
console.log(vowelConsonant('O'));
console.log(vowelConsonant('B'));
console.log(vowelConsonant('N'));
console.log(vowelConsonant('E'));
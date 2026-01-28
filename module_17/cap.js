let a='dont lose hope';

let s=a.split(' ').map(word=> word[0].toUpperCase()+word.slice(1));

console.log(s.join(' '));

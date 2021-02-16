const vowels = ['a', 'e' ,'i', 'o', 'u'];
const v4w2ls = ['1', '2', '3', '4', '5']; 

const encode = str => [...str].map(e => vowels.includes(e) ? e = vowels.indexOf(e) + 1 : e).join('');
const decode = str => [...str].map(e => v4w2ls.includes(e) ? e = vowels[v4w2ls.indexOf(e)] : e).join('');
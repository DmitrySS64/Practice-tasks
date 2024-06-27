//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

const str = 'hello alexandr!';
const words  = str.split(' ');


const transformedWords = words.map(word => {
    const firstChar = word[0];
    return firstChar.repeat(word.length);
});

const result = transformedWords.join(' ');

console.log(result);

//сделать палиндромы из строк "дим" "манек" 
//"рота" чтоб получилось "димид" "манекенам" "ротатор"

const words = ["дим", "манек", "рота"];

function CreatePalindrome(word){
    const reversePart = word.slice(0, -1).split('').reverse().join('');

    return word + reversePart
}

console.log(words.map(word=>{
    return CreatePalindrome(word);
}))
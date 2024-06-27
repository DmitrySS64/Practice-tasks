//Реализуйте класс MyString, который будет иметь следующие методы: 
//метод reverse(), который параметром принимает строку, 
//а возвращает ее в перевернутом виде, метод ucFirst(), 
//который параметром принимает строку, а возвращает эту же строку, 
//сделав ее первую букву заглавной и метод ucWords, 
//который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{
    static reverse(str){
        if (!str) return str;
        return str.split('').reverse().join('');
    }
    static ucFirst(str){
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static ucWords(str) {
        if (!str) return str;
        return str.split(' ')
            .map(word => this.ucFirst(word))
            .join(' ');
    }
}

console.log(MyString.reverse('hello'));
console.log(MyString.ucFirst('hello'));
console.log(MyString.ucWords('hello world from MyString class'));
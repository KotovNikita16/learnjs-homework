"use strict";

//1.1. Преобразование строки к нижнему регистру, но первая буква большая.
function registerChange(in_str) {
    return in_str.charAt(0).toUpperCase() + in_str.slice(1).toLowerCase();
}

let str = "ABCD";
str = registerChange(str);

console.log(str);

//1.2. Преобразование строки с целью правильной расстановки пробелов.
function spaces(in_str) {
    return in_str.replace(/\s*(\p{P})\s*|\s+/gu, "$1 " ).slice(0, -1);
}

str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
console.log( spaces(str) );

//1.3. Посдчитывающие кол-во слов в строке.
function wordsCounter(in_str) {
    return in_str.replace(/\p{P}/gu, "").split(" ").length;
}

str = "Текст, в котором слово текст несколько раз встречается и слово тоже"
console.log( wordsCounter(str) );

//1.4. Подсчитывающий, уникальные слова.
function uniqueWords(in_str) {
    let dictionary = {};
    in_str = in_str.replace(/\p{P}/gu, "").toLowerCase().split(" ");

    for (let word of in_str) {
        dictionary[word] = !dictionary[word] ? 1 : dictionary[word] + 1;
    }

    for (let word in dictionary) {
        console.log(word, " - ", dictionary[word]);
    }
}

uniqueWords(str);

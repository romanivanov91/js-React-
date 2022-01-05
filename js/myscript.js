/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*
let posledniiFilm1 = prompt('Один из последних просмотренных фильмов');
let ocenkaFilma1 = prompt('На сколько оцените его?');
let posledniiFilm2 = prompt('Один из последних просмотренных фильмов');
let ocenkaFilma2 = prompt('На сколько оцените его?');

personalMovieDB.movies={
    [posledniiFilm1]: ocenkaFilma1,
    [posledniiFilm2]: ocenkaFilma2,
};

console.log(personalMovieDB);
*/

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

for (let i = personalMovieDB.count; i >= 1; i--) {
    
    let posledniiFilm = prompt('Один из последних просмотренных фильмов');
    let ocenkaFilma = prompt('На сколько оцените его?');

    if (posledniiFilm != null && ocenkaFilma != null && posledniiFilm != "" && ocenkaFilma != "" && posledniiFilm.length < 50) { 
        personalMovieDB.movies[posledniiFilm]=ocenkaFilma;
        console.log('Done');
    } else {
        console.log("Error");
        i++
    };
}

/* Это я сам пытался сделать, сверху решение из видеоурока
    if (posledniiFilm == "" || ocenkaFilma == "" || posledniiFilm.length > 50) {
        alert('Введите данные!!! Название фильма не может содержать больше 50 символов');
        posledniiFilm = prompt('Один из последних просмотренных фильмов');
        ocenkaFilma = prompt('На сколько оцените его?');
    } else {personalMovieDB.movies[posledniiFilm]=ocenkaFilma;}*/


console.log(personalMovieDB);

if (personalMovieDB.count < 4) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 4 && personalMovieDB.count < 10) {
    alert('Вы класический зритель');
} else if (personalMovieDB.count >= 10) {
    alert('Вы киноман');
} else {
    alert('Призошла ошибка')
};
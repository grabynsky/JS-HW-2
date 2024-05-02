// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
//  Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// -----1-----
console.log('-----1-----');

const arrTen = [100, 'string', true, false, [1, 2, 3], {
    name: 'Andrew',
    surname: 'Grabynsky'
}, 200, 'Olesya', 500, 'Marichka'];
console.log(arrTen[0], arrTen[1], arrTen[2], arrTen[3], arrTen[4], arrTen[5], arrTen[6], arrTen[7], arrTen[8], arrTen[9]);
console.log('Length ArrTen', arrTen.length);

console.log('-----------')

const bookJS = {
    title: 'Вивчаємо JavaScript',
    pageCount: 361,
    genre: 'Програмування',
}
console.log(bookJS);

const bookShevchenko = {
    title: 'Кобзар',
    pageCount: 402,
    genre: 'Поезія',
}
console.log(bookShevchenko);

const bookRomany = {
    title: 'Маруся Чурай',
    pageCount: 188,
    genre: 'Романи',
}
console.log(bookRomany);

const bookJSAuthors = {
    title: 'Вивчаємо JavaScript',
    pageCount: 361,
    genre: 'Програмування',
    authors: [{name: 'Eтан Браун', age: 45}]
}
console.log(bookJSAuthors);

const bookShevchenkoAuthors = {
    title: 'Кобзар',
    pageCount: 402,
    genre: 'Поезія',
    authors: [{name: 'Тарас Шевченко', age: 'died'}]
}
console.log(bookShevchenkoAuthors);

const bookRomanyAuthors = {
    title: 'Маруся Чурай',
    pageCount: 188,
    genre: 'Романи',
    authors: [{name: 'Ліна Костенко', age: 'died'}]
}
console.log(bookRomanyAuthors);

console.log('-----------')

const userOne = {
    name: 'Andrew',
    username: 'Andrew',
    password: 'Andrew123456'
}
console.log('Password UserOne -', userOne.password);

const userTwo = {
    name: 'Vasyl',
    username: 'Vasyl',
    password: 'Vasyl12345'
}
console.log('Password userTwo -', userTwo.password);

const userThree = {
    name: 'Kolya',
    username: 'Kolya',
    password: 'Kolya1234567'
}
console.log('Password userThree -', userThree.password);

const userFour = {
    name: 'Nadya',
    username: 'Nadya',
    password: 'Nadya12345678'
}
console.log('Password userFour -', userFour.password);

const userFive = {
    name: 'Jaroslav',
    username: 'Jaroslav',
    password: 'Jaroslav123'
}
console.log('Password userFive -', userFive.password);

const userSix = {
    name: 'Nina',
    username: 'UserNina',
    password: 'Nina123'
}
console.log('Password userSix -', userSix.password);

const userSeven = {
    name: 'Volodya',
    username: 'UserVolodya',
    password: 'Volodya12367'
}
console.log('Password userSeven -', userSeven.password);

const userEight = {
    name: 'Olya',
    username: 'UserOlya',
    password: 'Olya12345'
}
console.log('Password userEight -', userEight.password);

const userNine = {
    name: 'Olena',
    username: 'UserOlena',
    password: 'Olena1234'
}
console.log('Password userNine -', userNine.password);

const userTen = {
    name: 'Zahar',
    username: 'UserZahar',
    password: 'Zahar1234'
}
console.log('Password userTen -', userTen.password);

// -----2-----
console.log('-----2-----');
// ------------------------------
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
// ------------------------------

// const week = [
//     {
//         Mon: {
//             morning: 10,
//             day: 15,
//             evening: 14
//         },
//         Tue: {
//             morning: 10,
//             day: 16,
//             evening: 14
//         },
//         Wed: {
//             morning: 10,
//             day: 17,
//             evening: 14
//         },
//         Thu: {
//             morning: 10,
//             day: 18,
//             evening: 14
//         },
//         Fri: {
//             morning: 10,
//             day: 19,
//             evening: 14
//         },
//         Sat: {
//             morning: 10,
//             day: 15,
//             evening: 17
//         },
//         Sun: {
//             morning: 13,
//             day: 16,
//             evening: 14
//         },
//     }
// ]

const week = [
    {morning: 10, day: 13, evening: 14},
    {morning: 11, day: 14, evening: 12},
    {morning: 12, day: 13, evening: 13},
    {morning: 12, day: 15, evening: 14},
    {morning: 13, day: 16, evening: 15},
    {morning: 11, day: 14, evening: 11},
    {morning: 10, day: 13, evening: 10},
];
console.log('Weather', week);

// -----3-----
console.log('-----3-----');
//-------------------------
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
//  місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить
// порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//--------------------------------

let x;
x = 1;
// x=0;
// x=-3;
if (x !== 0) {
    console.log('Вірно', x);
} else {
    console.log('Не вірно', x);
}

console.log('---------------');

let time = 30;
if (time >= 0 && time <= 59) {
    if (time <= 15) {
        console.log('Перша частина годинни');
    } else if (time > 15 && time <= 30) {
        console.log('Друга частина годинни');
    } else if (time > 30 && time <= 45) {
        console.log('Третя частина годинни');
    } else if (time > 45 && time <= 59) {
        console.log('Четверта частина годинни');
    }
} else {
    console.log('Щось пішло не так')
}
console.log('---------------');

let day = 25;
if (day > 1 && day < 31) {
    if (day > 1 && day < 11) {
        console.log('Перша декада місяця');
    } else if (day > 10 && day < 21) {
        console.log('Друга декада місяця');
    } else if (day > 20 && day <= 31) {
        console.log('Третя декада місяця');
    }
} else {
    console.log('Щось пішло не так');
}

console.log('---------------');

let dayWeek = 4;
switch (dayWeek) {
    case 'Mon':
    case 1:
        console.log('Monday');
        break;
    case 'Tue':
    case 2:
        console.log('Tuesday');
        break;
    case 'Wed':
    case 3:
        console.log('Wednesday');
        break;
    case 'Thu':
    case 4:
        console.log('Thursday');
        break;
    case 'Fri':
    case 5:
        console.log('Friday');
        break;
    case 'Sat':
    case 6:
        console.log('Saturday');
        break;
    case 'Sun':
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Not day week');
}

console.log('---------------');

// let oneNum = 3;
// let twoNum = 3;
// if (oneNum !== twoNum) {
//     if (oneNum > twoNum) {
//         console.log('Перше число більше від другого');
//     } else if (oneNum < twoNum){
//         console.log('Друге чило більше від першого');
//     }
//
// } else {
//     console.log('Одинакові числа')
// }

// let oneNum = +prompt('enter one number');
// let twoNum = +prompt('enter two number');
//
// if (oneNum !== twoNum) {
//     if (oneNum > twoNum) {
//         alert('Перше число більше від другого')
//     } else if (oneNum < twoNum) {
//         alert('Друге чило більше від першого');
//     }
//
// } else {
//     alert('Одинакові числа');
// }

console.log('-----4-----');
// -----------------------------
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти
// в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//------------------------------
let xx = false;
console.log(xx);
if (!!xx === false) {
    xx = 'default';
    console.log(xx);
} else {
    console.log(typeof xx);
}

console.log('-----5-----');
//---------------------------------
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//---------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}

if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}

if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}

if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}

if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}

if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Super');
} else {
    console.log('Low')
}
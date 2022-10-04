function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Координаты палуб
let location1 = randomInteger(0,9)
let location2 = randomInteger(0,9)
let location3 = randomInteger(0,9)
//Кол-во выстрелов
let currentShot = 0
let shots = 0
let hits = 0
let isSunk = false
let hit1 = false
let hit2 = false
let hit3 = false

//Debug mode
alert('ответы: ' + location1 + ', ' + location2 + ', ' + location3)
//Цикл игры - работает, пока корабль не потонул
while (isSunk === false) {
  // Получаем координаты выстрела
  currentShot = Number(prompt('Введите число от 0 до 9:'))
  // Отмечаем, что сделан выстрел
  shots += 1
  // Проверяем, попал или не попал

  if (currentShot === location1) {
    hit1 = true
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }

  if (currentShot === location2) {
    hit2 = true
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }

  if (currentShot === location3) {
    hit3 = true
    alert('В ячейке ' + currentShot + ' оказалась часть корабля!')
  }

  if (currentShot < 0 || currentShot > 9) {
    alert('Введённое число !')
  }

  if (hit1 === true && hit2 === true && hit3 === true) {
    isSunk = true
    alert("Пустой корабль утонул, вы победили!")
  }
  // Если попал, то увеличиваем счётчик попаданий

  // Если попал три раза, то топим корабль и поздравляем игрока с победой
}

// //Координаты палуб
// let location1 = 5
// let location2 = 6
// let location3 = 7
// //Сколько выстрелов
// let currentShot
// let shots = 0
// //Сколько попаданий
// let hits = 0
// //Потоплен ли корабль?
// let isSunk = false

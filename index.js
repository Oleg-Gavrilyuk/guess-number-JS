let n = Math.floor(Math.random() * 1000)
console.log ('загадано число',n)
userNumber = prompt('Введите число от 0 до 999')
attempt = 0
while (true){
    if (userNumber === 'q') {
        alert ('До свидания')
        break
    }
    if (isNaN(userNumber)||(+userNumber<0)||(+userNumber>999)) {
        userNumber = +prompt('Нужно ввести число от 0 до 999')
    } else {
        if (userNumber === n) {
            alert('Поздравляем, вы угадали')
            break
        } else if (userNumber < n) {
            userNumber = +prompt(`Загаданное число больше, чем ваше, осталось попыток: ${9-attempt}`)
            attempt+=1
            } else {
            userNumber = +prompt(`Загаданное число меньше, чем ваше, осталось попыток: ${9-attempt}`)
            attempt+=1
        }
    }
    if (attempt === 9) {
        alert('Попытки закончились, вы проиграли')
        break
    }
    
}




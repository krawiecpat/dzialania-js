function funkcja(num1, num2) {
    let suma = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;

    if (suma < 0) {
        console.log('Wynik jest nieprawidłowy')
    } else {
        console.log('Wynik dodawania wynosi ' + suma);
    }
    if (difference < 0) {
        console.log('Wynik jest nieprawidłowy')
    } else {
        console.log('Wynik odejmowania wynosi ' + difference);
    }
    if (product < 0) {
        console.log('Wynik jest nieprawidłowy')
    } else {
        console.log('Wynik mnożenia wynosi ' + product);
    }
}
funkcja(10, 5)

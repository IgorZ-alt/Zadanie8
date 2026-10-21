
document.write("<h3>Zadanie 1</h3>");

var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
document.write("Element pod indeksem 4: " + tab1[4] + "<br>"); 

tab1[6] = 12;
document.write("Tab1 po zmianie: " + tab1 + "<br>");

var tab2 = [7, 3, 1, 6, 9, 5, 12, 10, 2, 2];
document.write("Tab2 na poczatku: " + tab2 + "<br>");

var tab3 = [];
for (var i = 0; i < tab1.length; i++) {
    tab3.push(tab1[i] + tab2[i]);
}
document.write("Suma tablic (Tab3): " + tab3 + "<br>");

tab2.reverse();
document.write("Odwrocona Tab2: " + tab2 + "<br><br>");


document.write("<h3>Zadanie 2 </h3>");

var tabStat = [...tab1]; 
var n = tabStat.length;

var min = Math.min(...tabStat);
var max = Math.max(...tabStat);
var suma = tabStat.reduce((a, b) => a + b, 0);
var srednia = suma / n;
var ile3 = tabStat.filter(x => x === 3).length;
var parzyste = tabStat.filter(x => x % 2 === 0).length;
var nieparzyste = n - parzyste;
var podzielne3 = tabStat.filter(x => x % 3 === 0).length;

document.write("Minimum: " + min + "<br>");
document.write("Maksimum: " + max + "<br>");
document.write("Srednia: " + srednia + "<br>");
document.write("Wystapienia liczby 3: " + ile3 + "<br>");

tabStat.sort((a, b) => a - b);
document.write("Sortowanie rosnaco: " + tabStat + "<br>");

let mediana;
if (n % 2 === 1) {
    mediana = tabStat[Math.floor(n / 2)];
} else {
    mediana = (tabStat[n / 2 - 1] + tabStat[n / 2]) / 2;
}
document.write("Mediana: " + mediana + "<br>");
document.write("3 najmniejsze: " + tabStat.slice(0, 3) + "<br>");
document.write("3 najwieksze: " + tabStat.slice(-3) + "<br>");
document.write("Parzyste: " + parzyste + "<br>");
document.write("Nieparzyste: " + nieparzyste + "<br>");
document.write("Podzielne przez 3: " + podzielne3 + "<br>");

var kwadraty = tabStat.map(x => x ** 2);
document.write("Elementy do kwadratu: " + kwadraty + "<br><br>");

document.write("<h3>Zadanie 3</h3>");

var wyraz = prompt("Podaj wyraz 10-literowy:");
if (!wyraz || wyraz.length !== 10) {
    document.write("Wyraz musi miec dokladnie 10 znakow.<br><br>");
} else {
    var tabLitery = wyraz.split("");
    var zamienioneLitery = tabLitery.map(litera => {
        if (litera === litera.toUpperCase()) {
            return litera.toLowerCase();
        }
        return litera.toUpperCase();
    });
    document.write("Po zamianie wielkosci liter: " + zamienioneLitery.join("") + "<br>");


    zamienioneLitery.sort(() => Math.random() - 0.5);
    document.write("Losowa kolejnosc: " + zamienioneLitery.join("") + "<br><br>");
}

document.write("<h3>Zadanie 4</h3>");

var A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 30));
var maxA = Math.max(...A);
var minA = Math.min(...A);
var indeksMin = A.indexOf(minA);

document.write("Najwieksza liczba: " + maxA + "<br>");
document.write("Liczba wystapien maksimum: " + A.filter(x => x === maxA).length + "<br>");
document.write("Liczby nieparzyste: " + A.filter(x => x % 2 !== 0) + "<br>");
document.write("Elementy o nieparzystych indeksach: " + A.filter((x, i) => i % 2 === 1) + "<br>");

var przedzial = A.filter(x => x >= 5 && x < 15);
document.write("Liczby z przedzialu [5,15): " + przedzial + "<br>");
document.write("Ilosc liczb w przedziale: " + przedzial.length + "<br>");

var a = Number(prompt("Podaj liczbe a (do znalezienia najblizszej wartości w tablicy A):"));
if (!isNaN(a)) {
    var najblizszy = A.reduce((best, x) => Math.abs(x - a) < Math.abs(best - a) ? x : best);
    document.write("Najblizsza liczba do " + a + ": " + najblizszy + "<br>");
}

if (indeksMin > 0) {
    document.write("Poprzednik pierwszego minimum: " + A[indeksMin - 1] + "<br>");
} else {
    document.write("Minimum jest na poczatku tablicy (brak poprzednika).<br>");
}

if (indeksMin < A.length - 1) {
    document.write("Nastepnik pierwszego minimum: " + A[indeksMin + 1] + "<br>");
} else {
    document.write("Minimum jest na koncu tablicy (brak nastepnika).<br>");
}

var B = A.filter(x => x > 10);
document.write("Elementy wieksze od 10 (Tablica B): " + B + "<br>");
document.write("Rozmiar tablicy B: " + B.length + "<br><br>");



var B = [];
var aktualnaSuma = 0;
for (var i = 0; i < A.length; i++) {
    aktualnaSuma += A[i];
    B[i] = aktualnaSuma;
}
document.write("<b>Tablica sum częściowych B:</b> " + B.join(", ") + "<br>");

var coNajmniej3Razy = [...new Set(A)].filter(x => A.filter(y => y === x).length >= 3);
document.write("<b>Elementy występujące co najmniej 3 razy:</b> " + coNajmniej3Razy.sort((x, y) => x - y).join(", ") + "<br>");

// 11. Posortuj tablicę malejąco
A.sort((x, y) => y - x);
document.write("<b>Tablica A posortowana malejąco:</b> " + A.join(", ") + "<br><br>");



document.write("<h3>Zadanie 5</h3>");

var fib = Array(100).fill(0);
fib[0] = 0;
fib[1] = 1;
for (var i = 2; i < 100; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
document.write("<b>Ciąg Fibonacciego (100 elementów):</b> " + fib.join(", ") + "<br><br>");

var potegiLiczby2 = Array.from({ length: 100 }, (_, i) => (2n ** BigInt(i)).toString());
document.write("<b>Kolejne potęgi liczby 2 (od 2^0 do 2^99):</b> " + potegiLiczby2.join(", ") + "<br><br>");

var wielokrotnosci3 = Array.from({ length: 100 }, (_, i) => 3 * (i + 1));
document.write("<b>Ciąg 3, 6, 9, 12... :</b> " + wielokrotnosci3.join(", ") + "<br><br>");

var ciagPotegOd2 = Array.from({ length: 100 }, (_, i) => (2n ** BigInt(i + 1)).toString());
document.write("<b>Ciąg 2, 4, 8, 16, 32... :</b> " + ciagPotegOd2.join(", ") + "<br>");

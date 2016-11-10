# Angular2-Szkolenie
Angular2-Szkolenie






Dzien 4:

##Testy:

1. http://galenframework.com/ - można używać jako testy, które dobrze się czyta.
2. Karma do testowania na silniku przegladarki (https://jasmine.github.io/)
   
   Jeśli "f" to tylko ten test, jeślii "x" to wyłączamy test.

   Komenda NPM do uruchomienia testów -> ng test

3. http://www.protractortest.org/#/ - testowanie interfejsu. Testy E2E. To nakładka na Selenium

   Komenda NPM do uruchomienia testów E2E -> ng e2e

##Animacje:

- To przejscie od jednego statu do drugiego (głownie dla elementów posiadających stany pośrednie).
- Stany zapisujemy do trigger-a w komponencie.
- Meta dane w komponencie: animations: [trigger('userMode')] - tworzymy stany i style.
- nastepnie dajemy przepis w formie transition z jednego stanu do drugiego stanu np. transition('confirm => inny_stan, animate(różnie przejsćia))
- kierunek przekształcania "=>" "<=>" + wildcard "*" każdy stan na inny stan. Przykłady w kodzie SpotifyPosterComponent
- stan void (gdy element nie istieje lub przestał instnieć. Czy jest lub go nie ma.)
- "* => void" -> ":leave" - dodatkowe aliasy.
- "void => *" -> ":enter" - dodatkowe aliasy.

##Budowanie aplikacji


Komenda NPM do uruchomienia budowania -> ng build

Komenda NPM do uruchomienia budowania -> ng build --prod

Aplikacja będzie w katalogu disc. 
Plik *.html + wszystkie js-y + plik gz.

##Dodatkowe narzędzia

https://sentry.io/welcome/ - logowanie automatyczne błedów w konsole od użytkownikow na produkcji. Płatne.
https://ng-bootstrap.github.io/#/home
http://plnkr.co/edit/?p=catalogue - szybki online edytor do aplikacji Angular 2 i nie tylko
https://material.angularjs.org/latest/ - dokumentacja do Angulara 2.
https://jsbin.com/ - szybkie online edytor do JS, Angulara itd.
http://fontawesome.io/ - ikonki jako czcionka. Super skalowanie. Duża baza.
http://bulma.io/ - style podobne do http://getbootstrap.com/. Przyjemne i łatwe.


Przykłady animacji na stronie, stworzone na stronie https://jsbin.com/

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div class="box"></div>
  <div class="box1">dsad</div>

</body>
</html>


.box {
  width: 50px;
  height: 50px;
  background: #000;
  margin: 50px;
  transition: all 1s;
}

.box:hover {
  transform: translate(10px,100px)
}

albo

.box:hover {
  transform: scale(30)
    
}









 


# Angular2-Szkolenie
Angular2-Szkolenie




Narzędzia do testowania:

Dzien 4:

Testy:

1. http://galenframework.com/ -- można używać jako testy, które dobrze się czyta.
2. Karma do testowania na silniku przegladarki (https://jasmine.github.io/)
   
   Jeśli "f" to tylko ten test, jeślii "x" to wyłanaczamy test.

   Komenda do uruchomienia -> ng test

3. Protractor - testowanie interfejsuj. Nakładka na Selenium
  aby odpalic to -> ng e2e

Animacje:

- To przejscie od jednego statu do drugiego.
- Stany zapisujemy do trigger-aby [@userModel]="user.mode"
- meta dane w komponencie animations: [trigger('userMode')] - tworzymy stany i style.
- nastepnie dajemy przepis w formie transition z jednego do drugiego. transition('confirm => inny_stan, animate(różnie przejsćia))
- kierunek przekstałcen => <=> + wildcard * każdy stan na inny_stan
- stan void (gdy element nie istieje lub przestał instnieć)
- * => void :leave
- void => *   :enter




 


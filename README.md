# WSKZ zadanie rekrutacyjne - Front-end developer 

Zadanie ma na celu sprawdzenie poziomu kandydata wiedzy z zakresu HTMLa, CSSa i JSa.

Projekt używa Node oraz modułów npm.

## Fork repozytorium

Link do repozytorium: https://github.com/wskz/zadanie-front-end-mid/

Repozytorium posiada uprawnienia odczytu. W celu ukończenia zadania wymagany jest fork do prywatnego repozytorium.

Po skończeniu zadania proszę nadać uprawnienia odczytu dla `grzegorz.topolewski@wskz.pl`, `anna.antaswskz@gmail.com`, `pawel.usinowicz@wskz.pl`

## Jak rozpocząć

Ponieważ projekt bazuje na Node, ważne jest aby Kandydat posiadał zainstalowany Node na lokalnym komputerze.

Dodatkowo projekt posiada już wymagane moduły npm, aby je zainstalować:

```
npm install
```

Celem ułatwienia pracy nad zadaniem zalecana jest instalacja dodatku do VSC (Visual Studio Code) 'Live Server'

## CSS

- Kandydat zobowiązany jest do pisania CSSa używając preprocesora Sass/Scss. W projekcie zostało utworzone zadanie Gulp 'sass'.

- Kandydat jest zobowiązany do pisania CSS w architekturze BEM. 

- W projekcie została utworzona podstawowa struktura folderów dla Sass/Scss (w oparciu o SMACSS)
```
  src/
    scss/
      base/
      layout/
      module/
      state/
      theme/ (opcjonalnie)
```
# JS

- Kandydat może zdecydować czy chce pisać JavaScript natywnie, czy woli użyć TypeScripta. 
- Inne biblioteki nie są dozwolone (np. jQuery). 
- W projekcie zostało utworzone zadanie Gulp 'scripts'

## Porady

- Postaraj się wykazać dobrą znajomościa Gita:
  - Postaraj się tworzyć commity do każdej istotnej części zadania 
  - Postaraj się używać dobrych opisów do commitów
- Postaraj się pisać modularny i efektywny Sass/Scss (używaj zmiennych, mixinów)
- Dozwolone jest użycie frameworków CSS (preferowany Boostrap 4+). W przypadku wyboru frameworka istotna jest optymalizacja narzędzia pod względem performance niepotrzebnego kodu narzędzia
- Pisząc HTML używaj prawidłowego nazewnictwa opartego o BEM 
- Pisząc JavaScript postaraj się wykazać znajomość ES6+
- Możesz doinstalować dodatkowe narzędzia używając npm, typu lintery SCSS oraz TS
- Projekt będzie oceniany pod kątem:
  - jakości kodu
  - performance
  - cross-browser
  - responsywności
  - odwzorowania pixel perfect
  - dostępności

## Zadania

### 1. Utworzenie product-listing page

- użyj `app/index.html`
- utwórz w pełni responywną stronę (header, footer, main section) w pliku index.html
- main section powinna pobierać informacje o produktach (nazwa produktu, opis, ocena ...) za pomocą AJAX - data set jest w pliku `src/data/products.json`
- każdy produkt powinien posiadać zdjęcie, nazwę, cenę (uwzględniając cenę promocyjną jeśli istnieje), rozmiar oraz link
- dodaj ikonę Wishlist do każdego produktu
- design dla sekcji produktów dostępny jest w `src/design/plp-design.png`
- strona powinna być w pełni responsywna
- strona powinna posiadać opcję zmiany widoku produktów między listą a grid'em
- postaraj się dodać uwagi rozwojowe do projektu, jak można go usprawnić

- **opcjonalne zadania:** - Data set produktów jest duży, postaraj się stworzyć prostą filtrację produktów (kategoria, cena, rozmiar) oraz sortowanie (cena (asc oraz desc), nazwa (asc, desc))
- **opcjonalne zadania:** - lista produktów jest bardzo długa na stronie, napisz prosty Lazy loading dla produktów używając AJAX

### 2. Walidacja formularza

- użyj `app/form.html` do pisania HTMLa
- stwórz formularz z poniższymi polami:
  - imię,
  - nazwisko,
  - email,
  - telefon (numer komórkowy),
  - hasło
- ostyluj formularz (możesz użyć frameworku CSS, preferowany Bootstrap 4+)
- napisz walidację formularza w natywnym JavaScript (bądź TypeScript):
  - wszystkie pola są wymagane
  - pola imię oraz nazwisko mogą przyjmować tylko znaki string, bez cyfr i znaków specjalnych (np. !@#), min długość to 3 znaki
  - adres email musi posiadać poprawny format
  - telefon akceptuje numery wg schematu +48xxx-xxx-xxx lub xxx-xxx-xxx,
  - hasło musi posiadać minumum 8 znaków, w tym: 1 znak specjalny, 1 cyfrę oraz 1 dużą literę
- walidacja musi zostać napisana w JavaScript (bądź TypeScript) bez użycia pluginów bądź HTML5 API
- wyświelt błędy pod każdym polem formularza
- **opcjonalne zadania** - napisz testy e2e, bądź jednostkowo dla formularza

## Przesłanie zadania do oceny

Zadanie musi zostać umieszczone jako projekt na prywatnym repozytorium Kandydata, z opcją odczytu dla: `grzegorz.topolewski@wskz.pl`, `anna.antaswskz@gmail.com`, `pawel.usinowicz@wskz.pl`

Poinformuj proszę  email `anna.antaswskz@gmail.com` w momencie zakończenia zadania

**Powodzenia**
Zespół WSKZ
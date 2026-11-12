import type { ProductKey } from "../products";
import type { LocalizedProductPage } from "../product-pages";

const pl: Partial<Record<ProductKey, LocalizedProductPage>> = {
  cashflow: {
    name: "Przepływy pieniężne",
    preview: {
      label: "Przepływy pieniężne",
      metric: { label: "Pozycja gotówkowa", value: "482,9 tys. €", note: "+8,2% wobec planu" },
      secondary: { label: "Planowane", value: "164,2 tys. €" },
      chartLabel: "Plan a rozliczenia",
      rows: [
        { label: "Wynagrodzenia", value: "28 900 €", status: "positive" },
        { label: "Płatność dla dostawcy", value: "12 400 €", status: "warning" },
        { label: "Rozliczenie kartą", value: "6 120 €", status: "positive" },
      ],
    },
    copy: {
      title: "Wiedz, co nadchodzi, co wychodzi i co pozostaje otwarte",
      subtitle:
        "Planuj wpisy, rozliczaj je względem kont bankowych i utrzymuj każdą operację powiązaną z kategorią, projektem lub działem, do którego należy.",
      bullets: [
        "Planowane i rozliczone wpisy w jednym widoku",
        "Częściowe rozliczenia i przelewy wewnętrzne",
        "Kategorie, projekty i działy",
        "Filtry, zapisane widoki i załączniki",
      ],
      outcomes: [
        {
          title: "Zobacz plan gotówkowy",
          desc: "Twórz planowane wpisy z terminami, kategoriami i właścicielami, aby miesiąc zaczynał się od punktu odniesienia.",
        },
        {
          title: "Rozliczaj względem rzeczywistych kont",
          desc: "Rejestruj pełne lub częściowe rozliczenia względem kont bankowych i utrzymuj aktualne saldo otwarte.",
        },
        {
          title: "Utrzymuj przelewy osobno",
          desc: "Przenoś środki między kontami bez zawyżania sum przychodów i kosztów.",
        },
        {
          title: "Raportuj z tych samych danych",
          desc: "Filtruj pozycje otwarte i rozliczone według kategorii, projektu lub działu.",
        },
      ],
      steps: [
        {
          title: "Utwórz przestrzeń roboczą",
          desc: "Wybierz kraj, walutę i typ przestrzeni roboczej. Zacznij na planie Free.",
        },
        {
          title: "Dodaj konta i kategorie",
          desc: "Dodaj konta bankowe i kategorie, których zespół już używa.",
        },
        {
          title: "Planuj, rozliczaj i przeglądaj",
          desc: "Planuj wpisy, rozliczaj je i przeglądaj pozycję bez odtwarzania arkusza.",
        },
      ],
      capabilitiesTitle: "Elementy składowe planu gotówkowego",
      capabilitiesSubtitle: "Każdy wpis przechowuje kwotę, terminy, odpowiedzialność i historię rozliczeń w jednym miejscu.",
      capabilities: [
        {
          title: "Planowane wpisy",
          desc: "Rejestruj kwotę, termin płatności, kategorię, projekt i kontrahenta.",
        },
        {
          title: "Rozliczenia",
          desc: "Rozliczaj w całości lub w częściach względem konta bankowego, z bieżącym saldem otwartym.",
        },
        {
          title: "Przelewy wewnętrzne",
          desc: "Przenoś środki między kontami bez zmiany sum przychodów i kosztów.",
        },
        {
          title: "Alokacje",
          desc: "Dziel wpisy między działy i przypisuj je do projektów.",
        },
        {
          title: "Filtry i zapisane widoki",
          desc: "Zapisuj filtry i kolumny używane najczęściej przez zespół.",
        },
        {
          title: "Załączniki",
          desc: "Przechowuj dokumenty źródłowe przy wpisie, do którego należą.",
        },
      ],
      finalTitle: "Zacznij od jasnego planu gotówkowego",
      finalSubtitle: "Utwórz bezpłatną przestrzeń roboczą i dodaj konta oraz kategorie, których już Państwo używają.",
    },
  },
  banking: {
    name: "Bankowość i płatności",
    preview: {
      label: "Bankowość",
      metric: { label: "Konta", value: "4", note: "2 waluty" },
      secondary: { label: "Pozycje wyciągu", value: "186" },
      chartLabel: "Dopasowane a oczekujące",
      rows: [
        { label: "Konto operacyjne", value: "Dopasowane", status: "positive" },
        { label: "Konto podatkowe", value: "12 oczekujących", status: "warning" },
        { label: "Konto rezerwowe", value: "Dopasowane", status: "positive" },
      ],
    },
    copy: {
      title: "Konta bankowe i wyciągi w tej samej przestrzeni roboczej",
      subtitle:
        "Utrzymuj dane kont, zaimportowane wyciągi i decyzje o dopasowaniu razem, aby uzgodnienia nie żyły w osobnym arkuszu.",
      bullets: [
        "Konta bankowe i salda",
        "Importy i parsowanie wyciągów",
        "Sugerowane dopasowania",
        "Przegląd uzgodnień",
      ],
      outcomes: [
        {
          title: "Jedna lista kont",
          desc: "Przechowuj nazwę banku, typ konta, walutę i saldo w przestrzeni roboczej.",
        },
        {
          title: "Importuj wyciągi",
          desc: "Wgraj wyciąg i przejrzyj sparsowane pozycje przed ich zatwierdzeniem.",
        },
        {
          title: "Dopasuj operacje",
          desc: "Korzystaj z sugerowanych dopasowań między pozycjami wyciągu a wpisami przepływów pieniężnych, a następnie je potwierdzaj.",
        },
        {
          title: "Przeglądaj wyjątki",
          desc: "Widzisz pozycje niedopasowane i oczekujące, zamiast szukać ich w plikach.",
        },
      ],
      steps: [
        {
          title: "Dodaj konto bankowe",
          desc: "Ustaw instytucję, typ konta, walutę i dane początkowe.",
        },
        {
          title: "Zaimportuj wyciąg",
          desc: "Wgraj plik i przejrzyj sparsowane pozycje przed importem.",
        },
        {
          title: "Dopasuj i uzgodnij",
          desc: "Potwierdź sugerowane dopasowania i utrzymuj wyjątki w widoku.",
        },
      ],
      capabilitiesTitle: "Dane bankowe bez dodatkowego arkusza",
      capabilitiesSubtitle: "Konta, pozycje wyciągów i decyzje o dopasowaniu pozostają powiązane z przepływami pieniężnymi, które wyjaśniają.",
      capabilities: [
        {
          title: "Konta bankowe",
          desc: "Instytucja, typ, waluta i dane konta w każdej przestrzeni roboczej.",
        },
        {
          title: "Importy wyciągów",
          desc: "Wgrywanie i parsowanie wyciągów z krokiem przeglądu przed zatwierdzeniem.",
        },
        {
          title: "Sugerowane dopasowania",
          desc: "Klasyfikuj pozycje wyciągu względem wpisów i powtarzalnych wzorców.",
        },
        {
          title: "Przegląd uzgodnień",
          desc: "Utrzymuj widoczność pozycji oczekujących, dopasowanych i niedopasowanych.",
        },
        {
          title: "Powiązania rozliczeń",
          desc: "Łącz rozliczone operacje z kontem bankowym, które je otrzymało.",
        },
        {
          title: "Role w przestrzeni roboczej",
          desc: "Dane kont pozostają w zakresie przestrzeni roboczej i jej członków.",
        },
      ],
      finalTitle: "Włącz bankowość do tej samej przestrzeni roboczej",
      finalSubtitle: "Zacznij bezpłatnie i dodaj pierwsze konto bankowe.",
    },
  },
  spend: {
    name: "Wydatki i rozliczenia",
    preview: {
      label: "Wydatki",
      metric: { label: "Otwarte wypływy", value: "38,4 tys. €", note: "14 wpisów" },
      secondary: { label: "Rozliczone w tym miesiącu", value: "96,2 tys. €" },
      chartLabel: "Rozliczone a otwarte",
      rows: [
        { label: "Podróże", value: "2 840 €", status: "positive" },
        { label: "Oprogramowanie", value: "1 290 €", status: "warning" },
        { label: "Biuro", value: "640 €", status: "positive" },
      ],
    },
    copy: {
      title: "Śledź wydatki wychodzące i rozliczaj je względem planu",
      subtitle:
        "Rejestruj wpisy wychodzące, przypisuj je do kategorii, projektów lub działów i rozliczaj w całości lub w częściach.",
      bullets: [
        "Wpisy wychodzące z terminami",
        "Częściowe rozliczenia",
        "Alokacja do projektów i działów",
        "Widoki salda otwartego",
      ],
      outcomes: [
        {
          title: "Zobacz zaangażowane wydatki",
          desc: "Rejestruj wpisy wychodzące z terminami, kategoriami i właścicielami.",
        },
        {
          title: "Rozliczaj w częściach",
          desc: "Zastosuj jedno lub więcej rozliczeń do wpisu i śledź pozostałą kwotę.",
        },
        {
          title: "Przypisz koszt",
          desc: "Dziel wydatki między działy i łącz je z projektami.",
        },
        {
          title: "Przeglądaj, co jest otwarte",
          desc: "Filtruj wydatki otwarte i rozliczone bez eksportowania danych.",
        },
      ],
      steps: [
        {
          title: "Zarejestruj wypływ",
          desc: "Rejestruj kwotę, termin płatności, kategorię, projekt i kontrahenta.",
        },
        {
          title: "Rozlicz względem konta",
          desc: "Zastosuj jedno lub więcej rozliczeń i utrzymuj bieżące saldo otwarte.",
        },
        {
          title: "Przejrzyj saldo",
          desc: "Filtruj wydatki rozliczone i otwarte według kategorii, projektu lub działu.",
        },
      ],
      capabilitiesTitle: "Wydatki, które pozostają powiązane z rozliczeniem",
      capabilitiesSubtitle: "Wpisy wychodzące zachowują alokację i historię rozliczeń, zamiast kończyć w osobnym arkuszu.",
      capabilities: [
        {
          title: "Wpisy wychodzące",
          desc: "Kwota, termin płatności, kategoria, projekt i kontrahent.",
        },
        {
          title: "Częściowe rozliczenia",
          desc: "Rozlicz wpis w ramach wielu płatności.",
        },
        {
          title: "Alokacje",
          desc: "Przypisuj procenty do działów i łącz projekty.",
        },
        {
          title: "Widoki otwartych pozycji",
          desc: "Przeglądaj wydatki otwarte i rozliczone z zapisanymi filtrami.",
        },
      ],
      finalTitle: "Utrzymaj wydatki i rozliczenia w powiązaniu",
      finalSubtitle: "Zacznij bezpłatnie i zarejestruj pierwszy wpis wychodzący.",
    },
  },
  ledger: {
    name: "Księga główna",
    preview: {
      label: "Księga główna",
      metric: { label: "Konta księgowe", value: "128", note: "6 kont nadrzędnych" },
      secondary: { label: "Zapisy księgowe", value: "1 842" },
      chartLabel: "Aktywność księgowania",
      rows: [
        { label: "Przychody · 4010", value: "Zbilansowane", status: "positive" },
        { label: "Wynagrodzenia · 6200", value: "Zaksięgowane", status: "positive" },
        { label: "Konto przejściowe · 9999", value: "Do przeglądu", status: "warning" },
      ],
    },
    copy: {
      title: "Plan kont stworzony do spójnego raportowania",
      subtitle:
        "Uporządkuj konta nadrzędne i księgowe, rejestruj zapisy księgowe i utrzymuj okresy oraz wymiary pod kontrolą.",
      bullets: [
        "Konta nadrzędne i księgowe",
        "Zapisy księgowe i księgi",
        "Okresy obrachunkowe",
        "Wymiary i polityki księgowania",
      ],
      outcomes: [
        {
          title: "Uporządkuj plan kont",
          desc: "Twórz konta nadrzędne i księgowe z kodami i saldami normalnymi.",
        },
        {
          title: "Rejestruj zapisy",
          desc: "Księguj zapisy z pozycjami, księgami i okresami obrachunkowymi.",
        },
        {
          title: "Utrzymuj wymiary",
          desc: "Definiuj wymiary i dozwolone wartości dla struktury raportowania.",
        },
        {
          title: "Kontroluj księgowanie",
          desc: "Stosuj polityki księgowania i kontrolę księgowania ręcznego tam, gdzie to potrzebne.",
        },
      ],
      steps: [
        {
          title: "Zaprojektuj plan kont",
          desc: "Utwórz konta nadrzędne i księgowe, których wymaga raportowanie.",
        },
        {
          title: "Rejestruj zapisy",
          desc: "Księguj zapisy z właściwą księgą, okresem i wymiarami.",
        },
        {
          title: "Przeglądaj okresy",
          desc: "Utrzymuj okresy obrachunkowe i status księgowania pod kontrolą.",
        },
      ],
      capabilitiesTitle: "Struktura księgowa, która się utrzymuje",
      capabilitiesSubtitle: "Plan kont, księgi, okresy i wymiary dzielą jedną przestrzeń roboczą, zamiast się rozjeżdżać.",
      capabilities: [
        {
          title: "Plan kont",
          desc: "Konta nadrzędne i księgowe z kodami, typami i saldami normalnymi.",
        },
        {
          title: "Zapisy księgowe",
          desc: "Zapisy wielopozycyjne z księgami, okresami i statusem.",
        },
        {
          title: "Okresy obrachunkowe",
          desc: "Otwieraj i zamykaj okresy dla każdej księgi.",
        },
        {
          title: "Wymiary",
          desc: "Definiuj wymiary, wartości i reguły na poziomie konta.",
        },
        {
          title: "Polityki księgowania",
          desc: "Kontroluj sposób księgowania zapisów i konta dopuszczające księgowanie ręczne.",
        },
        {
          title: "Kontrole kont",
          desc: "Konta kontrolne banku i zabezpieczenia klasyfikacji.",
        },
      ],
      finalTitle: "Zbuduj księgę główną, która się obroni",
      finalSubtitle: "Zacznij bezpłatnie i dopasuj plan kont do raportowania.",
    },
  },
  projects: {
    name: "Projekty",
    preview: {
      label: "Projekty",
      metric: { label: "Aktywne projekty", value: "24", note: "6 typów" },
      secondary: { label: "Powiązane wpisy", value: "312" },
      chartLabel: "Plan i rozliczenia według projektu",
      rows: [
        { label: "Wdrożenie", value: "420 tys. €", status: "positive" },
        { label: "Migracja", value: "186 tys. €", status: "warning" },
        { label: "Wsparcie", value: "96 tys. €", status: "positive" },
      ],
    },
    copy: {
      title: "Zobacz koszty i przychody według projektu",
      subtitle:
        "Twórz projekty, przypisuj do nich wpisy przepływów pieniężnych i porównuj kwoty planowane, rozliczone i otwarte w jednym filtrze.",
      bullets: [
        "Rekordy projektów z kodami i typami",
        "Powiązania wpisów z projektami",
        "Alokacje do działów",
        "Widoki dedykowane projektom",
      ],
      outcomes: [
        {
          title: "Utwórz rekord projektu",
          desc: "Nazwa, kod, typ i opis ze statusem aktywności.",
        },
        {
          title: "Przypisz wpisy",
          desc: "Łącz planowane i rozliczone wpisy przepływów pieniężnych z projektem.",
        },
        {
          title: "Alokuj działy",
          desc: "Dziel koszt wpisu między działy.",
        },
        {
          title: "Przejrzyj projekt",
          desc: "Filtruj wpisy i kwoty otwarte według projektu.",
        },
      ],
      steps: [
        {
          title: "Utwórz projekt",
          desc: "Dodaj nazwę, kod i typ, aby projekt był łatwy do zidentyfikowania.",
        },
        {
          title: "Przypisz wpisy",
          desc: "Połącz wpisy przepływów pieniężnych należące do projektu.",
        },
        {
          title: "Przejrzyj pozycję",
          desc: "Filtruj kwoty planowane, rozliczone i otwarte według projektu.",
        },
      ],
      capabilitiesTitle: "Kontekst projektu przy każdej operacji",
      capabilitiesSubtitle: "Wpisy, podziały na działy i status rozliczenia pozostają przypisane do projektu, do którego należą.",
      capabilities: [
        {
          title: "Rekordy projektów",
          desc: "Nazwa, kod, typ, opis i status.",
        },
        {
          title: "Powiązania wpisów",
          desc: "Przypisuj wpisy przepływów pieniężnych bezpośrednio do projektu.",
        },
        {
          title: "Podział na działy",
          desc: "Alokuj procenty wpisu między działy.",
        },
        {
          title: "Filtry projektów",
          desc: "Przeglądaj wpisy, rozliczenia i kwoty otwarte według projektu.",
        },
      ],
      finalTitle: "Uczyń wyniki projektów widocznymi",
      finalSubtitle: "Zacznij bezpłatnie i utwórz pierwszy projekt.",
    },
  },
  departments: {
    name: "Działy",
    preview: {
      label: "Działy",
      metric: { label: "Działy", value: "8", note: "3 centra kosztów" },
      secondary: { label: "Przypisane wpisy", value: "246" },
      chartLabel: "Wpisy według działu",
      rows: [
        { label: "Operacje", value: "42%", status: "positive" },
        { label: "Sprzedaż", value: "31%", status: "warning" },
        { label: "Inżynieria", value: "27%", status: "positive" },
      ],
    },
    copy: {
      title: "Przypisz każdą operację do zespołu, który za nią odpowiada",
      subtitle:
        "Twórz działy, alokuj procenty wpisów i przeglądaj liczby według zespołu bez odtwarzania raportu.",
      bullets: [
        "Rekordy działów",
        "Alokacje procentowe",
        "Filtry wpisów według działu",
        "Zapisane widoki",
      ],
      outcomes: [
        {
          title: "Utwórz dział",
          desc: "Nazwa, kod i status aktywności dla każdego centrum kosztów.",
        },
        {
          title: "Alokuj wpisy",
          desc: "Przypisz jeden lub więcej działów do wpisu wraz z procentami.",
        },
        {
          title: "Filtruj według zespołu",
          desc: "Przeglądaj wpisy i rozliczenia dla jednego działu naraz.",
        },
        {
          title: "Utrzymuj widoczność odpowiedzialności",
          desc: "Zobacz, który zespół odpowiada za wydatki w tej samej przestrzeni roboczej.",
        },
      ],
      steps: [
        {
          title: "Zdefiniuj działy",
          desc: "Dodaj nazwy i kody, których zespoły już używają.",
        },
        {
          title: "Alokuj wpisy",
          desc: "Podziel wpis między działy za pomocą procentów.",
        },
        {
          title: "Przejrzyj liczby",
          desc: "Filtruj wpisy przepływów pieniężnych według działu i przeglądaj pozycję.",
        },
      ],
      capabilitiesTitle: "Widok centrów kosztów, któremu można zaufać",
      capabilitiesSubtitle: "Podziały na działy pozostają przypisane do wpisu, zamiast być odtwarzane w momencie raportowania.",
      capabilities: [
        {
          title: "Rekordy działów",
          desc: "Nazwa, kod i status dla każdego centrum kosztów.",
        },
        {
          title: "Alokacja procentowa",
          desc: "Dziel wpis między działy z określonymi procentami.",
        },
        {
          title: "Filtry wpisów",
          desc: "Filtruj wpisy przepływów pieniężnych według działu.",
        },
        {
          title: "Zapisane widoki",
          desc: "Zachowaj kolumny i filtry używane przez zespół.",
        },
      ],
      finalTitle: "Nadaj każdej operacji właściciela",
      finalSubtitle: "Zacznij bezpłatnie i zdefiniuj pierwszy dział.",
    },
  },
  crm: {
    name: "CRM",
    preview: {
      label: "Podmioty",
      metric: { label: "Podmioty", value: "186", note: "7 typów" },
      secondary: { label: "Aktywne", value: "164" },
      chartLabel: "Podmioty według typu",
      rows: [
        { label: "Klienci", value: "82", status: "positive" },
        { label: "Dostawcy", value: "46", status: "positive" },
        { label: "Wykonawcy", value: "18", status: "neutral" },
      ],
    },
    copy: {
      title: "Jeden katalog wszystkich kontrahentów",
      subtitle:
        "Utrzymuj klientów, dostawców, pracowników, wykonawców i partnerów w jednej przestrzeni roboczej i łącz ich z powiązanymi wpisami przepływów pieniężnych.",
      bullets: [
        "Klienci, dostawcy i partnerzy",
        "Dane kontaktowe i podatkowe",
        "Typy podmiotów i status",
        "Powiązania z wpisami przepływów pieniężnych",
      ],
      outcomes: [
        {
          title: "Jeden katalog",
          desc: "Przechowuj każdego kontrahenta raz, z jasno określonym typem podmiotu.",
        },
        {
          title: "Dane kontaktowe",
          desc: "Przechowuj e-mail, telefon i adres razem z rekordem.",
        },
        {
          title: "Dane podatkowe i bankowe",
          desc: "Przechowuj identyfikatory podatkowe i dane bankowe, gdy są istotne.",
        },
        {
          title: "Połącz księgę główną",
          desc: "Wskazuj podmiot we wpisach, które opłacił lub z których otrzymał płatność.",
        },
      ],
      steps: [
        {
          title: "Dodaj podmiot",
          desc: "Wybierz typ podmiotu i dodaj nazwę oraz dane kontaktowe.",
        },
        {
          title: "Sklasyfikuj relację",
          desc: "Oznacz go jako klienta, dostawcę, pracownika, wykonawcę, partnera lub inny typ.",
        },
        {
          title: "Połącz wpisy",
          desc: "Wskazuj podmiot we wpisach przepływów pieniężnych, których dotyczy.",
        },
      ],
      capabilitiesTitle: "Dane kontrahentów, które pozostają użyteczne",
      capabilitiesSubtitle: "Jeden rekord dla osób i organizacji stojących za przepływami pieniężnymi, zamiast listy kontaktów w osobnym narzędziu.",
      capabilities: [
        {
          title: "Rekordy podmiotów",
          desc: "Klienci, dostawcy, pracownicy, wykonawcy, partnerzy i inne.",
        },
        {
          title: "Dane kontaktowe",
          desc: "E-mail, telefon i adres w jednym rekordzie.",
        },
        {
          title: "Pola podatkowe i bankowe",
          desc: "Opcjonalne identyfikatory podatkowe i dane bankowe.",
        },
        {
          title: "Powiązania wpisów",
          desc: "Wskazuj kontrahenta we wpisach przepływów pieniężnych.",
        },
      ],
      finalTitle: "Utrzymuj kontrahentów w jednym miejscu",
      finalSubtitle: "Zacznij bezpłatnie i dodaj pierwszy podmiot.",
    },
  },
  inventory: {
    name: "Zapasy",
    preview: {
      label: "Zapasy",
      metric: { label: "Pozycje", value: "1 284", note: "42 kategorie" },
      secondary: { label: "Jednostki na stanie", value: "8 960" },
      chartLabel: "Pozycje według typu jednostki",
      rows: [
        { label: "SKU-1042", value: "240 szt.", status: "positive" },
        { label: "SKU-2210", value: "18 szt.", status: "warning" },
        { label: "SKU-3180", value: "96 szt.", status: "positive" },
      ],
    },
    copy: {
      title: "Dane podstawowe pozycji dla towarów i usług",
      subtitle:
        "Utrzymuj SKU, jednostki miary i ilość na stanie na jednej liście, a następnie przypisuj pozycje do wpisów przepływów pieniężnych, które je przemieszczają.",
      bullets: [
        "SKU i nazwa pozycji",
        "Jednostka miary",
        "Ilość na stanie",
        "Powiązania z wpisami przepływów pieniężnych",
      ],
      outcomes: [
        {
          title: "Jedna lista pozycji",
          desc: "Przechowuj każde SKU raz, z nazwą i opisem.",
        },
        {
          title: "Jednostki i ilości",
          desc: "Śledź jednostkę miary i ilość na stanie.",
        },
        {
          title: "Kontrola statusu",
          desc: "Dezaktywuj pozycje bez usuwania ich historii.",
        },
        {
          title: "Połącz z przepływami pieniężnymi",
          desc: "Przypisuj pozycje magazynowe do wpisów, które przemieszczają zapasy.",
        },
      ],
      steps: [
        {
          title: "Utwórz pozycję",
          desc: "Dodaj SKU, nazwę i opis.",
        },
        {
          title: "Ustaw jednostkę i ilość",
          desc: "Wybierz jednostkę miary i zarejestruj ilość na stanie.",
        },
        {
          title: "Przypisz do wpisów",
          desc: "Wskazuj pozycję we wpisach przepływów pieniężnych, które ją przemieszczają.",
        },
      ],
      capabilitiesTitle: "Czyste dane pozycji połączone z finansami",
      capabilitiesSubtitle: "Proste dane podstawowe pozycji, które pozostają powiązane z przepływami pieniężnymi, na które wpływają.",
      capabilities: [
        {
          title: "Rekordy pozycji",
          desc: "SKU, nazwa, opis i status aktywności.",
        },
        {
          title: "Jednostki miary",
          desc: "Dowolny tekst jednostek, np. sztuki, kilogramy lub godziny.",
        },
        {
          title: "Ilość na stanie",
          desc: "Utrzymuj bieżącą ilość przy każdej pozycji.",
        },
        {
          title: "Powiązania wpisów",
          desc: "Wskazuj pozycje we wpisach przepływów pieniężnych.",
        },
      ],
      finalTitle: "Utrzymuj czyste dane pozycji",
      finalSubtitle: "Zacznij bezpłatnie i dodaj pierwsze SKU.",
    },
  },
};

export default pl;

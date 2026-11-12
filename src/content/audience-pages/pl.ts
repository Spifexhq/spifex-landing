import type { AudiencePageKind, AudiencePageContent } from "../audience-pages";

const pl: Partial<Record<AudiencePageKind, AudiencePageContent>> = {
  personal: {
    metaTitle: "Oprogramowanie do finansów osobistych do planowania i kontroli",
    metaDescription:
      "Spifex Personal łączy transakcje, konta bankowe, budżety, cele i raportowanie w jednej przestrzeni roboczej do finansów osobistych. Bezpłatny start.",
    eyebrow: "Spifex Personal",
    title: "Finanse prywatne z przejrzystością systemu operacyjnego",
    description:
      "Planowanie tego, co nadchodzi, śledzenie tego, co już się wydarzyło, i pełny obraz sytuacji na wszystkich kontach, w kategoriach, budżetach i celach — bez sklejania danych z arkuszy kalkulacyjnych.",
    primaryLabel: "Bezpłatny start z Personal",
    proof: "Dostępny plan bezpłatny. Karta kredytowa nie jest wymagana.",
    plans: ["Personal Free", "Personal Starter", "Personal Pro"],
    outcomes: [
      {
        title: "Wszystkie konta w jednym miejscu",
        description:
          "Dodawanie prywatnych kont bankowych, śledzenie sald i rozdzielenie przelewów od sum przychodów i wydatków.",
      },
      {
        title: "Planowanie z budżetami i celami",
        description:
          "Tworzenie budżetów i celów, przegląd postępów i korygowanie planu wraz ze zmianami w codziennym życiu.",
      },
      {
        title: "Zrozumienie historii transakcji",
        description:
          "Filtrowanie transakcji według daty, kategorii, konta, kierunku i statusu rozliczenia.",
      },
      {
        title: "Uzgadnianie płatności częściowych",
        description:
          "Rejestrowanie pełnych i częściowych rozliczeń na kontach i utrzymywanie prawidłowej kwoty pozostałej do zapłaty.",
      },
      {
        title: "Raportowanie bez odtwarzania danych",
        description:
          "Przegląd pozycji otwartych i rozliczonych, kategorii i wskaźników finansowych w tej samej przestrzeni roboczej.",
      },
      {
        title: "Pytania do asystenta AI",
        description:
          "Połączenie ChatGPT lub Claude z dostępem tylko do odczytu w celu podsumowania transakcji i kategorii.",
      },
    ],
    workflow: [
      {
        title: "Utworzenie prywatnej przestrzeni roboczej",
        description: "Wybór kraju i waluty oraz start na planie Personal Free.",
      },
      {
        title: "Dodanie kont i kategorii",
        description:
          "Wprowadzenie kont i kategorii, które są już używane, a następnie dostosowywanie ich w miarę potrzeb.",
      },
      {
        title: "Planowanie, rozliczanie i przegląd",
        description:
          "Wykorzystanie budżetów, celów, rozliczeń i raportów do utrzymania aktualnego pełnego obrazu.",
      },
    ],
    faq: [
      {
        question: "Co obejmuje plan Personal Free?",
        answer:
          "Plan Personal Free obejmuje prywatną przestrzeń roboczą, 250 transakcji miesięcznie, dwa konta bankowe, 25 kategorii, trzy budżety, trzy cele i dwa zapisane widoki.",
      },
      {
        question: "Kiedy przejść na Personal Starter lub Pro?",
        answer:
          "Na wyższy plan warto przejść, gdy potrzebne jest więcej transakcji miesięcznie, więcej kont bankowych, większe biblioteki kategorii i budżetów albo więcej zapisanych widoków i załączników.",
      },
      {
        question: "Czy można korzystać jednocześnie z przestrzeni Personal i Business?",
        answer:
          "Tak. Jedno konto Spifex może posiadać wiele przestrzeni roboczych w obu kategoriach produktów i przełączać się między nimi.",
      },
      {
        question: "Czy asystent AI zmienia dane?",
        answer:
          "Nie. Połączenia AI działają tylko do odczytu i żądają wyłącznie zakresu cashflow:read.",
      },
    ],
    otherLabel: "Poznaj Spifex Business",
    labels: {
      comparePlans: "Porównaj plany",
      outcomesEyebrow: "Co można zrobić",
      outcomesTitle: "Przejrzysty model operacyjny zarządzania pieniędzmi",
      outcomesDescription:
        "Każdy z poniższych efektów opiera się na wdrożonym procesie Spifex, a nie na planach na przyszłość.",
      howEyebrow: "Jak to działa",
      howTitle: "Mały początek. Struktura dodawana wraz z potrzebami.",
      questionsEyebrow: "Pytania",
      questionsTitle: "Przed wyborem planu",
      finalTitle:
        "Bezpłatny start. Rozszerzenie tylko wtedy, gdy operacje wymagają więcej miejsca.",
    },
  },

  business: {
    metaTitle: "Oprogramowanie do firmowych operacji finansowych",
    metaDescription:
      "Spifex Business łączy przepływy pieniężne, bankowość, rozliczenia, strukturę księgi głównej, projekty, działy i raportowanie z kontrolami opartymi na rolach. Bezpłatny start.",
    eyebrow: "Spifex Business",
    title: "Jedna warstwa operacyjna dla firmowych operacji finansowych",
    description:
      "Planowanie przepływów pieniężnych, integracja bankowości, uzgadnianie rozliczeń, porządkowanie księgi głównej i raportowanie w podziale na projekty lub działy — z rolami i kontrolami, których potrzebuje zespół finansowy.",
    primaryLabel: "Bezpłatny start z Business",
    proof: "Dostępny plan bezpłatny. Karta kredytowa nie jest wymagana.",
    plans: ["Business Free", "Business Starter", "Business Pro"],
    outcomes: [
      {
        title: "Planowanie i realizacja przepływów pieniężnych",
        description:
          "Tworzenie planowanych wpisów, rozliczanie ich na kontach bankowych i utrzymywanie aktualnych sald otwartych.",
      },
      {
        title: "Bankowość i wyciągi w jednym miejscu",
        description:
          "Dodawanie kont bankowych, import wyciągów i uzgadnianie ruchów na podstawie rzeczywistych dokumentów.",
      },
      {
        title: "Przypisanie kosztów i odpowiedzialności",
        description:
          "Wykorzystanie projektów, działów i podmiotów do wyjaśnienia, gdzie środki są planowane i wydawane.",
      },
      {
        title: "Uporządkowana księga główna",
        description:
          "Utrzymywanie kont księgi głównej i struktury księgowań, aby raportowanie pozostało spójne.",
      },
      {
        title: "Kontrola dostępu według ról",
        description:
          "Role właściciela, administratora i członka z uprawnieniami w zakresie przestrzeni roboczej i kontrolami cyklu życia.",
      },
      {
        title: "Raportowanie z widocznością KPI",
        description:
          "Przegląd wskaźników przepływów pieniężnych, rozliczeń i operacyjnych na podstawie tych samych filtrowanych danych.",
      },
    ],
    workflow: [
      {
        title: "Utworzenie firmowej przestrzeni roboczej",
        description:
          "Ustawienie kraju i waluty przestrzeni roboczej oraz start na planie Business Free.",
      },
      {
        title: "Dodanie struktury operacyjnej",
        description:
          "Dodawanie kont, kategorii, projektów, działów, członków i kont księgi głównej.",
      },
      {
        title: "Operacje z kontrolami",
        description:
          "Planowanie, rozliczanie, uzgadnianie i raportowanie z kontrolami dostępu opartymi na rolach.",
      },
    ],
    faq: [
      {
        question: "Co obejmuje plan Business Free?",
        answer:
          "Plan Business Free obejmuje jedną przestrzeń roboczą, 1 000 wpisów przepływów pieniężnych miesięcznie, dwa konta bankowe, jednego członka, dwa projekty, dziesięć kont księgi głównej i dwa importy wyciągów miesięcznie.",
      },
      {
        question: "Co zmienia się w planach Starter i Pro?",
        answer:
          "Plan Starter podnosi limity wpisów, kont bankowych, członków, projektów, księgi głównej i wyciągów. Plan Pro znosi podstawowe limity procesów i pozwala na posiadanie do sześciu przestrzeni roboczych.",
      },
      {
        question: "Czy Spifex zastępuje oprogramowanie księgowe?",
        answer:
          "Spifex to warstwa operacyjna dla przepływów pieniężnych, widoczności bankowości, rozliczeń, nadzoru i raportowania. Uzupełnia księgowość ustawową, a nie ją zastępuje.",
      },
      {
        question: "Czy można połączyć ChatGPT lub Claude?",
        answer:
          "Tak. Firmowe przestrzenie robocze obsługują połączenia AI tylko do odczytu z OAuth i zakresem cashflow:read.",
      },
    ],
    otherLabel: "Poznaj Spifex Personal",
    labels: {
      comparePlans: "Porównaj plany",
      outcomesEyebrow: "Co można zrobić",
      outcomesTitle: "Przejrzysty model operacyjny zarządzania pieniędzmi",
      outcomesDescription:
        "Każdy z poniższych efektów opiera się na wdrożonym procesie Spifex, a nie na planach na przyszłość.",
      howEyebrow: "Jak to działa",
      howTitle: "Mały początek. Struktura dodawana wraz z potrzebami.",
      questionsEyebrow: "Pytania",
      questionsTitle: "Przed wyborem planu",
      finalTitle:
        "Bezpłatny start. Rozszerzenie tylko wtedy, gdy operacje wymagają więcej miejsca.",
    },
  },
};

export default pl;

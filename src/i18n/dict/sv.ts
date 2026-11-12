const sv = {
  common: {
    learnMore: "Läs mer",
    viewPricing: "Se priser",
  },

  nav: {
    products: "Produkter",
    solutions: "Lösningar",
    customers: "Kunder",
    pricing: "Priser",
    docs: "Dokumentation",
    personal: "Privat",
    business: "Företag",
    legal: "Juridik",
    blog: "Blogg",
    signin: "Logga in",
    signup: "Skapa konto",
    startFree: "Starta gratis",
    home: "Hem",
    toggleMenu: "Växla meny",
    closeMenu: "Stäng menyn",
    menu: "Meny",
  },

  megaMenu: {
    products: "Produkter",
    platform: "Plattform",
    allSolutions: "Alla lösningar",
    personalDesc: "Konton, budgetar och mål för din privatekonomi.",
    businessDesc: "Kassaflöde, bank och kontroll för team.",
    startTitle: "Börja med den arbetsyta du behöver",
    startCta: "Starta gratis",
    comparePlans: "Jämför planer",
    solutions: "Se hur alla moduler hänger ihop.",
    pricing: "Jämför Free, Starter och Pro.",
    ai: "Anslut ChatGPT eller Claude med skrivskyddad åtkomst.",
    security: "Roller, livscykeltillstånd och anslutningsaktivitet.",
    aiTitle: "AI-anslutningar",
    securityTitle: "Roller och aktivitet",
    viewAll: "Se alla produkter",
  },

  productPages: {
    startFree: "Starta gratis",
    seePricing: "Se priser",
    heroNote: "Free-plan · Inget kort krävs · Privat och företag",
    moduleLabel: "Företagsmodul",
    outcomesEyebrow: "Vad som förändras",
    outcomesTitle: "Arbetet som modulen tar bort från din lista",
    outcomesSubtitle: "En tydligare operativ modell, med samma arbetsyta och data.",
    howEyebrow: "Så fungerar det",
    howTitle: "Från uppsättning till första användbara vyn",
    howSubtitle: "En kort införandeväg som inte kräver ett separat projekt.",
    capabilitiesEyebrow: "Funktioner",
    plansEyebrow: "Planer",
    plansTitle: "Starta gratis. Uppgradera när arbetet växer.",
    plansSubtitle:
      "Alla produkter körs i samma Spifex-arbetsyta. Byt till Starter eller Pro när du behöver mer kapacitet.",
    comparePlans: "Jämför planer",
    noCard: "Inget kort krävs",
    perMonth: "per månad",
    relatedEyebrow: "Fortsätt utforska",
    relatedTitle: "En arbetsyta, mer kontroll",
    relatedDesc: "Lägg till de moduler som kopplar till det här arbetsflödet.",
  },

  legal: {
    title: "Juridik",
    toc: "Innehåll",
  },

  blog: {
    indexTitle: "Blogg",
    indexSubtitle: "Insikter om finansiell drift, kassaflöde, styrning och automatisering.",
    searchPlaceholder: "Sök",
    clearSearch: "Rensa sökning",
    filter: "Filter",
    topic: "Ämne",
    filterAll: "Alla ämnen",
    applyFilter: "Filtrera",
    activeFilter: "Aktivt filter",
    noActiveFilter: "Inget aktivt filter",
    clearFilter: "Rensa filter",
    noResults: "Inga inlägg matchar aktuell sökning eller filtrering.",
    breadcrumbBlog: "Blogg",
    breadcrumbArticles: "Artiklar",
    seriesDefault: "Spifex Blogg",
  },

  products: {
    groups: {
      products: "Produkter",
      workflows: "Arbetsflöden",
      platform: "Plattform",
    },
    items: {
      cashflow: {
        title: "Kassaflöde",
        desc: "Planera in- och utflöden, simulera scenarier och följ genomförandet i realtid.",
      },
      banking: {
        title: "Bank och betalningar",
        desc: "Samla bankkonton, betala leverantörer och hantera överföringar med inbyggda kontroller.",
      },
      spend: {
        title: "Utgifter och avräkningar",
        desc: "Standardisera godkännanden, avräkningar och intern förflyttning av medel.",
      },
      ledger: {
        title: "Huvudbok",
        desc: "Kontoplan, klassificering och revisionsredo finansiell struktur.",
      },
      projects: {
        title: "Projekt",
        desc: "Koppla kostnader och intäkter till initiativ med full spårbarhet och KPI:er.",
      },
      departments: {
        title: "Avdelningar",
        desc: "Budgetansvar, ansvarstagande och operativ styrning per team.",
      },
      crm: {
        title: "CRM",
        desc: "Koppla pipelinesignaler till kassaflödesöverblick och planering.",
      },
      inventory: {
        title: "Lager",
        desc: "Koppla operativa insatser till finansiella utfall utan separata silos.",
      },
      reconciliation: {
        title: "Avstämning",
        desc: "Slut cirkeln från planerat till faktiskt med strukturerad matchning.",
      },
      automation: {
        title: "Bokföringsautomatisering",
        desc: "Minska manuellt arbete och håll finansdata konsekvent mellan moduler.",
      },
      kpis: {
        title: "Rapportering och KPI",
        desc: "Instrumentpaneler och indikatorer som håller teamen fokuserade på det som spelar roll.",
      },
      integrations: {
        title: "Integrationer",
        desc: "Anslut Spifex till dina verktyg och standardisera datastommen.",
      },
      intelligence: {
        title: "Insikter",
        desc: "Användbara insikter så att operatörer tidigt ser risker och möjligheter.",
      },
      governance: {
        title: "Styrning",
        desc: "Rollbaserad åtkomst, granskningsspår och organisationsavgränsad struktur.",
      },
      global: {
        title: "Globalt redo",
        desc: "Verksamhet med flera intäktsströmmar, byggd för skala och komplexitet.",
      },
    },
    footer: "En arbetsyta för kassaflöde, bank, rapportering och drift.",
    explore: "Utforska plattformen",
  },

  pricing: {
    title: "Priser",
    subtitle:
      "Välj den plan som passar din fas. Priser visas i din regionala faktureringsvaluta när den stöds.",
    note: "Visad valuta bestäms utifrån besökarens plats när det är möjligt. Slutlig fakturering och skatt kan variera i kassan.",
    mostPopular: "Populärast",
    perMonthFrom: "{price} / månad",
  },

  pricingTiers: {
    free: {
      name: "Free",
      priceLabel: "Gratis",
      description:
        "För privatpersoner och mycket små team som vill komma igång med strukturerad finansiell drift.",
      highlights: {
        0: "Åtkomst till kärnarbetsytan",
        1: "Grundläggande kassaflödesöverblick",
        2: "Standardflöde för onboarding",
        3: "Börja utan betalningsmetod",
      },
      ctaLabel: "Kom igång",
    },
    starter: {
      name: "Starter",
      description:
        "För växande team som behöver mer struktur, operativ kontroll och återkommande arbetsflöden.",
      highlights: {
        0: "Planering och genomförande av kassaflöde",
        1: "Banköverblick och strukturerad drift",
        2: "Rollbaserad åtkomst och operativt ansvar",
        3: "Snabbare uppstart med importer och mallar",
      },
      ctaLabel: "Välj Starter",
    },
    pro: {
      name: "Pro",
      description:
        "För finansteam som behöver starkare styrning, automatisering och skalbarhet.",
      highlights: {
        0: "Avancerade operativa arbetsflöden",
        1: "Styrning, kontroller och granskningsbarhet",
        2: "Projekt, avdelningar och rikare rapportering",
        3: "Byggt för mer operativ komplexitet",
      },
      ctaLabel: "Välj Pro",
    },
  },

  homeV2: {
    hero: {
      eyebrow: "Privat + Företag · Ett system",
      title: "Pengarna, i fokus",
      line1: "Pengarna,",
      line2: "i fokus",
      subtitle:
        "En levande bild av varje konto, plan och avräkning – för din privatekonomi och ditt företag.",
      primary: "Starta gratis",
      secondary: "Utforska produkten",
      emailPlaceholder: "Ange din jobbmejl",
      emailCta: "Starta gratis",
      disclaimer: "Free-plan · Inget kort krävs · Privat och företag",
      proof: "Byggt för verksamhet med flera intäktsströmmar, många leverantörer och projektbaserat arbete.",
      visualAlt:
        "Förhandsvisning av Spifex arbetsyta med kassaposition, graf över planerat jämfört med avräknat, avräkningsstatus och en skrivskyddad AI-sammanfattning av kassaflödet.",
    },
    audiences: {
      title: "En plattform för privat och företags finansiella drift",
      items: {
        multiEntity: "Verksamhet med flera bolag",
        financeOps: "Finansiell drift",
        projectLed: "Projektstyrda företag",
        vendorHeavy: "Team med många leverantörer",
      },
    },
    personal: {
      eyebrow: "Spifex Privat",
      title: "Din privatekonomi, med samma tydlighet som ett affärssystem",
      subtitle:
        "Samla konton, kategorier, budgetar och mål i en arbetsyta och se hur dagens utgifter påverkar det du planerat härnäst.",
      bullets: {
        accounts: "Håll privata bankkonton och saldon i en vy.",
        budgets: "Planera budgetar och mål och följ sedan utvecklingen mot verkliga transaktioner.",
        reporting:
          "Granska kategorier, utestående avräkningar och indikatorer utan att bygga ett nytt kalkylark.",
        ai: "Anslut ChatGPT eller Claude med skrivskyddad åtkomst för att sammanfatta ditt kassaflöde.",
      },
      plans: "Privat Free · Privat Starter · Privat Pro",
      cta: "Utforska Spifex Privat",
      start: "Starta Privat gratis",
      note: "Free-plan finns. Inget kreditkort krävs.",
    },
    outcomes: {
      eyebrow: "Varför Spifex",
      title: "Byt ut frånkopplade kalkylark och verktyg mot ett gemensamt pengaflöde",
      subtitle:
        "Planera vad som ska hända, genomför med kontroller, stäm av vad som hände och rapportera utan att bygga om samma data på fyra ställen.",
      items: {
        visibility: {
          title: "Se hela pengabilden",
          desc: "Kassaflödesplaner, avräkningar, banksaldon och rapportering finns i en arbetsyta i stället för i separata filer.",
        },
        control: {
          title: "Styr genomförandet",
          desc: "Rollbaserad åtkomst, avräkningar och överföringar följer en enhetlig operativ modell avgränsad till arbetsytan.",
        },
        traceability: {
          title: "Gör varje förflyttning spårbar",
          desc: "Koppla planerade poster till avräkningar, huvudboksstruktur och ansvar för avdelning eller projekt.",
        },
        decisions: {
          title: "Besluta med aktuella siffror",
          desc: "Använd KPI:er och filtrerade vyer för att förstå utestående, avräknade och prognostiserade positioner utan manuell avstämning.",
        },
      },
    },
    modules: {
      eyebrow: "Plattform",
      title: "En plattform. Alla pengaflöden.",
      subtitle:
        "Använd de moduler du behöver idag och lägg till struktur när verksamheten växer. Alla moduler delar samma arbetsyta, valuta och åtkomstmodell.",
      cta: "Utforska plattformen",
    },
    ai: {
      eyebrow: "AI-anslutningar",
      title: "Fråga ChatGPT eller Claude om ditt kassaflöde",
      subtitle:
        "Anslut Spifex via en skrivskyddad MCP-anslutning. Din assistent kan lista arbetsytor, granska transaktioner, sammanfatta summor och mappa kategorier – men kan inte skapa, redigera, avräkna eller överföra något.",
      bullets: {
        readOnly: "Skrivskyddat omfång: cashflow:read",
        oauth: "OAuth 2.1 per användare med PKCE",
        revoke: "Återkalla åtkomst direkt i Inställningar",
        privacy: "Anteckningar, observationer och bilagor ingår inte i svaren",
      },
      cta: "Se hur AI-anslutningar fungerar",
      note: "Tillgängligt under Inställningar → AI-anslutningar i arbetsytor för företag och privat.",
    },
    workflow: {
      eyebrow: "Så fungerar det",
      title: "Börja med din data. Lägg till kontroller i takt med att du växer.",
      subtitle: "Inget långt införandeprojekt krävs för att få den första användbara vyn.",
      steps: {
        create: {
          title: "Skapa din arbetsyta",
          desc: "Välj land, valuta och typ av arbetsyta. Börja på Free-planen utan kort.",
        },
        structure: {
          title: "Strukturera det viktigaste",
          desc: "Lägg till bankkonton, kategorier, projekt eller avdelningar. Importera data där du redan har den.",
        },
        operate: {
          title: "Driv och granska",
          desc: "Planera kassaflödet, avräkna poster, stäm av förflyttningar och granska KPI:er från samma arbetsyta.",
        },
      },
    },
    pricing: {
      eyebrow: "Priser",
      title: "Starta gratis. Uppgradera när verksamheten växer.",
      subtitle:
        "Alla planer innehåller kärnarbetsytan. Betalda planer ger mer kapacitet och större utrymme för växande team.",
      note: "Regionala priser visas på prissidan. Slutlig fakturering och skatt kan variera i kassan.",
      cta: "Jämför planer",
    },
    faq: {
      eyebrow: "Frågor",
      title: "Det team frågar innan de börjar",
      items: {
        free: {
          q: "Är Free-planen verkligen gratis?",
          a: "Ja. Du kan skapa en arbetsyta och börja utan betalningsmetod. Betalda planer finns när du behöver mer kapacitet.",
        },
        replace: {
          q: "Ersätter Spifex mitt bokföringsprogram?",
          a: "Spifex är driftlagret för kassaflöde, banköverblick, avräkningar, styrning och rapportering. Det kompletterar din bokföring i stället för att ersätta den lagstadgade redovisningen.",
        },
        ai: {
          q: "Kan AI-assistenten ändra min data?",
          a: "Nej. Anslutningen i v1 är skrivskyddad och begär endast omfånget cashflow:read. Den kan inte skapa, redigera, radera, avräkna eller överföra något.",
        },
        security: {
          q: "Hur isoleras data mellan arbetsytor?",
          a: "Varje fråga avgränsas till en arbetsyta som den autentiserade användaren äger eller tillhör. Roller, livscykelregler och planrättigheter tillämpas på servern.",
        },
        migrate: {
          q: "Kan jag importera befintlig data?",
          a: "Spifex stöder strukturerade importer av bankutdrag och vanlig finansiell data. Du kan också börja med en liten arbetsyta och bygga struktur över tid.",
        },
      },
    },
    finalCta: {
      title: "Samla kassaflöde, bank och rapportering i ett gemensamt driftlager.",
      subtitle:
        "Starta gratis, bjud in teamet när du är redo och behåll de kontroller din finansfunktion behöver.",
      primary: "Starta gratis",
      secondary: "Prata med teamet",
    },
  },

  pricingV2: {
    eyebrow: "Planer",
    title: "Välj den plan som passar hur du hanterar pengar",
    subtitle:
      "Privat och Företag startar båda gratis och går sedan vidare till Starter eller Pro för mer kapacitet. Varje gräns som visas här är den gräns som tillämpas i din arbetsyta.",
    billedMonthly: "Faktureras månadsvis",
    noCard: "Inget kort krävs",
    personal: "Privat",
    business: "Företag",
    personalDesc:
      "Organisera privat kassaflöde, konton, kategorier, budgetar och mål med samma operativa disciplin som ett företag.",
    businessDesc:
      "Driv företagets kassaflöde, bank, avräkningar, huvudboksstruktur, projekt och rapportering med rollbaserade kontroller.",
    startFree: "Starta gratis",
    choosePlan: "Välj {plan}",
    recommended: "Rekommenderad",
    compareTitle: "Jämför planer",
    compareSubtitle: "Samma kärnarbetsyta, med mer kapacitet när verksamheten växer.",
    rows: {
      workspace: "Egna arbetsytor",
      cashflow: "Kassaflödesplanering och genomförande",
      banking: "Banköverblick och konton",
      settlements: "Avräkningar och överföringar",
      reporting: "KPI:er och rapportering",
      governance: "Roller och styrning",
      ai: "Skrivskyddade AI-anslutningar",
    },
    included: "Ingår",
    notIncluded: "Ingår inte",
    faqTitle: "Frågor om priser",
    faq: {
      card: {
        q: "Behöver jag ett kreditkort för Free-planen?",
        a: "Nej. Free-planen startar utan betalningsmetod.",
      },
      change: {
        q: "Kan jag byta plan senare?",
        a: "Ja. Du kan uppgradera från arbetsytans faktureringsinställningar när verksamheten behöver mer kapacitet.",
      },
      currency: {
        q: "Varför varierar priserna mellan länder?",
        a: "Spifex fakturerar i regionala valutor som stöds. Prissidan använder ditt identifierade land och faller tillbaka på en standard när land inte kan fastställas.",
      },
      taxes: {
        q: "Ingår skatt?",
        a: "Slutlig fakturering och tillämplig skatt visas i den säkra kassan.",
      },
    },
    trustNote: "Inga påhittade gränser eller dolda tillägg. Planernas innehåll visas före kassan.",
  },

  pricingCatalog: {
    feature: "Funktion",
    unlimited: "Obegränsat",
    perMonthValue: "{value} / månad",
    tiers: {
      free: "Free",
      starter: "Starter",
      pro: "Pro",
    },
    rows: {
      workspaces: "Egna arbetsytor",
      transactions: "Transaktioner",
      accounts: "Bankkonton",
      categories: "Kategorier",
      budgets: "Budgetar",
      goals: "Mål",
      views: "Sparade vyer",
      attachments: "Bilagor",
      entries: "Kassaflödesposter",
      banks: "Bankkonton",
      members: "Teammedlemmar",
      projects: "Projekt",
      ledger: "Huvudbokskonton",
      statements: "Kontoutdragsimport",
    },
    personal: {
      free: {
        name: "Privat Free",
        description: "Organisera privat kassaflöde och konton utan betalningsmetod.",
        highlights: {
          0: "250 transaktioner per månad",
          1: "2 bankkonton",
          2: "25 kategorier och 3 budgetar",
          3: "3 mål och 2 sparade vyer",
        },
      },
      starter: {
        name: "Privat Starter",
        description: "Mer utrymme för daglig privatekonomi och återkommande planering.",
        highlights: {
          0: "5 000 transaktioner per månad",
          1: "10 bankkonton",
          2: "100 kategorier och 25 budgetar",
          3: "25 mål och 25 sparade vyer",
        },
      },
      pro: {
        name: "Privat Pro",
        description: "Planering i hög volym för en komplex privatekonomi.",
        highlights: {
          0: "50 000 transaktioner per månad",
          1: "50 bankkonton",
          2: "500 kategorier och 250 budgetar",
          3: "250 mål och 200 sparade vyer",
        },
      },
    },
    business: {
      free: {
        name: "Företag Free",
        description: "Starta en strukturerad företagsarbetsyta utan betalningsmetod.",
        highlights: {
          0: "1 000 poster per månad",
          1: "2 bankkonton och 1 medlem",
          2: "2 projekt och 10 huvudbokskonton",
          3: "2 kontoutdragsimport per månad",
        },
      },
      starter: {
        name: "Företag Starter",
        description:
          "För växande team som lägger till struktur, kontroller och återkommande drift.",
        highlights: {
          0: "10 000 poster per månad",
          1: "10 bankkonton och 5 medlemmar",
          2: "50 projekt och 100 huvudbokskonton",
          3: "20 kontoutdragsimport per månad",
        },
      },
      pro: {
        name: "Företag Pro",
        description: "För finansteam som arbetar i skala med omätta kärnflöden.",
        highlights: {
          0: "Obegränsade kassaflödesposter",
          1: "Obegränsade bankkonton, upp till 50 medlemmar",
          2: "Obegränsade projekt, huvudbokskonton och utdrag",
          3: "Upp till 6 egna arbetsytor",
        },
      },
    },
  },

  docsPage: {
    eyebrow: "Dokumentation",
    title: "Produktdokumentation för Spifex",
    subtitle:
      "Praktiska guider för att sätta upp din arbetsyta, köra kassaflödesarbetsflöden och ansluta AI-assistenter.",
    searchPlaceholder: "Sök guider, arbetsflöden och inställningar",
    searchLabel: "Sök i dokumentationen",
    noResults: "Inga guider matchar sökningen.",
    all: "Alla guider",
    readGuide: "Läs guiden",
    related: "Relaterade guider",
    back: "All dokumentation",
    updated: "Senast uppdaterad",
    reviewNote:
      "Operativ dokumentation. Juridiska sidor är separata och kräver professionell granskning före lansering.",
    categories: {
      gettingStarted: "Kom igång",
      cashflow: "Kassaflöde",
      banking: "Bank och avräkningar",
      reporting: "Rapportering",
      ai: "AI-anslutningar",
      security: "Säkerhet och fakturering",
    },
  },

  signup: {
    workspaceType: "Typ av arbetsyta",
    business: "Företag",
    personal: "Privat",
    personalDesc: "Privat arbetsyta för dina egna konton, budgetar och mål.",
    businessDesc: "Företagsarbetsyta för teamets kassaflöde, bank, avräkningar och rapportering.",
    fullName: "Fullständigt namn",
    email: "E-post",
    password: "Lösenord",
    confirmPassword: "Bekräfta lösenord",
    language: "Språk",
    country: "Land",
    currency: "Valuta",
    currencyFixed: "Styrs av ditt faktureringsland och kan inte ändras.",
    acceptPrivacy: "Jag godkänner integritetspolicyn.",
    acceptTerms: "Jag godkänner användarvillkoren.",
    acceptMarketing: "Jag samtycker till att ta emot marknadsföring.",
    verifyTitle: "Verifiera ditt konto",
    redirectingTitle: "Omdirigerar till säker kassa",
    createAccountPaid: "Skapa ditt konto för att fortsätta",
    createAccount: "Skapa ditt konto",
    planSelected:
      "{category}-plan vald: {plan}. Du börjar på Free-arbetsytan och fortsätter till säker kassa efter verifieringen.",
    startFree: "Starta med en gratis {category}-arbetsyta.",
    codeSentTo: "Vi skickade en sexsiffrig kod till {email}",
    preparingCheckout: "Förbereder din säkra kassa…",
    verificationCode: "Verifieringskod",
    codePlaceholder: "Ange sexsiffrig kod",
    back: "Tillbaka",
    resendIn: "Skicka igen ({seconds} s)",
    resendUnavailable: "Går inte att skicka igen",
    resendCode: "Skicka koden igen",
    verifyCode: "Verifiera kod",
    sendCode: "Skicka verifieringskod",
    continue: "Fortsätt",
    fillAllFields: "Fyll i alla fält.",
    invalidEmail: "Ogiltig e-postadress.",
    passwordsMismatch: "Lösenorden matchar inte.",
    passwordMin: "Lösenordet måste innehålla minst 8 tecken.",
    emailInUse: "Den här e-postadressen används redan.",
    couldNotValidateEmail: "Kunde inte validera e-postadressen.",
    mustAccept: "Du måste godkänna de obligatoriska samtyckena.",
    verificationSent: "Verifieringskoden har skickats.",
    couldNotStart: "Kunde inte starta registreringen.",
    enterValidCode: "Ange en giltig sexsiffrig kod.",
    missingChallenge: "Verifieringsutmaningen saknas.",
    missingAccess: "Åtkomsttoken saknas efter verifieringen.",
    invalidCode: "Ogiltig eller utgången verifieringskod.",
    codeSentAgain: "Koden skickades igen.",
    couldNotResendCode: "Kunde inte skicka koden igen.",
    couldNotRedirect: "Kunde inte omdirigera till kassan.",
  },

  signupSuccess: {
    title: "Din arbetsyta är klar",
    subtitle:
      "Du kan fortsätta till din instrumentpanel eller läsa installationsguiderna medan ditt konto förbereds.",
    dashboard: "Öppna instrumentpanelen",
    docs: "Läs installationsguiden",
    nextTitle: "Rekommenderade nästa steg",
    nextItems: {
      workspace: "Välj din aktiva arbetsyta och valuta.",
      banks: "Lägg till ett bankkonto för att koppla saldon och avräkningar.",
      categories: "Granska kategorierna så att rapporteringen förblir konsekvent.",
      ai: "Anslut ChatGPT eller Claude med skrivskyddad åtkomst om du vill ha AI-stödd analys.",
    },
  },

  cookiesBanner: {
    title: "Kakor och mätning",
    body: "Vi använder nödvändiga kakor för att driva Spifex. Med ditt samtycke använder vi även marknadsföringskakor för att mäta kampanjer.",
    accept: "Acceptera alla",
    reject: "Endast nödvändiga",
    policy: "Kakpolicy",
  },

  trust: {
    noCard: "Free-plan, inget kort krävs",
    isolation: "Tenantisolerade arbetsytor",
    ai: "OAuth 2.1, skrivskyddad AI-åtkomst",
    multiStream: "Byggt för verksamhet med flera intäktsströmmar",
  },

  languageSwitcher: {
    label: "Språk",
    currency: "Valuta",
    currencyFixed: "styrs av din region",
  },

  meta: {
    siteTitle: "Spifex – finansiell drift för privat och företag",
    siteDescription:
      "Spifex samlar privat och företags kassaflöde, bank, avräkningar, rapportering och skrivskyddade AI-anslutningar i en gemensam plattform.",
  },

  footer: {
    rights: "Alla rättigheter förbehållna.",
    tagline: "Finansiell drift för kassaflöde, bank, avräkningar, rapportering och styrning.",
    product: "Produkt",
    resources: "Resurser",
    company: "Företag",
    aiConnections: "AI-anslutningar",
    privacy: "Integritet",
    terms: "Villkor",
    cookies: "Kakor",
    notBank: "Spifex är programvara för finansiell drift, inte en bank.",
  },

  customersPage: {
    hero: {
      title: "Se vad Spifex kan göra för dig.",
      subtitle: "Skapa ett konto på några minuter och börja arbeta med fart och kontroll.",
      disclaimer:
        "Spifex är en plattform för finansiell drift, inte en bank. Banktjänster tillhandahålls av dina anslutna banker.",
    },
    stories: {
      title: "Byggt för arbetet du gör.",
      subtitle:
        "Från kassaflödesplanering till betalningar och rapportering kopplar Spifex samman arbetsflöden som team kör varje dag.",
      cards: {
        limits: {
          title: "Håll kassan synlig.",
          desc: "Följ planerade och avräknade förflyttningar i en arbetsyta.",
        },
        spend: {
          title: "Avräkna i delar.",
          desc: "Registrera utposter och avräkna dem i sin helhet eller i delar.",
        },
        budget: {
          title: "Ge kostnaderna en ägare.",
          desc: "Fördela poster till de avdelningar och projekt som äger dem.",
        },
        ap: {
          title: "Koppla banken.",
          desc: "Importera kontoutdrag och matcha dem mot kassaflödesposter.",
        },
      },
    },
    already: {
      title: "Redan kund?",
      subtitle:
        "Möt andra kunder och operatörer. Delta i sessioner, program för tidig åtkomst och communityaktiviteter.",
      learnMore: "Läs mer",
    },
    bottom: {
      title: "Samla verksamheten i en tydlig vy.",
      subtitle: "Starta gratis, anslut din arbetsyta och lägg till struktur när teamet växer.",
    },
  },

  customersLearnMore: {
    title: "Håll dig uppdaterad om möjligheter att knyta kontakter!",
    intro:
      "Vill du veta hur du kan komma i kontakt med andra Spifex-kunder och operatörer? Fyll i formuläret så hör vi av oss.",
    bullets: {
      productDesign: {
        title: "Produkt och design:",
        desc: "Delta i återkopplingssessioner, betatesta nya funktioner och få tidig åtkomst till releaser.",
      },
      localGroups: {
        title: "Lokala användargrupper:",
        desc: "Gå med i en lokal grupp för att nätverka, dela råd och ge återkoppling.",
      },
      advocate: {
        title: "Ambassadör:",
        desc: "Visa upp ditt varumärke och delta i kundcase, event eller referenser.",
      },
    },
    note: "Att skicka formuläret är inte ett åtagande. Det är en intresseanmälan. Vi kontaktar dig med detaljer när möjligheterna dyker upp.",
    form: {
      title: "Anmäl dig för att veta mer:",
      firstName: "Förnamn",
      lastName: "Efternamn",
      workEmail: "Jobbmejl",
      company: "Företagsnamn",
      optionsLabel: "Välj ett eller flera av följande alternativ för engagemang nedan",
      options: {
        beta: "Produkt och design: Betatesta nya releaser och program för tidig åtkomst",
        coCreation:
          "Återkoppling på produkt och design: Samskapande och återkopplingssessioner",
        userGroup: "Användargrupp: Gå med i en lokal grupp för att nätverka och ge återkoppling",
        speak: "Ambassadör: Tala på ett event (på plats eller digitalt)",
        reference: "Ambassadör: Referens",
        networking: "Ambassadör: Nätverka med andra kunder",
        other: "Annat",
      },
      submit: "Skicka",
      disclaimer:
        "Det här formuläret är en marknadsföringsmall. Inskickning skapar inget avtal eller kommersiellt åtagande.",
      thanksTitle: "Tack.",
      thanksSubtitle:
        "Vi har tagit emot dina uppgifter och kontaktar dig när möjligheter matchar dina intressen.",
    },
  },

  solutionsPage: {
    meta: {
      title: "Lösningar",
      description:
        "Finanslösningar som kopplar samman planering, genomförande, avstämning och KPI:er i ett gemensamt driftlager.",
    },
    hero: {
      title: "Finans som fungerar som drift",
      subtitle:
        "Spifex kopplar samman team, arbetsflöden och data så att ledare kan agera snabbt och säkert – utan separata silos.",
      cards: {
        lifecycle: {
          title: "Hela pengarnas livscykel",
          desc: "Från planerade kassaflödesförflyttningar till avräkningar, överföringar och avstämning. Enhetligt från början till slut.",
        },
        complexity: {
          title: "Byggt för operativ komplexitet",
          desc: "Hantera flera intäkts- och kostnadsströmmar med standardisering, automatisering och spårbarhet.",
        },
        governance: {
          title: "Styrning från grunden",
          desc: "Rollbaserad åtkomst, granskningsspår och organisationsavgränsade strukturer håller teamen samordnade och regelefterlevande.",
        },
        kpis: {
          title: "KPI-styrt genomförande",
          desc: "Instrumentpaneler och indikatorer håller alla fokuserade på de mätvärden som driver verksamheten.",
        },
      },
      emailPlaceholder: "Jobbmejl",
      ctaEmail: "Kom igång",
      ctaPricing: "Se priser",
      disclaimer:
        "När du skickar din e-post omdirigeras du till registreringen. Du kan ändra dina inställningar när som helst.",
    },
    map: {
      productsTitle: "Produkter",
      workflowsTitle: "Arbetsflöden",
      products: {
        cashflow: {
          title: "Kassaflöde",
          desc: "Planera in- och utflöden, simulera scenarier och följ genomförandet i realtid.",
        },
        bankingPayments: {
          title: "Bank och betalningar",
          desc: "Samla bankkonton, betala leverantörer och hantera överföringar med inbyggda kontroller.",
        },
        spendSettlements: {
          title: "Utgifter och avräkningar",
          desc: "Standardisera godkännanden, avräkningar och intern förflyttning av medel.",
        },
        ledger: {
          title: "Huvudbok",
          desc: "Kontoplan, klassificering och revisionsredo finansiell struktur.",
        },
        projects: {
          title: "Projekt",
          desc: "Koppla kostnader och intäkter till initiativ med full spårbarhet och KPI:er.",
        },
        departments: {
          title: "Avdelningar",
          desc: "Budgetansvar, ansvarstagande och operativ styrning per team.",
        },
        crm: {
          title: "CRM",
          desc: "Koppla pipelinesignaler till kassaflödesöverblick och planering.",
        },
        inventory: {
          title: "Lager",
          desc: "Koppla operativa insatser till finansiella utfall utan separata silos.",
        },
      },
      workflows: {
        reconciliation: {
          title: "Avstämning",
          desc: "Slut cirkeln från planerat till faktiskt med strukturerad matchning.",
        },
        accountingAutomation: {
          title: "Bokföringsautomatisering",
          desc: "Minska manuellt arbete och håll finansdata konsekvent mellan moduler.",
        },
        reportingKpis: {
          title: "Rapportering och KPI",
          desc: "Instrumentpaneler och indikatorer som håller teamen fokuserade på det som spelar roll.",
        },
      },
      governanceCard: {
        title: "Ett driftlager för alla team",
        desc: "Organisationer, roller, ansvar och granskningsspår är grundläggande byggstenar, så data förblir konsekvent även när arbetsflödena skalas upp.",
      },
    },
    operatingModel: {
      title: "En gemensam operativ modell kopplar samman alla moduler",
      subtitle:
        "Spifex är byggt kring en operativ slinga: planera avsikten, genomför med kontroller, stäm av med underlag. Så blir prognoser tillförlitliga och rapporteringen användbar.",
      chips: {
        cashflow: "Kassaflöde",
        spend: "Utgifter och avräkningar",
        banking: "Bank och betalningar",
        ledger: "Huvudbok",
        projects: "Projekt",
        departments: "Avdelningar",
      },
      stepPrefix: "Steg",
      outputsTitle: "Operativa resultat",
      controlsTitle: "Kontroller och styrning",
      steps: {
        plan: {
          title: "Planera avsikten",
          desc: "Definiera vad som ska hända: planerade förflyttningar, ägare, datum, kategorier och kontext. Det blir din basprognos och din ansvarsstruktur.",
          outputs:
            "Planerade förflyttningar, återkommande mallar, prognosscenarier och ansvar per projekt eller avdelning.",
          controls:
            "Standardiserad klassificering och struktur (Huvudbok + Avdelningar/Projekt) förhindrar kaos längre fram.",
        },
        execute: {
          title: "Genomför med kontroller",
          desc: "Registrera verkliga händelser: godkännanden, delavräkningar, överföringar och leverantörsbetalningar. Genomförandet kopplas tillbaka till planerad avsikt eller markeras tydligt som oplanerat.",
          outputs:
            "Avräkningar, överföringar, betalningshändelser och spårbar operativ historik kopplad till ägare.",
          controls:
            "Rollbaserade godkännanden, gränser och policyer håller utgifterna under kontroll utan att bromsa teamen.",
        },
        reconcile: {
          title: "Stäm av med underlag",
          desc: "Slut cirkeln genom att matcha planerat mot faktiskt, bifoga underlag och lösa avvikelser löpande – så blir månadsavslutet en bieffekt, inte en kris.",
          outputs:
            "Strukturerad matchning, arbetsflöde för avvikelser, ren avslutning och revisionsredo spår.",
          controls:
            "Granskningshistorik, underlagslänkar och konsekventa dataregler gör rapporteringen tillförlitlig.",
        },
      },
    },
    teams: {
      title: "Lösningar för teamen som driver verksamheten",
      subtitle:
        "Spifex kopplar samman finans och drift genom att göra ansvar, klassificering och arbetsflöden tydliga – så att varje team får klarhet utan separata system.",
      items: {
        cfo: {
          title: "CFO / Finansledning",
          desc: "Få förutsägbar kassaöverblick, genomdriv styrning och mät resultat utan att vänta på månadsrapporteringen.",
          point1: "Prognosscenarier grundade i genomförandet, inte i statiska kalkylark.",
          point2: "Styrning från grunden: roller, granskningsspår och standardiserad klassificering.",
          point3: "KPI:er som knyter finansiella utfall till ansvar och operativ verklighet.",
        },
        financeOps: {
          title: "Finance ops / Controllers",
          desc: "Minska manuellt arbete genom att standardisera hur förflyttningar skapas, godkänns, avräknas och stäms av.",
          point1: "Strukturerad avstämning och underlagsspårning för snabbare avslut.",
          point2: "Huvudboksstyrd klassificering och automatisering som håller data konsekvent.",
          point3:
            "Arbetsflöde för avvikelser: oplanerad aktivitet blir synlig och får en ägare.",
        },
        operators: {
          title: "Operatörer / Teamägare",
          desc: "Driv initiativ och team med tydliga budgetar, godkännanden och resultatsignaler – utan att tappa fart.",
          point1: "Ansvar per avdelning och projekt för budgetar och uppföljning.",
          point2: "Utgiftskontroller och godkännanden som matchar hur teamen faktiskt arbetar.",
          point3: "KPI:er och rapportering som speglar leverans, inte bara bokföringskategorier.",
        },
      },
    },
    solutions: {
      title: "Kärnlösningar byggda på plattformen",
      subtitle:
        "Varje lösning är ett praktiskt mönster för ett operativt system. Spifex kombinerar rätt moduler så att resultatet blir mätbart, styrbart och skalbart.",
      sectionLabel: "Lösning",
      whatYouGetTitle: "Det här får du",
      kpisTitle: "KPI:er du kan styra på",
      controlTitle: "Notering om styrning",
      items: {
        cashVisibility: {
          title: "Kassaöverblick du kan lita på",
          desc: "Planering blir tillförlitlig när den är kopplad till genomförandehändelser och stäms av löpande. Du ser vad som är planerat, vad som genomförts och vad som ändrats – per ägare, team och initiativ.",
          chip1: "Kassaflöde",
          chip1Href: "/products/cashflow",
          chip2: "CRM",
          chip2Href: "/products/crm",
          chip3: "Rapportering och KPI",
          chip3Href: "#workflow-reporting-kpis",
          bullets: {
            b1: "Planerade förflyttningar med ägare, datum, kategorier och scenariomodellering.",
            b2: "Pipelinesignaler översatta till förväntade inflöden med timing och säkerhet.",
            b3: "Avvikelser följs upp varje vecka (planerat mot faktiskt) med orsaker och ansvar.",
            b4: "Oplanerade förflyttningar synliggörs tydligt i stället för att döljas i kalkylark.",
            b5: "Instrumentpaneler som kopplar kassautfall till operativt ansvar.",
          },
          kpis: {
            k1: "Prognosnoggrannhet över 4 veckor med orsaker till avvikelser.",
            k2: "Andel oplanerat och främsta källor per avdelning eller projekt.",
            k3: "Tid till avslut och avstämningsfördröjning mellan team.",
          },
          controlNote:
            "Varje förflyttning är kopplad till planerad avsikt eller markerad som oplanerad, med ägare och klassificering – så att prognoser går att granska.",
        },
        spendGovernance: {
          title: "Utgiftsstyrning utan flaskhalsar",
          desc: "Styr utgifterna med regler, godkännanden och ansvar som matchar hur teamen arbetar. Genomförandet förblir snabbt, men policyer tillämpas och avvikelser syns.",
          chip1: "Utgifter och avräkningar",
          chip1Href: "/products/spend-settlements",
          chip2: "Avdelningar",
          chip2Href: "/products/departments",
          chip3: "Projekt",
          chip3Href: "/products/projects",
          bullets: {
            b1: "Rollbaserade godkännanden och trösklar för förfrågningar, avräkningar och överföringar.",
            b2: "Budgetansvar per avdelning med synlighet i avvikelser och åtaganden.",
            b3: "Projektkoppling så att utgifter mappas till initiativ – inte till generiska hinkar.",
            b4: "Standardiserade avräkningsflöden (delvis, delad, intern förflyttning) med spårbarhet.",
            b5: "Policystyrd kontroll som minskar omarbete och håller genomförandet konsekvent.",
          },
          kpis: {
            k1: "Godkännandetid per team och flaskhalssteg.",
            k2: "Budgetavvikelse och åtagandetäckning per avdelning.",
            k3: "Fullständighet i utgiftsfördelning per projekt och kategori.",
          },
          controlNote:
            "Styrning tillämpas på arbetsflödesnivå (vem som får göra vad, när och varför), inte bara i efterhandsrapportering.",
        },
        bankingPayments: {
          title: "Bank och betalningar som ett operativt arbetsflöde",
          desc: "Samla bankkonton och betalningsgenomförande med inbyggda kontroller. Koppla betalningshändelser till planerad avsikt, ansvar och avstämning så att kassatidpunkterna blir förutsägbara.",
          chip1: "Bank och betalningar",
          chip1Href: "/products/banking-payments",
          chip2: "Kassaflöde",
          chip2Href: "/products/cashflow",
          chip3: "Avstämning",
          chip3Href: "#workflow-reconciliation",
          bullets: {
            b1: "Centralisering av bankkonton med organisationsavgränsad struktur och kontroll.",
            b2: "Leverantörsbetalningar och överföringar kopplade till godkännanden och ansvar.",
            b3: "Genomförandehändelser kopplade till planerade förflyttningar för tydlig spårbarhet.",
            b4: "Avstämningssignaler sluter cirkeln med underlag och avvikelsehantering.",
            b5: "Konsekvent kassatidslinje: avsikt → betalning → matchning → rapportering.",
          },
          kpis: {
            k1: "Hastighet i betalningsgenomförandet (skapad → godkänd → genomförd).",
            k2: "Avräkningsgrad (delvis eller återstående) per ägare och team.",
            k3: "Avstämningsfördröjning per konto och arbetsflödestyp.",
          },
          controlNote:
            "Betalningar är inte bara transaktioner – de är styrda arbetsflödeshändelser med godkännanden, historik och matchningsregler.",
        },
        closeAudit: {
          title: "Snabbare avslut och revisionsredo struktur",
          desc: "Avsluta snabbare genom att göra klassificering och avstämning löpande. Använd huvudboksstyrd struktur och automatisering så att finansdata förblir konsekvent i alla moduler.",
          chip1: "Huvudbok",
          chip1Href: "/products/ledger",
          chip2: "Bokföringsautomatisering",
          chip2Href: "#workflow-accounting-automation",
          chip3: "Avstämning",
          chip3Href: "#workflow-reconciliation",
          bullets: {
            b1: "Kontoplan och klassificeringsregler som standardiserar rapporteringen.",
            b2: "Löpande avstämning med strukturerad matchning och underlagslänkar.",
            b3: "Automatisering som minskar manuellt omarbete och dubbel datainmatning.",
            b4: "Granskningsspår över ändringar, godkännanden och avstämningsåtgärder.",
            b5: "Konsekvent data i Kassaflöde, Utgifter, Bank, Projekt och Avdelningar.",
          },
          kpis: {
            k1: "Avslutsfördröjning och andel slutförd avstämning.",
            k2: "Antal avvikelser per kategori och lösningstid.",
            k3: "Konsekvens i klassificering (andel okänt eller omappat).",
          },
          controlNote:
            "Revisionsberedskap är inbyggd i systemets byggstenar: roller, historik, underlag och konsekvent klassificering.",
        },
        profitability: {
          title: "Synlighet i lönsamhet per initiativ och team",
          desc: "Mät lönsamhet och bidrag per projekt och avdelning, inte bara på företagsnivå. Gör ansvar till en mätbar operativ slinga.",
          chip1: "Projekt",
          chip1Href: "/products/projects",
          chip2: "Avdelningar",
          chip2Href: "/products/departments",
          chip3: "Rapportering och KPI",
          chip3Href: "#workflow-reporting-kpis",
          bullets: {
            b1: "Kostnader och intäkter kopplade till initiativ med konsekvent ansvar.",
            b2: "Avdelningsbudgetar och åtaganden kopplade till operativ styrning.",
            b3: "Marginal- och bidragsvy per projekt, team och tidsperiod.",
            b4: "Uppföljning av avvikelser och burn för prioritering och resursbeslut.",
            b5: "KPI:er som kopplar leveransverkligheten till finansiella utfall.",
          },
          kpis: {
            k1: "Projektmarginal och burn rate-trend per initiativ.",
            k2: "Budgetavvikelse per avdelning med orsaker.",
            k3: "Fullständighet i fördelning (procent tilldelat) över förflyttningar.",
          },
          controlNote:
            "Ansvar skalar när varje förflyttning har en teamägare och en projektkontext – inte bara en kategorietikett.",
        },
        connectedOps: {
          title: "Sammankopplad drift: lager, intäkter och kassa",
          desc: "Sluta behandla operativa system som separata från finans. Koppla lagerrörelser och kostnadsberäkning till marginal, koppla CRM-pipeline till förväntade inflöden och håll allt konsekvent via huvudboksstrukturen.",
          chip1: "Lager",
          chip1Href: "/products/inventory",
          chip2: "CRM",
          chip2Href: "/products/crm",
          chip3: "Huvudbok",
          chip3Href: "/products/ledger",
          bullets: {
            b1: "Lagerrörelser kopplade till kostnadsberäkning och värdering för verklig marginalinsyn.",
            b2: "Operativa indata blir planeringssignaler för inköp och kassatidpunkt.",
            b3: "Intäktspipeline översatt till kassaantaganden och scenarier.",
            b4: "Huvudboksstyrd klassificering håller operativ data finansiellt konsekvent.",
            b5: "Delat ansvar och delade underlag minskar tvister och omarbete mellan team.",
          },
          kpis: {
            k1: "Lageromsättning, svinn och lagernoggrannhet över tid.",
            k2: "Täckning och konvertering av förväntade inflöden per pipelinesteg.",
            k3: "Marginalpåverkan från värdering och operativa förändringar.",
          },
          controlNote:
            "Sammankopplad drift kräver konsekvent klassificering och ansvar, så att varje operativ händelse mappas rent till finansiella utfall.",
        },
      },
    },
    workflowsDeep: {
      title: "Arbetsflöden som håller cirkeln sluten",
      subtitle:
        "De här arbetsflödena gör modulerna till ett repeterbart arbetssätt: stäm av löpande, automatisera klassificering och rapportera KPI:er som driver genomförandet.",
      items: {
        reconciliation: {
          title: "Avstämning",
          desc: "Matcha planerad avsikt mot genomförandehändelser, bifoga underlag och lös avvikelser löpande – så blir avslutet rutin.",
          point1:
            "Strukturerad matchning per konto, motpart, datumintervall och förflyttningstyp.",
          point2:
            "Avvikelseflöde: oplanerade eller felaktigt matchade poster syns, ägs och löses.",
          point3: "Underlag och granskningshistorik: ändringar spåras och kan granskas.",
        },
        accountingAutomation: {
          title: "Bokföringsautomatisering",
          desc: "Minska manuellt arbete genom att standardisera klassificeringen och hålla data konsekvent i alla moduler.",
          point1: "Huvudboksstyrda regler: tillämpa klassificering när data skapas.",
          point2:
            "Minska dubbelregistrering: delade byggstenar i Kassaflöde, Utgifter, Bank, Projekt och Avdelningar.",
          point3: "Konsekvent rapportstruktur över tid och team med granskningsspår.",
        },
        reportingKpis: {
          title: "Rapportering och KPI",
          desc: "Mät det som driver verksamheten: noggrannhet, hastighet, styrning och lönsamhet – per ägare och operativ struktur.",
          point1: "Instrumentpaneler byggda på operativa byggstenar, inte handgjorda kalkylark.",
          point2: "KPI:er som kopplar utfall till ansvar (team, projekt, avdelningar).",
          point3:
            "Trendsynlighet: avvikelse, fördröjning, konvertering och fullständighet i fördelning över tid.",
        },
      },
    },
    rollout: {
      title: "Så inför teamen det",
      subtitle:
        "Spifex är byggt för modulvis införande. Börja med struktur och koppla sedan på genomförande och avstämning så att rapporteringen blir en bieffekt.",
      steps: {
        connect: {
          title: "Anslut datakällor",
          desc: "Centralisera konton och operativa indata (bank, leverantörer, pipeline, lagersignaler) så att finansiella händelser fångas konsekvent.",
        },
        structure: {
          title: "Definiera finansiell struktur",
          desc: "Sätt upp kontoplan, klassificering, avdelningar, projekt och ansvar så att systemet förblir sammanhängande när volymerna växer.",
        },
        operate: {
          title: "Kör arbetsflöden med kontroller",
          desc: "Använd godkännanden, avräkningar, överföringar och avstämning som arbetsflöden – med policyer och avvikelser synliga per ägare.",
        },
        optimize: {
          title: "Optimera med KPI:er",
          desc: "Mät noggrannhet, hastighet och lönsamhet. Förbättra orsakerna till avvikelser, minska avslutsfördröjningen och förfina styrningsreglerna.",
        },
      },
      ctaPrimary: "Se priser",
      ctaSecondary: "Skapa ett konto",
    },
    bottom: {
      title: "Gör finans till drift",
      subtitle:
        "Byt ut separata silos mot ett gemensamt driftlager för planering, genomförande, avstämning och KPI-styrda beslut.",
      ctaPricing: "Se priser",
      ctaSignup: "Skapa ett konto",
    },
  },
} as const;

export default sv;

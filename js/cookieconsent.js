import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: false,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {
            enabled: true
        },
        analytics: {
            enabled: true
        },
        marketing: {
            enabled: true
        }
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Niniejsza strona korzysta z plików cookie",
                    description: "Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować ruch w naszej witrynie. Informacje o tym, jak korzystasz z naszej witryny, udostępniamy partnerom społecznościowym, reklamowym i analitycznym. Partnerzy mogą połączyć te informacje z innymi danymi otrzymanymi od Ciebie lub uzyskanymi podczas korzystania z ich usług.",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    showPreferencesBtn: "Ustawienia",
                    footer: ""
                },
                preferencesModal: {
                    title: "Ustawienia Cookie",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    savePreferencesBtn: "Zapisz",
                    closeIconLabel: "Zamknij",
                    serviceCounterLabel: "Usługi",
                    sections: [
                        {
                            title: "Strona korzysta z plików cookie",
                            description: "Wykorzystujemy pliki cookie do spersonalizowania treści i reklam, aby oferować funkcje społecznościowe i analizować ruch w naszej witrynie. Informacje o tym, jak korzystasz z naszej witryny, udostępniamy partnerom społecznościowym, reklamowym i analitycznym. Partnerzy mogą połączyć te informacje z innymi danymi otrzymanymi od Ciebie lub uzyskanymi podczas korzystania z ich usług."
                        },
                        {
                            title: "Niezbędne",
                            description: "Niezbędne pliki cookie przyczyniają się do użyteczności strony poprzez umożliwianie podstawowych funkcji takich jak nawigacja na stronie i dostęp do bezpiecznych obszarów strony internetowej. Strona internetowa nie może funkcjonować poprawnie bez tych ciasteczek.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funkcjonalne",
                            description: "Pliki cookie dotyczące preferencji umożliwiają stronie zapamiętanie informacji, które zmieniają wygląd lub funkcjonowanie strony, np. preferowany język lub region, w którym znajduje się użytkownik.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Statystyczne",
                            description: "Statystyczne pliki cookie pomagają właścicielem stron internetowych zrozumieć, w jaki sposób różni użytkownicy zachowują się na stronie, gromadząc i zgłaszając anonimowe informacje.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Marketing",
                            description: "Marketingowe pliki cookie stosowane są w celu śledzenia użytkowników na stronach internetowych. Celem jest wyświetlanie reklam, które są istotne i interesujące dla poszczególnych użytkowników i tym samym bardziej cenne dla wydawców i reklamodawców strony trzeciej.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "",
                            description: ""
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true,

    onConsent: (logo) => {
        gtag('consent', 'update', {
            'ad_storage': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'ad_user_data': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'ad_personalization': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'functionality_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'personalization_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'security_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
        });
	},
	onChange: ({ changedCategories }) => {
        gtag('consent', 'update', {
            'ad_storage': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'ad_user_data': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'ad_personalization': CookieConsent.acceptedCategory('marketing') ? 'granted' : 'denied',
            'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'functionality_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'personalization_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
            'security_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
        });
	},
});
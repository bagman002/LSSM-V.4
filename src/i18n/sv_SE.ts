const modules = {
    appstore: {
        save: 'Spara',
        reset: 'Återställ',
        noMapkit:
            'Denna modul fungerar inte med "Mapkit" på grund av Mapkit-begränsningar!',
        dev: 'Den här modulen är fortfarande under utveckling. Att aktivera det kan orsaka fel! ',
        closeWarning: {
            title: 'Osparade ändringar',
            text: 'Du har gjort ändringar i AppStore som ännu inte har sparats. Återställ eller spara dem för att stänga AppStore.',
            close: 'Stäng meddelandet',
        },
    },
    settings: {
        name: 'Inställningar',
        save: 'Spara',
        discard: 'Avbryt ändringar',
        reset: 'Återställ',
        export: 'Exportera',
        import: 'Importera',
        donate: 'donate voluntarily',
        resetWarning: {
            title: 'Återställ inställningar',
            text: 'Vill du återställa standardinställningarna? Det kan inte bli ogjort! ',
            close: 'Avbryt',
            total: 'Alla inställningar',
            module: 'Endast för den här modulen',
        },
        resetWarningSetting: {
            title: 'Återställ inställningar',
            text: 'Vill du verkligen återställa den här inställningen <b>{setting}</b> för modulen <b>{module}</b> till dess standardvärde?',
            close: 'Avbryt',
            reset: 'Återställ',
        },
        closeWarning: {
            title: 'Osparade ändringar',
            text: 'Du har gjort ändringar i inställningarna som ännu inte har sparats. Återställ dem, avbryt dem eller spara dem för att stänga inställningarna.',
            close: 'Stäng meddelandet',
        },
        changeList: {
            true: 'På',
            false: 'Av',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        ['Brandmän']: {
            buildings: [0, 1, 18, 21],
            color: '#ff2d2d',
        },
        Ambulanser: {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        Polis: {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        ['Övrig']: {
            buildings: [7, 14, 22, 23],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        ['Brandmän']: {
            vehicles: {
                Brandbilar: [0, 1, 12],
                Stegbilar: [2],
                Specialfordon: [4, 6, 7, 10, 11, 19, 29, 35, 36, 37, 38],
                ['Brandbefäl']: [3],
                ['Båtar']: [18, 20],
                Skogsbrandbilar: [21, 22, 23, 25, 26, 27],
            },
            color: '#ff2d2d',
        },
        Ambulanser: {
            vehicles: {
                Ambulanser: [5, 28, 30, 31, 32, 33, 34],
                Ambulanshelikopter: [9],
            },
            color: '#ffa500',
        },
        Polis: {
            vehicles: {
                'Radiobil': [8],
                'Polismotorcykel': [16],
                'Hundenhet': [15],
                'Polishelikopter': [13],
                'Bepansrat Insatsfordon': [14],
                'Insatsfordon': [17],
                ['Polishäst']: [24],
                'nya bilar': [39, 40, 41, 42, 43, 44],
            },
            color: '#1e8900',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    schoolings: {
        Brandstation: [
            {
                caption: 'Farligt gods',
                duration: '3 dagar',
                staffList: 'Farligt gods',
                key: 'gw_gefahrgut',
            },
            {
                caption: 'Mobil ledning',
                duration: '5 dagar',
                staffList: 'Mobilt ledningsvehicle',
                key: 'elw2',
            },
            {
                caption: 'Flygbrandsträning',
                duration: '3 dagar',
                key: 'arff',
            },
            {
                caption: 'Livräddning',
                duration: '3 dagar',
                staffList: 'Livräddning',
                key: 'gw_wasserrettung',
            },
            {
                caption: 'Havsnavigering',
                duration: '5 dagar',
                key: 'ocean_navigation',
            },
            {
                caption: 'Dykarutbildning',
                duration: '5 dagar',
                staffList: 'Dykarutbildning',
                key: 'gw_taucher',
            },
            {
                caption: 'Luftburen brandbekämparutbildning',
                duration: '5 dagar',
                staffList: 'Luftburen brandbekämparutbildning',
                key: 'airborne_firefighting',
            },
            {
                caption: 'Insatsutbildning',
                duration: '3 dagar',
                staffList: 'Insatsutbildning',
                key: 'coresponder',
            },
            {
                caption: 'Intensivvårdsutbildning',
                duration: '5 dagar',
                staffList: 'Intensivvårdsutbildning',
                key: 'critical_care',
            },
            {
                caption: 'MC-Ambulans',
                duration: '3 dagar',
                staffList: 'MC-Ambulans',
                key: 'rapid_response_motorcycle',
            },
        ],
        Polis: [
            {
                caption: 'Polishelikopterpilotutbildning',
                duration: '7 dagar',
                staffList: 'Polishelikopterpilotutbildning',
                key: 'polizeihubschrauber',
            },
            {
                caption: 'Insatspolisutbildning',
                duration: '5 dagar',
                staffList: 'Insatspolisutbildning',
                key: 'swat',
            },
            {
                caption: 'Hundförarutbildning',
                duration: '5 dagar',
                staffList: 'Hundförarutbildning',
                key: 'k9',
            },
            {
                caption: 'MC-Polisutbildning',
                duration: '3 dagar',
                staffList: 'Polismotorcykel',
                key: 'police_motorcycle',
            },
            {
                caption: 'Rytteriutbildning',
                duration: '3 dagar',
                staffList: 'Rytteriutbildning',
                key: 'police_horse',
            },
            {
                caption: 'Trafikpolisutbildning',
                duration: '5 dagar',
                staffList: 'Trafikpolisutbildning',
                key: 'traffic_police',
            },
            {
                caption: 'Bombskyddsutbildning',
                duration: '5 dagar',
                staffList: 'Bombskyddsutbildning',
                key: 'fbi_bomb_tech',
            },
            {
                caption: 'Utbildning till yttrebefäl',
                duration: '5 dagar',
                staffList: 'Utbildning till yttrebefäl',
                key: 'police_service_group_leader',
            },
        ],
        ['Rädda']: [
            {
                caption: 'Intensivvårdsutbildning',
                duration: '5 dagar',
                staffList: 'Intensivvårdsutbildning',
                key: 'critical_care',
            },
            {
                caption: 'MC-Ambulans',
                duration: '3 dagar',
                staffList: 'MC-Ambulans',
                key: 'rapid_response_motorcycle',
            },
        ],
        ['Vattenräddning']: [
            {
                caption: 'Utbildning av livräddare',
                duration: '5 dagar',
                key: 'coastal_rescue',
            },
            {
                caption: 'Utbildning av Kustflygs',
                duration: '5 dagar',
                key: 'coastal_rescue_pilot',
            },
            {
                caption: 'Utbildning av systemoperatörer',
                duration: '5 dagar',
                key: 'heavy_machinery',
            },
            {
                caption: 'Havsnavigering',
                duration: '5 dagar',
                key: 'ocean_navigation',
            },
        ],
    },
    amount: 'Antal',
    search: 'Sök',
    alliance: 'Allians',
    premiumNotice:
        'Den här funktionen utökar en premiumfunktion i spelet och är därför endast tillgänglig för spelare med ett Larmcentralen-spelet premiumkonto!',
    credits: 'Krediter',
    coins: 'Mynt',
    close: 'Stäng',
    fullscreen: {
        expand: 'Aktivera helskärmsläge',
        compress: 'inaktivera helskärmsläge',
    },
    hideTitle: 'Visa titel | Göm titel ',
    vehicle: 'Fordon | Fordon | Fordon',
    building: 'Byggnader',
    station: 'Skydd | Vakt | Vakter',
    distance: 'Avstånd | Avstånd ',
    vehicleType: 'Fordons typ',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Sjö',
        'Sjukhus',
        'Skog',
        'Busshållplats',
        'Spårvagnshållplats',
        'Tågstation (regionaltåg)',
        'Tågstation (regional- och fjärrtåg)',
        'Varustation',
        'Mataffär',
        'Stormarknad',
        'Bensinmack',
        'Skola',
        'Museum',
        'Köpcentrum',
        'Bilverkstad',
        'Avfart',
        'Julmarknad',
        'Lagerbyggnad',
        'Nattklubb',
        'Arena',
        'Bondgård',
        'Kontorsbyggnad',
        'Badhus',
        'Järnvägsövergång',
        'Teater',
        'Nöjesfält',
        'Flod',
        'Liten startbana',
        'Stor startbana',
        'Flygplatsterminal',
        'Bank',
        'Varuhus',
        'Bro',
        'Snabbmatsrestaurang',
        'Fraktgodshamn',
        'Återvinningscentral',
        'Höghus',
        'Kryssningshamn',
        'Småbåtshamn',
        'Järnvägskorsning',
        'Tunnel',
        'Fryshus',
        'Kraftverk',
        'Fabrik',
        'Skrotupplag',
        'Tunnelbanestation',
        'Liten kemikalietank',
        'Stor kemikalietank',
        'Hotell',
        'Bar',
        'Soptipp',
        'Parkeringshus',
        'Silo',
        'Centrum',
        'Torg',
        'Lägenhetskomplex',
        'Lekpark',
        'Eldstad',
        'Skogsstuga',
        'Kärnkraftverk',
        'Motorcross bana',
        'Skyddad bostad',
        'Sågverk',
        'Oljeraffinaderi',
        'Kyrka',
        'Strand',
        'Ö',
        'Kust',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [169],
    ranks: {
        missionchief: {
            0: 'Nybörjare',
            200: 'Brandman',
            10_000: 'Brandveteran',
            100_000: 'Brandoperatör',
            1_000_000: 'Inspektör',
            5_000_000: 'Kommissarie',
            20_000_000: 'Gruppchef',
            50_000_000: 'Bataljonschef',
            1_000_000_000: 'Divisionschef',
            2_000_000_000: 'Vicechef',
            5_000_000_000: 'Brandchef',
        },
        policechief: {
            0: 'Polisaspirant',
            200: 'Polisassistent',
            10_000: 'Polis-/kriminalinspektör',
            100_000: 'Polis-/kriminalkommissarie',
            1_000_000: 'Polissekreterare',
            5_000_000: 'Polisintendent',
            20_000_000: 'Polismästare/polisöverintendent',
            50_000_000: 'Polismästare',
            1_000_000_000: 'Polisdirektör',
            2_000_000_000: 'Biträdande säkerhetspolischef',
            5_000_000_000: 'Rikspolischef/säkerhetspolischef',
        },
    },
};

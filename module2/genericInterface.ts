{
    // Interface Generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X
    }

    type HeilouWatch = {
        name: string, model: string, display: string
    }

    const poorDeveloper: Developer<HeilouWatch> = {
        name: 'Jubair',
        computer: {
            brand: 'Asus',
            model: 'Z345xt',
            releaseYear: 2015
        },
        smartWatch: {
            name: 'Heilou',
            model: '1233T',
            display: 'Oled'
        }

    }

    interface AppleWatch {
        name: string,
        model: string,
        isHeartRate: boolean
    }

    const richDeveloper: Developer<AppleWatch, Boolean> = {
        name: 'Arpan',
        computer: {
            brand: 'Razer',
            model: 'H-25RT',
            releaseYear: 2018
        },
        smartWatch: {
            name: 'Apple',
            model: '1233T',
            isHeartRate: true
        },
        bike: true
    }






















}
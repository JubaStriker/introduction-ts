{
    // Interface Generic

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
    }

    const poorDeveloper: Developer<{ name: string, model: string, display: string }> = {
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

    const richDeveloper: Developer<{ name: string, model: string, isHeartRate: boolean }> = {
        name: 'Arpan',
        computer: {
            brand: 'Asus',
            model: 'Z345xt',
            releaseYear: 2015
        },
        smartWatch: {
            name: 'Apple',
            model: '1233T',
            isHeartRate: true

        }
    }






















}
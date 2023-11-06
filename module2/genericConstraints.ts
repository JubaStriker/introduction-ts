{
    // Generic constraints
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship';

    type Owner2 = keyof Vehicle;

    const owner2: Owner2 = 'car'

    const getPropertyValue = <X, Y extends keyof X>(object: X, key: Y) => {
        return object[key];
    }

    const user = {
        name: 'Jubair',
        email: 'jubair@gmail.com',
        roll: 2002267
    }

    const car = {
        brand: 'Toyota',
        model: 'Supra'

    }

    const result = getPropertyValue(car, 'model')
    console.log(result)
}
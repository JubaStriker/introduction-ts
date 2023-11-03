
// null type
const searchName = (value: string | null) => {
    if (value) {
        console.log('Searching for ' + value)
    } else {
        console.log('Nothing to search')
    }
}

// unknown type

const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600
        console.log(`Converted speed is ${convertedSpeed} ms^-1`)
    }
    if (typeof value === 'string') {
        const [result, unit] = value.split(' ')
        const convertedSpeed = (parseFloat(result) * 1000) / 3600
        console.log(`Converted speed is ${convertedSpeed} ms^-1`)
    }
};

getSpeedInMeterPerSecond('2 km/h')

// never type
const throwError = (msg: string): never => {
    throw new Error(msg);
};

// throwError('Oops got an error')

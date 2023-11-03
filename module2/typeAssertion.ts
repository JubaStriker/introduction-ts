{

    // Type assertions

    let anything: any;
    anything = 'Next level web development';

    anything = 2333;

    // (anything as string)

    (anything as number)


    const convertKgtoGram = (value: string | number): string | number | undefined => {
        if (typeof value === 'number') {
            return value * 1000;
        }
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `Converted value is ${convertedValue}`;
        }
    }

    const result1 = convertKgtoGram('10') as string;
    const result2 = convertKgtoGram(10) as number;

    console.log({ result1, result2 });































}
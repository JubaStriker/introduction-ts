{
    // Function with generic

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('AC Mirage')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res2 = createArray('AC Syndicate')
    const resTuple = createArrayWithTuple<string, number>('Bangladesh', 1971);



}
{
    // Generic type

    type GenericArray<T> = Array<T>;

    const rollNumbers: number[] = [1, 2, 3, 4, 5, 6, 7]

    const rollNumbers2: Array<number> = [1, 2, 3, 4, 5, 6, 7]

    const rollNumbers3: GenericArray<number> = [1, 2, 3, 4]

    const names: GenericArray<string> = ['Jubair', 'Mahi', 'Arpan']

    const user: GenericArray<{ user: string; age: number; isAdmin: boolean }> = [{
        user: 'Jubair',
        age: 23,
        isAdmin: true
    },
    {
        user: 'Mahi',
        age: 21,
        isAdmin: false
    }]


    // Generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const nameAge: GenericTuple<string, number> = ['Jubair', 22]


}
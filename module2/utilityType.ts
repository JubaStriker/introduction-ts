{

    // Utility type

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: number;
    }

    // Pick
    type NameAge = Pick<Person, 'name' | 'age'>

    // Omit
    type ContactNo = Omit<Person, 'name' | 'age'>

    // Required
    type RequiredPerson = Required<Person>

    // Partial
    type PartialPerson = Partial<Person>

    //Readonly
    const person1: Person = {
        name: 'Mr. X',
        age: 23,
        email: 'john@gmail.com',
        contactNo: 12212
    }
    person1.name = 'Mr. Y'

    type ReadonlyPerson = Readonly<Person>

    const person2: ReadonlyPerson = {
        name: 'Mr. X',
        age: 23,
        email: 'john@gmail.com',
        contactNo: 12212
    }

    // person2.name = 'Mr. Y'

    // Record

    type MyObj = Record<string, string>  // Record<key, value>

    const myObj: MyObj = {
        name: 'Mr. X',
        age: '23',
        email: 'john@gmail.com',
    }

    const myObj2: Record<string, unknown> = {}

























}
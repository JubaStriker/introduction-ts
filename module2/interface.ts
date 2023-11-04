{


    type User1 = {
        name: string;
        roll: number;
    }

    interface User2 {
        name: string;
        roll: number;
    }

    type UserWithRole1 = User1 & { role: string }
    interface UserWithRole2 extends User2 { role: string }

    const user1: User1 = {
        name: 'John',
        roll: 1
    };

    const user2: User2 = {
        name: 'Jane',
        roll: 2
    };

    const userWithRole1: UserWithRole1 = {
        name: 'John',
        role: 'Frontend Developer',
        roll: 1
    }

    const user1WithRole2: UserWithRole2 = {
        name: 'John',
        role: 'Backend Developer',
        roll: 2
    }


    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const roll1: Roll1 = [1, 2, 3]

    const roll2: Roll2 = [1, 2, 3, 4]


    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number
    }


















}
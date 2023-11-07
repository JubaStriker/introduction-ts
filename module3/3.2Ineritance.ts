{

    // Inheritance

    class Parent {
        name: string;
        age: number;


        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        getSleepTime(hour: number) {
            console.log(` ${this.name} sleeps for ${hour} hr.`)
        }
    }

    class Student extends Parent {
        roll: number;
        constructor(name: string, age: number, roll: number) {
            super(name, age);
            this.roll = roll;
        }

        getStudyTime(hour: number) {
            console.log(`${this.name} studies for ${hour} hr.`)
        }
    }
    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, designation: string) {
            super(name, age)
            this.designation = designation
        }
        getClassTime(hour: number) {
            console.log(` ${this.name} takes ${hour} hr class.`)
        }
    }

    const student1 = new Student('Jubair', 23, 2002276)













































}
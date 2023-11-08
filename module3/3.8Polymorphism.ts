{
    //Polymorphism
    class Person {
        getSleep(): void {
            console.log('I am sleeping for 8 hours per day');
        }
    }

    class Student extends Person {
        getSleep(): void {
            console.log('I am sleeping for 7 hours per day');
        }
    }

    class Developer extends Person {
        getSleep(): void {
            console.log('I am sleeping for 6 hours per day');
        }
    }

    const person = new Person();
    const student = new Student();
    const developer = new Developer();


    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    // getSleepingHours(developer)


    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {

        constructor(public radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return (Math.PI * this.radius * this.radius);
        }
    }

    class Rectangle extends Shape {

        constructor(public height: number, public width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return (this.height * this.width);
        }
    }

    const getArea = (param: Shape) => {
        console.log(param.getArea())
    }

    const rectangleArea = new Rectangle(4, 4)
    const circleArea = new Circle(5)

    getArea(rectangleArea)
    getArea(circleArea)















}
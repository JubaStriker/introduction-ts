{
    //Abstraction 1.interface 2.abstract class

    // Interface abstract

    // idea
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    // implementation
    class Car1 implements Vehicle {
        startEngine(): void {
            console.log('Engine is starting');
        }

        stopEngine(): void {
            console.log('Engine is stopping');
        }
        move(): void {
            console.log('Car is moving');
        }
    };


    // Class abstraction

    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log('Car is starting');
        }
        stopEngine(): void {
            console.log('Car is stopping');
        }
        move(): void {
            console.log('Car is moving');
        }

    }

    const car2 = new ToyotaCar();






































}
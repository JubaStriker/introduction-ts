{

    // oop class

    class Animal {
        // public name: string;
        public species: string;
        public sound: string;

        constructor(public name: string, species: string, sound: string) {
            // this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`This ${this.name} makes ${this.sound} sound.`)
        }
    }

    const dog = new Animal('German sephard', 'dog', 'ghew ghew');

    const cat = new Animal('Persian pussy', 'cat', 'mew mew');

    console.log(dog.name)

    dog.makeSound()


















}
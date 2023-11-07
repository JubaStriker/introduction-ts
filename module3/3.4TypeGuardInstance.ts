class Animal {
    public name: string;
    public species: string;


    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;

    }

    makeSound() {
        console.log(`This ${this.name} makes sound.`)
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log('I am a barking ')
    }
};

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeao() {
        console.log('I am a mewing ')
    }
};

const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
}

const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
}

const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
        animal.makeBark();
        return
    }
    if (isCat(animal)) {
        animal.makeMeao();
        return;
    }
    else {
        animal.makeSound();
        console.log('In else block')
    }
}


const cat = new Cat('Cat', 'Persian');
const dog = new Dog('Dog', 'Bullet');

console.log(getAnimal(cat));



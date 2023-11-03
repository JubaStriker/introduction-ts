{
    //Using {} to avoid block scope error in TS


    //Spread operator and destructuring


    const bros1: string[] = [
        "Mahi",
        "Arpan",
        "Mahim"
    ];

    const bros2: string[] = [
        "Rimi",
        "Faiza",
        "Dristy"
    ];

    // bros1.push(bros2);            //Cannot assign array in string
    bros1.push(...bros2);         // ... (Spread operator) spreads the elements of the array

    const devs1 = {
        pro: "Niam",
        mid: 'Sunjid',
        noob: 'Shoaib'
    }
    const devs2 = {
        pro: "Arpan",
        mid: 'Tonmoy',
        noob: 'Nayeem'
    }

    const devs = {
        ...devs1,
        ...devs2,
    }

    console.log(devs)

























}
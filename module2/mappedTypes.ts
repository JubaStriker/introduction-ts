{

    // Map type

    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height'];   // Lookup type

    type AreaString = {
        [key in keyof AreaNumber]: string;
    }

    type AreaGeneric<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaGeneric<{ height: string; width: number }> = {
        height: '1000',
        width: 10
    }





















}
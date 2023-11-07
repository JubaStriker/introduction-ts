{
    // Conditional type

    type a1 = false;
    type b1 = string;

    type x = a1 extends undefined ? true : false;
    type y = a1 extends undefined ? true : b1 extends undefined ? undefined : false;




























}
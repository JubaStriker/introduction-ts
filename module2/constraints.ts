{
    // Constraints

    const addCourseToStudent = <T extends { name: string; id: number; email: string }>(student: T) => {
        const course = 'Next level web development'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 12,
        name: 'Jubair',
        email: 'jubair@gmail.com',
        devType: 'NLWB'
    })

    const student2 = addCourseToStudent({
        id: 17,
        name: 'Mahi',
        email: 'mahi@gmail.com',
        hasWatch: true
    })

    const student3 = addCourseToStudent({
        id: 10,
        name: 'Ashik',
        email: 'ashik@gmail.com',
        emni: 'emni'
    });
}
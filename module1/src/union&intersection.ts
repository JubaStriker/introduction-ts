type FrontendDeveloper = {
    skills: string[];
    designation1: 'frontendDeveloper'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'backendDeveloper'
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper; // This is intersection type

type Developer = FrontendDeveloper | BackendDeveloper; // This is union type

const developer: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'JS'],
    designation1: 'frontendDeveloper',
    designation2: 'backendDeveloper'
};
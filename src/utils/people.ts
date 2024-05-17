import { Person } from "../types";

const rockyObj: Person = {
    Name: "Rocky",
    "Favorite Food": "Sushi",
    "Favorite Movie": "Back to The Future",
    Status: "Inactive",
};
const miroslavObj: Person = {
    Name: "Miroslav",
    "Favorite Food": "Sushi",
    "Favorite Movie": "American Psycho",
    Status: "Active",
};
const donnyObj: Person = {
    Name: "Donny",
    "Favorite Food": "Singapore chow mei fun",
    "Favorite Movie": "The Princess Bride",
    Status: "Inactive",
};
const mattObj: Person = {
    Name: "Matt",
    "Favorite Food": "Brisket Tacos",
    "Favorite Movie": "The Princess Bride",
    Status: "Active",
};

const DouglasObj: Person = {
    Name: "Douglas Menjivar",
    "Favorite Food": "Pizza",
    "Favorite Movie": "Jumanji",
    Status: "Active",
};

export const Persons: Person[] = [
    rockyObj,
    miroslavObj,
    donnyObj,
    mattObj,
    DouglasObj,
];

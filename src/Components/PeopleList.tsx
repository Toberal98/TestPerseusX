import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Person } from "../types";
import { Persons } from "../utils/people";
import { sortByProperty } from "../utils";
import PeopleDropdown from "./PeopleDropdown";


const PeopleList = () => {
    const currentlyDate = new Date().toISOString().split('T')[0];
    const [selectedProperty, setSelectedProperty] = useState<keyof Person>('Name');

    Persons.forEach(person => person['Date'] = currentlyDate);

    const activePerson = sortByProperty(Persons.filter(person => person['Status'] === 'Active'), selectedProperty);

    const onSelectedPropertyChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setSelectedProperty(e.target.value as keyof Person);
    }

    return (
        <div className="container mt-4">
            
            <PeopleDropdown selectedProperty={selectedProperty}  onSelectedPropertyChange={onSelectedPropertyChange}/>
            {activePerson.length > 0 ? (
                <div className="row">
                    {activePerson.map((person, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-title"><strong>Name:</strong> {person['Name']}</p>
                                    <p className="card-text"><strong>Date:</strong> {person['Date']}</p>
                                    <p className="card-text"><strong>Favorite Movie:</strong> {person['Favorite Movie']}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No active records found.</p>
            )}
        </div>
    );
}

export default PeopleList;

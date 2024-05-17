import React from "react";

interface PeopleDropdownProps {
    selectedProperty: string;
    onSelectedPropertyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PeopleDropdown = ({
    selectedProperty,
    onSelectedPropertyChange,
}: PeopleDropdownProps) => {
    return (
        <div className="mb-3">
            <select
                id="property-select"
                className="form-select"
                value={selectedProperty}
                onChange={onSelectedPropertyChange}
            >
                <option value="Name">Name</option>
                <option value="Favorite Food">Favorite Food</option>
                <option value="Favorite Movie">Favorite Movie</option>
            </select>
        </div>
    );
};

export default PeopleDropdown;

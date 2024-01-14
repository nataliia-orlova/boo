import { useState } from 'react';

function Checkbox({ filterItemValue, filterItemGroup, checkHandler }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
        checkHandler(filterItemGroup, filterItemValue);
    };

    return (
        <label htmlFor={filterItemValue.id}>
            <input
                type='checkbox'
                id={filterItemValue.id}
                checked={isChecked}
                onChange={handleOnChange}
            />
            <span>{filterItemValue.name}</span>
        </label>
    );
}

export default Checkbox;

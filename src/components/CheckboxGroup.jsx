import Checkbox from '../components/Checkbox';

function CheckboxGroup({ filterItem, checkHandler }) {
    return (
        <div className='filter__block'>
            <div className='filter__block-title'>
                <span>{filterItem.group}</span>
            </div>
            <div className='filter__block-content'>
                {filterItem.values.map((filterItemValue) => (
                    <Checkbox
                        key={filterItemValue.id}
                        filterItemValue={filterItemValue}
                        filterItemGroup={filterItem.group}
                        checkHandler={checkHandler}
                    />
                ))}
            </div>
        </div>
    );
}

export default CheckboxGroup;

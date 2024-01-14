import CheckboxGroup from './CheckboxGroup';

export default function Filters({ handleFilter }) {
    let filters = [
        {
            group: 'Genre',
            values: [
                {
                    id: 'detective',
                    name: 'Detective stories',
                    checked: false,
                },
                {
                    id: 'biographies',
                    name: 'Biographies',
                    checked: false,
                },
                {
                    id: 'fantasy',
                    name: 'Fantasy',
                    checked: false,
                },
                {
                    id: 'sci-fi',
                    name: 'Science Fiction',
                    checked: false,
                },
                {
                    id: 'adventures',
                    name: 'Adventures',
                    checked: false,
                },
                {
                    id: 'classic',
                    name: 'Classic books',
                    checked: false,
                },
            ],
        },
        {
            group: 'Age',
            values: [
                {
                    id: 'early-reader',
                    name: 'Early reader 6-10',
                    checked: false,
                },
                {
                    id: 'middle-grade',
                    name: 'Middle Grade 8-12',
                    checked: false,
                },
                {
                    id: 'young-adult',
                    name: 'Young adult',
                    checked: false,
                },
                {
                    id: 'adult',
                    name: 'Adult',
                    checked: false,
                },
            ],
        },
        {
            group: 'Language',
            values: [
                {
                    id: 'dutch',
                    name: 'Dutch',
                    checked: false,
                },
                {
                    id: 'english',
                    name: 'English',
                    checked: false,
                },
                {
                    id: 'german',
                    name: 'German',
                    checked: false,
                },
                {
                    id: 'ukrainian',
                    name: 'Ukrainian',
                    checked: false,
                },
            ],
        },
    ];

    const checkHandler = (group, item) => {
        filters.forEach((item) => {
            if (item.group === group) {
                item.values.forEach((value) => {
                    if (value.id === item.id) {
                        value.checked = !value.checked;
                    }
                });
            }
        });

        handleFilter(item.name);
    };

    return (
        <div className='product-list__filter'>
            <aside className='filter'>
                <div className='filter__content'>
                    {filters.map((filterItem) => (
                        <CheckboxGroup
                            key={filterItem.group}
                            filterItem={filterItem}
                            checkHandler={checkHandler}
                        />
                    ))}
                </div>
            </aside>
        </div>
    );
}

export default function Sort({ products, handleSelect }) {
    return (
        <div className='product-list__sort'>
            <label htmlFor='select'>Sort by</label>
            <select
                value={products}
                onChange={(e) => handleSelect(e.target.selectedIndex)}
                name='sort'
                id='select'
            >
                <option value=''>Choose</option>
                <option value='rating'>Popularity</option>
                <option value='ascending'>Price ascending</option>
                <option value='descending'>Price descending</option>
            </select>
        </div>
    );
}

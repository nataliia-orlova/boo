import { useState } from 'react';

//  count is quantity

function ClickCounter() {
    const [count, setCount] = useState(0);
    function decrement() {
        setCount(count - 1);
    }
    function increment() {
        setCount(count + 1);
    }
    console.log(count);
    return (
        <div className='cart__item-qty'>
            <button
                className='cart__btn--decrement btn btn-warning'
                onClick={decrement}
            >
                -
            </button>
            <span className='cart__item-qty-display'>
                {count > 0 ? count : '1'}
            </span>
            <button
                className='cart__btn--increment btn btn-primary'
                onClick={increment}
            >
                +
            </button>
        </div>
    );
}

export default ClickCounter;

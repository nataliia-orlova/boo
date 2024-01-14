import React from 'react';
import { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [submittedEmail, setSubmittedEmail] = useState('');

    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setSubmittedEmail(email);
        setEmail('');

        setSubmittedName(name);
        setName('');
    }

    return (
        <div className='bg-light'>
            <div>
                {!submittedEmail ? (
                    <div className='form container'>
                        <div className='form__heading'>
                            <h2>
                                Subscribe to get news and updates directly to
                                your mailbox
                            </h2>
                            <p>
                                You will receive information about upcoming
                                books, sales, and new blog articles.
                            </p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            action=''
                            method=''
                            className='form__body'
                        >
                            <label htmlFor='name'>Name:</label>
                            <input
                                type='text'
                                name='name'
                                value={name}
                                id='name'
                                placeholder='Enter your name'
                                required
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                value={email}
                                id='email'
                                placeholder='Enter your email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div>
                                <p>
                                    Would you like to reiceive our news and
                                    promotions?
                                </p>
                                <input
                                    type='checkbox'
                                    id='yes'
                                    value='yes'
                                    required
                                />
                                <label htmlFor='yes'>
                                    Yes, I would like that!
                                </label>
                            </div>
                            <button className='btn btn-warning' type='submit'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                ) : (
                    <div
                        style={{
                            paddingTop: '120px',
                            paddingRight: '520px',
                            paddingLeft: '520px',
                            paddingBottom: '220px',
                        }}
                    >
                        <h3 style={{ textAlign: 'center', lineHeight: '36px' }}>
                            Thank you for subscription {''}
                            {submittedName}
                            {''}! <br></br>Your email {''}
                            {submittedEmail}
                            {''} is added to our list!
                        </h3>
                    </div>
                )}
            </div>
            {/* </div> */}
        </div>
    );
}

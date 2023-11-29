import React from 'react';
import Products from './Products';

export default function ProductsList() {
    return (
        <main>
            <section className="bg-light bg-gradient">
                <div className="product-list__content container py-5">
                    <div className="product-list__filter">
                        <aside className="filter">
                            <div className="filter__content">
                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Filters</span>
                                    </div>
                                    <div className="on-sale filter__block-content">
                                        <label htmlFor="on-sale">
                                            <input
                                                type="checkbox"
                                                id="on-sale"
                                                value="onSale"
                                                data-name="On Sale"
                                            />
                                            <span>On Sale</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Availability</span>
                                    </div>
                                    <div className="filter__block-content">
                                        <label htmlFor="in-stock">
                                            <input
                                                type="checkbox"
                                                id="in-stock"
                                                value="in-stock"
                                                name="availability"
                                                data-name="In Stock"
                                            />
                                            <span>In Stock</span>
                                        </label>
                                        <label htmlFor="comming-soon">
                                            <input
                                                type="checkbox"
                                                id="comming-soon"
                                                value="comming-soon"
                                                name="availability"
                                                data-name="Comming Soon"
                                            />
                                            <span>Comming Soon</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Age</span>
                                    </div>
                                    <div className="filter__block-content">
                                        <label htmlFor="early-reader">
                                            <input
                                                type="checkbox"
                                                id="early-reader"
                                                value="early-reader"
                                                name="ageRange"
                                                data-name="Early reader 6-10"
                                            />
                                            <span>Early reader 6-10</span>
                                        </label>
                                        <label htmlFor="middle-grade">
                                            <input
                                                type="checkbox"
                                                id="middle-grade"
                                                value="middle-grade"
                                                name="ageRange"
                                                data-name="Middle Grade 8-12"
                                            />
                                            <span>Middle Grade 8-12</span>
                                        </label>
                                        <label htmlFor="young-adult">
                                            <input
                                                type="checkbox"
                                                id="young-adult"
                                                value="young-adult"
                                                name="ageRange"
                                                data-name="Young-adult"
                                            />
                                            <span>Young-adult</span>
                                        </label>
                                        <label htmlFor="adult">
                                            <input
                                                type="checkbox"
                                                id="adult"
                                                value="adult"
                                                name="ageRange"
                                                data-name="Adult"
                                            />
                                            <span>Adult</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Category</span>
                                    </div>
                                    <div className="category filter__block-content">
                                        <label htmlFor="detective">
                                            <input
                                                type="checkbox"
                                                id="detective"
                                                value="detective"
                                                name="category"
                                                data-name="Detective Stories"
                                            />
                                            <span>Detective stories</span>
                                        </label>
                                        <label htmlFor="biographies">
                                            <input
                                                type="checkbox"
                                                id="biographies"
                                                value="biographies"
                                                name="category"
                                                data-name="Biographies"
                                            />
                                            <span>Biographies</span>
                                        </label>
                                        <label htmlFor="fantasy">
                                            <input
                                                type="checkbox"
                                                id="fantasy"
                                                value="fantasy"
                                                name="category"
                                                data-name="Fantasy"
                                            />
                                            <span>Fantasy</span>
                                        </label>
                                        <label htmlFor="sci-fi">
                                            <input
                                                type="checkbox"
                                                id="sci-fi"
                                                value="sci-fi"
                                                name="category"
                                                data-name="Science Fiction"
                                            />
                                            <span>Science Fiction</span>
                                        </label>
                                        <label htmlFor="adventures">
                                            <input
                                                type="checkbox"
                                                id="adventures"
                                                value="adventures"
                                                name="category"
                                                data-name="Adventures"
                                            />
                                            <span>Adventures</span>
                                        </label>
                                        <label htmlFor="classic">
                                            <input
                                                type="checkbox"
                                                id="classic"
                                                value="classic"
                                                name="category"
                                                data-name="Classic Books"
                                            />
                                            <span>Classic books</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Language</span>
                                    </div>
                                    <div className="language filter__block-content">
                                        <label htmlFor="dutch">
                                            <input
                                                type="checkbox"
                                                id="dutch"
                                                value="dutch"
                                                name="language"
                                                data-name="Dutch"
                                            />
                                            <span>Dutch</span>
                                        </label>
                                        <label htmlFor="english">
                                            <input
                                                type="checkbox"
                                                id="english"
                                                value="english"
                                                name="language"
                                                data-name="English"
                                            />
                                            <span>English</span>
                                        </label>
                                        <label htmlFor="german">
                                            <input
                                                type="checkbox"
                                                id="german"
                                                value="german"
                                                name="language"
                                                data-name="German"
                                            />
                                            <span>German</span>
                                        </label>
                                        <label htmlFor="ukrainian">
                                            <input
                                                type="checkbox"
                                                id="ukrainian"
                                                value="ukrainian"
                                                name="language"
                                                data-name="Ukrainian"
                                            />
                                            <span>Ukrainian</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="filter__block">
                                    <div className="filter__block-title">
                                        <span>Price</span>
                                    </div>
                                    <div className="filter__block-content">
                                        <div className="filter__price">
                                            <div className="filter__price--min">
                                                <div className="filter__price--range">
                                                    <span>from</span>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="50"
                                                    />
                                                </div>
                                            </div>
                                            <div className="filter__price--max">
                                                <div className="filter__price--range">
                                                    <span>to</span>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        step="50"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button>Apply Price</button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    <div className="product-list__display">
                        <div className="applied-filter"></div>
                        <div className="product-list__sort">
                            <label htmlFor="select">Sort by</label>

                            <select name="sort" id="select">
                                <option value="">Choose</option>
                                <option value="rating">Popularity</option>
                                <option value="ascending">
                                    Price ascending
                                </option>
                                <option value="descending">
                                    Price descending
                                </option>
                            </select>
                        </div>

                        <Products />
                    </div>
                </div>
            </section>
        </main>
    );
}

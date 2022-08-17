import React from "react";
import "./filter.css";
import { FaFilter } from "react-icons/fa";

const Filter: React.FC<{}> = () => {
    return (
        <div className="container-filter">
            <div className="header-filter">
                <FaFilter className="header-filter-icon" />
                <h3 className="header-filter-title">FILTROS</h3>
            </div>

            <div className="body-filter">
                <div className="body-filter-category">
                    <h3>CATEGORÍAS</h3>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping1"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping1"
                            className="filter-checkbox-label"
                        >
                            LITERATURA JUVENIL
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping2"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping2"
                            className="filter-checkbox-label"
                        >
                            ACTUALIDAD PERUANA
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping3"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping3"
                            className="filter-checkbox-label"
                        >
                            COMICS
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping4"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping4"
                            className="filter-checkbox-label"
                        >
                            APRENDIZAJE TEMPRANO
                        </label>
                    </div>
                </div>

                <div className="body-filter-author">
                    <h3>EDITORIAL</h3>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping5"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping5"
                            className="filter-checkbox-label"
                        >
                            PANINI
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping6"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping6"
                            className="filter-checkbox-label"
                        >
                            COMICS NORMA
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping7"
                            name="topping"
                            value=""
                        />

                        <label
                            htmlFor="topping7"
                            className="filter-checkbox-label"
                        >
                            DEBATE
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping8"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping8"
                            className="filter-checkbox-label"
                        >
                            TOMODOMO
                        </label>
                    </div>
                </div>

                <div className="body-filter-age">
                    <h3>EDAD</h3>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping9"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping9"
                            className="filter-checkbox-label"
                        >
                            JUVENIL
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping10"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping10"
                            className="filter-checkbox-label"
                        >
                            COMICS NORMA
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping11"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping11"
                            className="filter-checkbox-label"
                        >
                            DEBATE
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping12"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping12"
                            className="filter-checkbox-label"
                        >
                            TOMODOMO
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping13"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping13"
                            className="filter-checkbox-label"
                        >
                            MAYORES DE 16
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping14"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping14"
                            className="filter-checkbox-label"
                        >
                            ADULTOS
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping15"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping15"
                            className="filter-checkbox-label"
                        >
                            MAYORES DE 14
                        </label>
                    </div>

                    <div className="topping">
                        <input
                            type="checkbox"
                            id="topping16"
                            name="topping"
                            value=""
                        />
                        <label
                            htmlFor="topping16"
                            className="filter-checkbox-label"
                        >
                            DE 0 A 2 AÑOS
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;

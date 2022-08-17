import React, { useState, useEffect } from "react";
import Filter from "../filters/Filter";
import Card from "../card/card";
import books from "../../models/books.json";
import { Book } from "../listCards/cards";

import "./categoryListCards.css";
import Dropdown from "../dropdown/Dropdown";

const CategoryListCards: React.FC<{}> = () => {
    const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);

    useEffect(() => {
        setBooksSeller(books);
    }, []);
    return (
        <div className="app-container-categoryListCards">
            <div className="wrapper-categoryListCards">
                <Filter />
                <div className="categoryListCards-cards">
                    <div className="categoryListCards-cards-header">
                        <h3 className="categoryListCards-cards-title">
                            ESTÁS VIENDO 18 PRODUCTOS
                        </h3>
                        <div className="categoryListCards-cards-header-orderby">
                            <Dropdown
                                title="ORDENAR POR: PRECIOS MÁS ALTO"
                                items={[
                                    "Más Reciente",
                                    "Descuento",
                                    "Precio más alto",
                                    "Precio más bajos",
                                    "Ordenar título de A-Z",
                                    "Ordenar título de Z-A",
                                ]}
                            />
                        </div>
                    </div>
                    <div className="categoryListCards-card-content">
                        <Card booksSeller={booksSeller} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryListCards;

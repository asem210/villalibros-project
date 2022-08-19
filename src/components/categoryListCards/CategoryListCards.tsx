import React, { useState, useEffect } from "react";
import Filter from "../filters/Filter";
import Card from "../card/card";

import "./categoryListCards.css";
import Dropdown from "../dropdown/Dropdown";
import { PropsWithUserState } from "../../models/interfaces";

const CategoryListCards: React.FC<PropsWithUserState> = (
    { booksSeller },
    userState: boolean
) => {
    const nothing = () => {};
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
                                userState={userState}
                                setUserState={nothing}
                            />
                        </div>
                    </div>
                    <div className="categoryListCards-card-content">
                        <Card booksSeller={booksSeller} userState={userState} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryListCards;

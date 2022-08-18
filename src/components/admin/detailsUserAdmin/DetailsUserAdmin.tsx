import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FcUndo } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import "../detailsBook/detailsBook.css";
import users from "../../../models/user.json";
import "./detailsUserAdmin.css";

const DetailsUserAdmin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const idNumber = Number(id);

    let user = users.find((user) => user.idcliente === idNumber);

    return (
        <div className="app-container-addBook">
            <div className="wrapper-addBookForm">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <FaRegEye className="icon-see-details" />
                    <p>
                        {user!.nombre} {user!.apellido}
                    </p>
                </div>
                <p className="header-addBookForm-desc">
                    Información del usuario administrador {user!.idcliente}
                </p>

                <div className="body-addBookForm-form">
                    <div className="wrapper-details-general wrapper-details-general--bkcolor">
                        <h3 className="subtitle-details">
                            Información del usuario
                        </h3>
                        <div className="body-addBook-details-book-general">
                            <div className="body-addBook-details-book-img">
                                <h3>Imagen</h3>
                                <img
                                    src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
                                    alt="imagen"
                                    className="form__label--file-selected form__label--file-withoutHover form__label--details"
                                />
                            </div>
                            <div className="body-addBook-details-book-about">
                                <div className="form__group">
                                    <h3>Nombres </h3>
                                    <p>{user!.nombre}</p>
                                </div>

                                <div className="form__group">
                                    <h3>Apellidos</h3>
                                    <p>{user!.apellido}</p>
                                </div>

                                <div className="body-addBook-details-book-grid">
                                    <div className="form__group">
                                        <h3>Dirección</h3>
                                        <p>
                                            San Carlos, San Juan de Lurigancho
                                        </p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>Correo </h3>
                                        <p>{user!.correo}</p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>DNI </h3>
                                        <p>{user!.dni}</p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>Teléfono / Celular </h3>
                                        <p>{999777666}</p>
                                    </div>
                                    <div className="form__group field">
                                        <h3>Fecha de Nacimiento </h3>
                                        <p>01/01/99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="wrapper-details-pyshical wrapper-details-pyshical--bkcolor">
                        <h3 className="subtitle-details">
                            Detalles físicos del libro
                        </h3>
                        <div className="body-addBook-details-book-physical">
                            <div className="form__group field form__group--center">
                                <h3>Ancho </h3>
                                <p>{book!.width} cm</p>
                            </div>

                            <div className="form__group field form__group--center">
                                <h3>Peso </h3>
                                <p>{book!.weight} kg</p>
                            </div>
                            <div className="form__group field form__group--center">
                                <h3>Altura </h3>
                                <p>{book!.height} cm</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="wrapper-details-selling wrapper-details-selling--bkcolor">
                        <h3 className="subtitle-details">Detalles de venta</h3>
                        <div className="body-addBook-details-book-selling">
                            <div className="form__group field form__group--center">
                                <h3>Precio </h3>
                                <p>S/ {book!.price}</p>
                            </div>

                            {book!.percentDiscount && (
                                <div className="form__group field form__group--center">
                                    <h3>Porcentaje de Descuento </h3>
                                    <p>{book!.percentDiscount} %</p>
                                </div>
                            )}

                            <div className="form__group field form__group--center">
                                <h3>Stock </h3>
                                <p>50 unidades</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/*  <div className="field-edit editBook-age">
                    <h3>Público </h3>
                    <p>{book!.age}</p>
                </div>

                <div className="field-edit editBook-sku">
                    <h3>SKU </h3>
                    <p>{book!.sku}</p>
                </div>

                <div className="field-edit editBook-isbn">
                    <h3>ISBN </h3>
                    <p>{book!.isbn}</p>
                </div> */}
            </div>
        </div>
    );
};

export default DetailsUserAdmin;

import React, { useState, useRef, useEffect } from "react";
import { FcUndo, FcCompactCamera } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import "../addBook/AddBookForm";

export const FormAddUserAdmin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [styleImg, setStyleImg] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>();

    const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
        setStyleImg(true);
    };

    const removeSelectedImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSelectedImage(null);
        setStyleImg(false);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert("Libro Registrado Correctamente");
    };

    return (
        <div className="app-container-addBook">
            <div className="wrapper-addBookForm">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <h2>Añadir Usuarios Administradores</h2>
                </div>
                <p className="header-addBookForm-desc">
                    Rellene el formulario con los datos del usuario
                    administrador que desea agregar
                </p>

                <form className="form-addBook">
                    <div className="body-addBookForm-form">
                        <div className="wrapper-details-general">
                            <h3> Información del Usuario </h3>
                            <div className="body-addBook-details-book-general">
                                <div className="body-addBook-details-book-img">
                                    <div className="form__group--file field">
                                        <label
                                            htmlFor="imgBook"
                                            className={
                                                styleImg
                                                    ? "form__label--file-selected"
                                                    : "form__label--file"
                                            }
                                        >
                                            <input
                                                type="file"
                                                id="imgBook"
                                                className="form__field--file"
                                                placeholder="Insertar Imagen"
                                                required
                                                onChange={(e) => imageChange(e)}
                                            />
                                            Insertar Imagen
                                            <FcCompactCamera />
                                        </label>
                                        {selectedImage && (
                                            <div className="cointainer-preview-img">
                                                <img
                                                    src={URL.createObjectURL(
                                                        selectedImage
                                                    )}
                                                    alt="Thumb"
                                                    className="img-addBook"
                                                />
                                                <button
                                                    onClick={
                                                        removeSelectedImage
                                                    }
                                                >
                                                    Eliminar imagen
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="body-addBook-details-book-about">
                                    <div className="form__group field">
                                        <input
                                            type="text"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Nombres"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            Nombres
                                        </label>
                                    </div>

                                    <div className="form__group field">
                                        <input
                                            type="text"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Apellidos"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            Apellidos
                                        </label>
                                    </div>

                                    <div className="form__group field">
                                        <input
                                            type="text"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Dirección"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            Dirección
                                        </label>
                                    </div>

                                    <div className="form__group field">
                                        <input
                                            type="email"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Correo"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            Correo
                                        </label>
                                    </div>

                                    <div className="form__group field">
                                        <input
                                            type="text"
                                            id="nameBook"
                                            className="form__field"
                                            placeholder="Correo"
                                            required
                                        />
                                        <label
                                            htmlFor="nameBook"
                                            className="form__label"
                                        >
                                            DNI
                                        </label>
                                    </div>

                                    <div className="body-addBook-details-book-grid">
                                        <div className="form__group field">
                                            <input
                                                type="number"
                                                id="editorial"
                                                placeholder="telefono"
                                                className="form__field"
                                                required
                                            />
                                            <label
                                                htmlFor="telefono"
                                                className="form__label"
                                            >
                                                Teléfono
                                            </label>
                                        </div>
                                        <div className="form__group field">
                                            <input
                                                type="date"
                                                id="nameBook"
                                                className="form__field"
                                                placeholder="Fecha de Nacimiento"
                                                required
                                            />
                                            <label
                                                htmlFor="nameBook"
                                                className="form__label"
                                            >
                                                Fecha de Nacimiento
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className="btn-add-user"
                            onClick={(e) => {
                                handleClick(e);
                            }}
                        >
                            <span>Añadir Usuario Administrador</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

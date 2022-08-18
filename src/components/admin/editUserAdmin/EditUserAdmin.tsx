import React, { useState } from "react";
import { FiSave } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import { FcUndo, FcCompactCamera } from "react-icons/fc";
import { BiEdit } from "react-icons/bi";
import users from "../../../models/user.json";
import "../editBook/editBook.css";
import "../../form/addBook/addBookForm.css";

const EditUserAdmin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const idNumber = Number(id);
    const [selectedImage, setSelectedImage] = useState<File | null>();

    const [styleImg, setStyleImg] = useState(false);
    const [styleEditName, setStyleEditName] = useState(false);
    const [styleEditLastName, setStyleEditLastName] = useState(false);
    const [styleEditDir, setStyleEditDir] = useState(false);
    const [styleEditEmail, setStyleEditEmail] = useState(false);
    const [styleEditDNI, setStyleEditDNI] = useState(false);
    const [styleEditPhone, setStyleEditPhone] = useState(false);

    let user = users.find((user) => user.idcliente === idNumber);

    const handleChange = (
        e:
            | React.FormEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        variable: String
    ) => {
        const newValue = e.currentTarget.value;
        switch (variable) {
            case "name":
                newValue ? setStyleEditName(true) : setStyleEditName(false);

                break;

            case "lastName":
                newValue
                    ? setStyleEditLastName(true)
                    : setStyleEditLastName(false);

                break;

            case "dir":
                newValue ? setStyleEditDir(true) : setStyleEditDir(false);

                break;

            case "email":
                newValue ? setStyleEditEmail(true) : setStyleEditEmail(false);

                break;

            case "dni":
                newValue ? setStyleEditDNI(true) : setStyleEditDNI(false);

                break;

            case "phone":
                newValue ? setStyleEditPhone(true) : setStyleEditPhone(false);

                break;

            default:
                break;
        }
    };

    const saveChanges = () => {
        alert("Cambios Exitosos");
    };

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

    return (
        <div className="app-container-editBook">
            <div className="wrapper-editBook">
                <div className="header-addBookForm">
                    <FcUndo
                        title="Regresar"
                        onClick={() => navigate(-1)}
                        className="goBackTo"
                    />
                    <BiEdit className="icon-edit-field" />
                    <p>
                        {user!.nombre} {user!.apellido}
                    </p>
                </div>
                <p className="header-addBookForm-desc">
                    Edite los datos del usuario administrador {user!.idcliente}{" "}
                    rellenando los campos que desea modificar.
                </p>
                <form className="form-addBook">
                    <div className="body-editBook">
                        <div className="wrapper-details-general">
                            <h3>Información del Usuario</h3>
                            <div className="body-addBook-details-book-general">
                                <div className="body-addBook-details-book-img">
                                    <div className="form__group--file field">
                                        <label
                                            htmlFor="imgBook"
                                            className="form__label--file-selected"
                                        >
                                            <input
                                                type="file"
                                                id="imgBook"
                                                name="imgBook"
                                                className="form__field--file"
                                                placeholder="Modificar Imagen"
                                                required
                                                onChange={(e) => imageChange(e)}
                                            />
                                            Modificar Imagen
                                            <FcCompactCamera />
                                        </label>

                                        {selectedImage ? (
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
                                                    Volver a la Imagen Original
                                                </button>
                                            </div>
                                        ) : (
                                            <img
                                                src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x"
                                                alt="Thumb"
                                                className="img-addBook"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="body-addBook-details-book-about">
                                    <div className="field-edit editBook-title">
                                        {styleEditName ? (
                                            <h3 className="edited-label">
                                                Nombres
                                            </h3>
                                        ) : (
                                            <h3>Nombres </h3>
                                        )}

                                        <input
                                            placeholder={user!.nombre}
                                            onChange={(e) =>
                                                handleChange(e, "name")
                                            }
                                        ></input>
                                    </div>

                                    <div className="field-edit editBook-description">
                                        {styleEditLastName ? (
                                            <h3 className="edited-label">
                                                Apellidos
                                            </h3>
                                        ) : (
                                            <h3>Apellidos</h3>
                                        )}
                                        <input
                                            placeholder={user!.apellido}
                                            onChange={(e) =>
                                                handleChange(e, "lastName")
                                            }
                                        ></input>

                                        <div className="field-edit editBook-author">
                                            {styleEditDir ? (
                                                <h3 className="edited-label">
                                                    Dirección
                                                </h3>
                                            ) : (
                                                <h3>Dirección</h3>
                                            )}

                                            <input
                                                placeholder="San Carlos, San Juan de Lurigancho"
                                                onChange={(e) =>
                                                    handleChange(e, "dir")
                                                }
                                            ></input>
                                        </div>
                                        <div className="field-edit editBook-editorial">
                                            {styleEditEmail ? (
                                                <h3 className="edited-label">
                                                    Correo
                                                </h3>
                                            ) : (
                                                <h3>Correo</h3>
                                            )}

                                            <input
                                                placeholder={user!.correo}
                                                onChange={(e) =>
                                                    handleChange(e, "email")
                                                }
                                            ></input>
                                        </div>

                                        <div className="field-edit editBook-anyo">
                                            {styleEditDNI ? (
                                                <h3 className="edited-label">
                                                    DNI
                                                </h3>
                                            ) : (
                                                <h3>DNI</h3>
                                            )}

                                            <input
                                                type="number"
                                                placeholder={String(user!.dni)}
                                                onChange={(e) =>
                                                    handleChange(e, "dni")
                                                }
                                            ></input>
                                        </div>

                                        <div className="field-edit editBook-language">
                                            {styleEditPhone ? (
                                                <h3 className="edited-label">
                                                    Teléfono / Celular
                                                </h3>
                                            ) : (
                                                <h3>Teléfono / Celular</h3>
                                            )}
                                            <input
                                                placeholder={String(999777666)}
                                                onChange={(e) =>
                                                    handleChange(e, "language")
                                                }
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn-add-book" onClick={saveChanges}>
                            <FiSave />
                            <span>Guardar Cambios</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUserAdmin;

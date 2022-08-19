import React, { useState } from "react";
import { NavBarDefault } from "../../components/navBar/navBar";
import { ComprarHeader } from "../../components/header/header";
import { HiIdentification } from "react-icons/hi";
import { Footer } from "../../components/footer/footer";

import "./finalizarComprar.css";
import { InputDefault, InputPassword } from "../../components/input/input";
import { ButtonComprar, ButtonDescuento } from "../../components/button/button";
import toast from "react-hot-toast";
export const FinalizarCompra: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void; // correo
    userValue: string; // correo
}> = ({ userState, setUserState, setUserValue, userValue }) => {
    const [nameValue, setNameValue] = useState("");
    const [nametState, setNameState] = useState(false);

    const [lastNameValue, setLastNameValue] = useState("");
    const [lastNameState, setLastNameState] = useState(false);

    const [codigoValue, setcodigoValue] = useState("");
    const [codigoState, secodigoState] = useState(false);

    const [fechaValue, setfechaValue] = useState("");
    const [fechaState, setfechaState] = useState(false);

    const [cvvValue, setcvvValue] = useState("");
    const [cvvdState, setcvvState] = useState(false);

    const [cuponValue, setcuponValue] = useState("");
    const [cuponState, setcuponState] = useState(false);

    const CuponLogic = (codigo: boolean) => {
        if (codigo === true) {
            toast.success("Cupon aplicado");
        }
    };

    const ComprarLogic = (
        name: boolean,
        lastname: boolean,
        codigo: boolean,
        cvv: boolean,
        fecha: boolean
    ) => {
        if (name === false) {
            toast.error("Nombre no valido, revisar el error indicado.");
        }
        if (lastname === false) {
            toast.error("Apellido no valido, revisar el error indicado.");
        }
        if (codigo === false) {
            toast.error(
                "Número de codigo de tarjeta no valido, revisar el error indicado."
            );
        }
        if (cvv === false) {
            toast.error("Número de cvv no valido, revisar el error indicado.");
        }
        if (fecha === false) {
            toast.error(
                "fecha de vencimiento no valido, revisar el error indicado."
            );
        }

        if (
            name === true &&
            lastname === true &&
            cvv === true &&
            fecha === true &&
            codigo === true
        ) {
            toast.success("Compra exitosa");
        }
    };

    return (
        <div className="app-container-comprarPagina">
            <NavBarDefault
                userState={userState}
                setUserState={(txt: boolean) => setUserState(txt)}
                setUserValue={(txt: string) => setUserValue(txt)}
                userValue={userValue}
            />
            <ComprarHeader />
            <div className="app-container-comprar">
                <div className="wrapper-comprar">
                    <div className="app-container-comprar-tarjeta">
                        <div className="app-container-comprar-identificacion">
                            <HiIdentification size={20} />
                            <label>Identificación</label>
                        </div>
                        <label>
                            Solicitamos la información necesario para finalizar
                            el préstamo de los libros
                        </label>
                        <div className="app-container-form-comprar">
                            <div className="app-container-nombre-apelliado">
                                <InputDefault
                                    estado={nametState}
                                    campo={nameValue}
                                    cambiarEstado={(txt: boolean) =>
                                        setNameState(txt)
                                    }
                                    cambiarCampo={(txt: string) =>
                                        setNameValue(txt)
                                    }
                                    tipo="text"
                                    label="Nombres"
                                    placeholder="Ejemplo : Gustavo Adrián"
                                    leyendaError="Error: solo debe contener caracteres alfabéticos"
                                    expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
                                />

                                <InputDefault
                                    estado={lastNameState}
                                    campo={lastNameValue}
                                    cambiarEstado={(txt: boolean) =>
                                        setLastNameState(txt)
                                    }
                                    cambiarCampo={(txt: string) =>
                                        setLastNameValue(txt)
                                    }
                                    tipo="text"
                                    label="Apellidos"
                                    placeholder="Ejemplo : Pazos Medina"
                                    leyendaError="Error: solo debe contener caracteres alfabéticos"
                                    expresionRegular={/^[a-zA-ZÀ-ÿ\s]{1,40}$/}
                                />
                            </div>

                            <div className="app-container-comprar-codigo">
                                <InputDefault
                                    estado={codigoState}
                                    campo={codigoValue}
                                    cambiarEstado={(txt: boolean) =>
                                        secodigoState(txt)
                                    }
                                    cambiarCampo={(txt: string) =>
                                        setcodigoValue(txt)
                                    }
                                    tipo="text"
                                    label="Numero de Tarjeta"
                                    placeholder="Ejemplo : 44557 8804 3284 2148"
                                    leyendaError="Error: solo debe contener caracteres numericos"
                                    expresionRegular={/^\d{16}$/}
                                />
                            </div>

                            <div className="app-container-nombre-apelliado">
                                <InputPassword
                                    estado={cvvdState}
                                    campo={cvvValue}
                                    cambiarEstado={(txt: boolean) =>
                                        setcvvState(txt)
                                    }
                                    cambiarCampo={(txt: string) =>
                                        setcvvValue(txt)
                                    }
                                    label="CVV"
                                    placeholder="Debe contener 3 caracteres numérico"
                                    leyendaError="Error: Debe contener 3 números"
                                    expresionRegular={/^\d{3}$/}
                                />

                                <InputDefault
                                    estado={fechaState}
                                    campo={fechaValue}
                                    cambiarEstado={(txt: boolean) =>
                                        setfechaState(txt)
                                    }
                                    cambiarCampo={(txt: string) =>
                                        setfechaValue(txt)
                                    }
                                    tipo="text"
                                    label="Fecha de Vencimiento"
                                    placeholder="Ejemplo : 04/22"
                                    leyendaError="Error: debe seguir el formato MM/AA"
                                    expresionRegular={
                                        /^(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[1-9])$/
                                    }
                                />
                            </div>
                        </div>
                        <div className="app-container-comprar-button">
                            <ButtonComprar
                                name={nametState}
                                lastname={lastNameState}
                                cvv={cvvdState}
                                fechaven={fechaState}
                                codigo={codigoState}
                                placeholder="FINALIZAR COMPRA"
                                handleClick={(
                                    name: boolean,
                                    lastname: boolean,
                                    codigo: boolean,
                                    cvv: boolean,
                                    fechaven: boolean
                                ) =>
                                    ComprarLogic(
                                        name,
                                        lastname,
                                        codigo,
                                        cvv,
                                        fechaven
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="app-container-comprar-Resumen">
                        <div className="app-container-comprar-input">
                            <InputDefault
                                estado={cuponState}
                                campo={cuponValue}
                                cambiarEstado={(txt: boolean) =>
                                    setcuponState(txt)
                                }
                                cambiarCampo={(txt: string) =>
                                    setcuponValue(txt)
                                }
                                tipo="text"
                                label="Cupon de Descuento"
                                placeholder="Ejemplo : 4x576-89752x"
                                leyendaError="Error: Cupon no valido"
                                expresionRegular={/^[a-zA-ZÀ-ÿ\s]{8,10}$/}
                            />
                        </div>

                        <div className="app-container-comprar-buton">
                            <ButtonDescuento
                                codigo={cuponState}
                                placeholder="APLICAR"
                                handleClick={(codigo: boolean) =>
                                    CuponLogic(codigo)
                                }
                            />
                        </div>

                        <div className="app-container-Resumen">
                            <label>Resumen del Préstamo</label>

                            <div className="app-container-barra"></div>

                            <div className="app-container-Resumen-subtotal">
                                <div className="app-container-Resumen-subtotal_1">
                                    <label>Sub Total</label>
                                </div>

                                <div className="app-container-Resumen-subtotal_2">
                                    <label>S/.155.00</label>
                                </div>
                            </div>

                            <div className="app-container-Resumen-descuento">
                                <div className="app-container-Resumen-descuento_1">
                                    <label>Descuentos</label>
                                </div>

                                <div className="app-container-Resumen-descuento_2">
                                    <label>S/.-77.50</label>
                                </div>
                            </div>
                            <div className="app-container-barra"></div>

                            <div className="app-container-Resumen-Total">
                                <div className="app-container-Resumen-Total_1">
                                    <label>Total</label>
                                </div>

                                <div className="app-container-Resumen-Total_2">
                                    <label>S/.105.10</label>
                                </div>
                            </div>
                            <label> Ingrese una nota para su pedido :</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ingrese su nota"
                            />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

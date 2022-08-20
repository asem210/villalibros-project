//Librerias
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Componentes
import { Searchbox } from "../searchBox/searchBox";
import { ModalLogin, ModalRegister } from "../modals/modals";

//Icons
import { BsPersonCircle, BsCart } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

//CSS
import "./navBar.css";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Tooltip from "rc-tooltip";

//Toast
import { toast } from "react-hot-toast";

//User
import users from "../../models/user.json";

import Dropdown from "../dropdown/Dropdown";

export const NavBarDefault: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void;
    userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
    const [modalStateLogin, SetModalStateLogin] = useState(false);
    const navigate = useNavigate();
    const [modalStateRegister, SetModalStateRegister] = useState(false);
    const [emailValue, setEmailValue] = useState("");

    const { openCart, cartQuantity } = useShoppingCart();

    const toHistory = () => {
        navigate("/history");
    };

    const MostrarState = () => {
        userState ? toast("Estás en tu cuenta") : toast("Inicia sesión");
    };

    const user = users.find((user) => user.correo === userValue);

    const returnUserAdmin = () => {
        if (user?.role === "ADMIN") {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="app-container-navBar-header">
            <div className="app-container-navBar">
                <Tooltip
                    overlayStyle={{
                        color: "#17a2b8",
                        borderRadius: "1rem",
                    }}
                    overlayInnerStyle={{
                        backgroundColor: "#17a2b8",
                        color: "white",
                        border: "none",
                        minHeight: "10px",
                    }}
                    mouseLeaveDelay={0}
                    placement="bottom"
                    trigger={["hover"]}
                    overlay={<span>Click para ir a la página de inicio</span>}
                >
                    <div className="app-container-navBar-Logo">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1dk1XPtnOFFozdM5gVrO5Jl7poi6hrZLi"
                            alt="Villalibros Logo"
                            title="Logo Villalibros"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </Tooltip>

                <div className="app-container-navBar-searchbox">
                    <Searchbox
                        placeholder="Buscar por líbro, autor o categoría"
                        handleSearch={() => toast.success("Libros encontrados")}
                    />
                </div>

                <div className="app-container-navBar-links">
                    {userState ? (
                        <div className="app-container-navBar-login-register">
                            <div className="app-container-navBar-user">
                                <BsPersonCircle
                                    className="icon icon-user"
                                    onClick={() => SetModalStateLogin(true)}
                                />

                                {/* <p onClick={MostrarState}>{userValue}</p> */}
                                <Dropdown
                                    title={userValue}
                                    items={["Cerrar Sesión"]}
                                    userState={userState}
                                    setUserState={setUserState}
                                />
                            </div>

                            <ModalLogin
                                state={modalStateLogin}
                                handleChange={SetModalStateLogin}
                                registerState={modalStateRegister}
                                handleRegister={SetModalStateRegister}
                                userState={userState}
                                setUserState={(txt: boolean) =>
                                    setUserState(txt)
                                }
                                emailValue={emailValue}
                                setEmail={(txt: string) => setEmailValue(txt)}
                                setUserValue={(txt: string) =>
                                    setUserValue(txt)
                                }
                            />

                            <ModalRegister
                                state={modalStateLogin}
                                handleChange={SetModalStateLogin}
                                registerState={modalStateRegister}
                                handleRegister={SetModalStateRegister}
                            />
                        </div>
                    ) : (
                        <Tooltip
                            overlayStyle={{
                                color: "#17a2b8",
                                borderRadius: "1rem",
                            }}
                            overlayInnerStyle={{
                                backgroundColor: "#17a2b8",
                                color: "white",
                                border: "none",
                                width: "12rem",
                                minHeight: "10px",
                            }}
                            mouseLeaveDelay={0}
                            placement="bottom"
                            trigger={["hover"]}
                            overlay={
                                <span>
                                    ¿Tienes cuenta? Accede desde aquí. Y si no
                                    lo tienes ¡Click para registrarte!
                                </span>
                            }
                        >
                            <div className="app-container-navBar-login-register">
                                <div className="app-container-navBar-user">
                                    <BsPersonCircle
                                        className="icon icon-user"
                                        onClick={() => SetModalStateLogin(true)}
                                    />

                                    <p onClick={() => SetModalStateLogin(true)}>
                                        Iniciar Sesión / Registrarse
                                    </p>
                                </div>

                                <ModalLogin
                                    state={modalStateLogin}
                                    handleChange={SetModalStateLogin}
                                    registerState={modalStateRegister}
                                    handleRegister={SetModalStateRegister}
                                    userState={userState}
                                    setUserState={(txt: boolean) =>
                                        setUserState(txt)
                                    }
                                    emailValue={emailValue}
                                    setEmail={(txt: string) =>
                                        setEmailValue(txt)
                                    }
                                    setUserValue={(txt: string) =>
                                        setUserValue(txt)
                                    }
                                />

                                <ModalRegister
                                    state={modalStateLogin}
                                    handleChange={SetModalStateLogin}
                                    registerState={modalStateRegister}
                                    handleRegister={SetModalStateRegister}
                                />
                            </div>
                        </Tooltip>
                    )}

                    <Tooltip
                        overlayStyle={{
                            color: "#17a2b8",
                            borderRadius: "1rem",
                        }}
                        overlayInnerStyle={{
                            backgroundColor: "#17a2b8",
                            color: "white",
                            border: "none",
                            width: "12rem",
                            minHeight: "10px",
                        }}
                        mouseLeaveDelay={0}
                        placement="bottom"
                        trigger={["hover"]}
                        overlay={
                            <span>
                                ¡Click para ver todos los libros que te haz
                                prestado, recuerda iniciar sesión!
                            </span>
                        }
                    >
                        <div className="app-container-navBar-history">
                            <BiCalendar className="icon icon-history" />
                            {userState ? (
                                <p onClick={toHistory}>
                                    Historial de Préstamos
                                </p>
                            ) : (
                                <p
                                    onClick={() =>
                                        toast(
                                            "Inicia sesión para acceder a tu historial"
                                        )
                                    }
                                >
                                    Historial de Préstamos
                                </p>
                            )}
                        </div>
                    </Tooltip>

                    <Tooltip
                        overlayStyle={{
                            color: "#17a2b8",
                            borderRadius: "1rem",
                        }}
                        overlayInnerStyle={{
                            backgroundColor: "#17a2b8",
                            color: "white",
                            border: "none",
                            width: "12rem",
                            minHeight: "10px",
                        }}
                        mouseLeaveDelay={0}
                        placement="bottom"
                        trigger={["hover"]}
                        overlay={
                            <span>
                                El Carrito de Libros contiene los libros que has
                                ordenado. ¡Accede para finalizar tu préstamo!
                            </span>
                        }
                    >
                        <div
                            className="app-container-navBar-cart"
                            onClick={() => openCart(userState)}
                        >
                            <div className="counter-orders">
                                <BsCart className="icon icon-cart" />
                                {cartQuantity > 0 && (
                                    <span className="cart-badge">
                                        {cartQuantity}
                                    </span>
                                )}
                            </div>
                            <p>Carrito de Libros</p>
                        </div>
                    </Tooltip>

                    {userState && returnUserAdmin() && (
                        <div className="app-container-navBar-admin-options">
                            <MdOutlineAdminPanelSettings className="icon icon-admin" />
                            <p onClick={() => navigate("/admin")}>
                                Opciones de administración
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

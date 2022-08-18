import React, { useState, useEffect } from "react";

import "./homeAdmin.css";

import { useNavigate } from "react-router-dom";
import { Book } from "../../listCards/cards";
import books from "../../../models/books.json";
import { User } from "../../../models/interfaces";
import users from "../../../models/user.json";

//icons
import { GiBlackBook } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

//Dialog
import Dialog from "../../dialog/Dialog";

//Tooltip
import Tooltip from "rc-tooltip";

export const HomeAdmin: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [booksSeller, setBooksSeller] = useState<Array<Book>>([]);
    const [userAdmin, setUserAdmin] = useState<Array<User>>([]);

    useEffect(() => {
        setBooksSeller(books);
        setUserAdmin(users);
    }, []);

    const [showTaskDialog, setShowTaskDialog] = useState(false);
    const [showTaskDialogUserAdmin, setShowTaskDialogUserAdmin] =
        useState(false);

    const confirm = () => {
        setShowTaskDialog(false);
    };

    const cancel = () => {
        setShowTaskDialog(false);
    };

    const confirmUserAdmin = () => {
        setShowTaskDialogUserAdmin(false);
    };

    const cancelUserAdmin = () => {
        setShowTaskDialogUserAdmin(false);
    };

    return (
        <div className="app-container-home-admin">
            <div className="wrapper-home-admin">
                <div className="wrapper-home-admin-header">
                    <h2>Bienvenido, Jordy</h2>
                </div>

                <div className="container-manage-books">
                    <div className="container-manage-books-header">
                        <GiBlackBook />
                        <h3>Gestionar Libros</h3>
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
                            overlay={<span>Click para añadir un libro</span>}
                        >
                            <button
                                className="btns-manage-add"
                                onClick={() => navigate("/addBook")}
                            >
                                Añadir Libro
                            </button>
                        </Tooltip>
                    </div>

                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Libro</th>
                                    <th>Título</th>
                                    <th>Precio</th>
                                    <th>Descuento</th>
                                    <th>Stock</th>
                                    <th>Administrar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {booksSeller.map((book) => {
                                    return (
                                        <tr key={book.id}>
                                            <td>{book.id}</td>
                                            <td>{book.title}</td>
                                            <td>S/ {book.price}</td>
                                            <td>
                                                {book.percentDiscount
                                                    ? `${book.percentDiscount}%`
                                                    : "Sin descuento"}
                                            </td>

                                            <td>50</td>
                                            <td className="wrapper-btns-manage">
                                                <ul className="btns-manage">
                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                Click para
                                                                editar libro{" "}
                                                                {book.id}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-edit"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/editBook/${book.id}`
                                                                )
                                                            }
                                                        >
                                                            Editar
                                                        </li>
                                                    </Tooltip>

                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                Click para ver
                                                                detalles del
                                                                libro {book.id}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-detail"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/detailsBook/${book.id}`
                                                                )
                                                            }
                                                        >
                                                            Detalles
                                                        </li>
                                                    </Tooltip>

                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                ¡Cuidado! Click
                                                                para eliminar el
                                                                libro {book.id}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-delete"
                                                            onClick={() =>
                                                                setShowTaskDialog(
                                                                    true
                                                                )
                                                            }
                                                        >
                                                            Eliminar
                                                        </li>
                                                    </Tooltip>

                                                    <Dialog
                                                        show={showTaskDialog}
                                                        title="Eliminar libro"
                                                        description={`¿Estás seguro de eliminar este libro?`}
                                                        confirm={confirm}
                                                        cancel={cancel}
                                                    />
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* TABLA PARA LOS USUARIOS  */}
                <div className="container-manage-users">
                    <div className="container-manage-users-header">
                        <FaUsers />
                        <h3>Gestionar Usuarios Administradores</h3>
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
                            overlay={<span>Click para añadior un usuario</span>}
                        >
                            <button
                                className="btns-manage-add"
                                onClick={() => navigate("/addUserAdmin")}
                            >
                                Añadir Usuario Admin
                            </button>
                        </Tooltip>
                    </div>

                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID Admin</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Teléfono</th>
                                    <th>DNI</th>
                                    <th>Correo</th>
                                    <th>Administrar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {userAdmin.map((user) => {
                                    return (
                                        <tr key={user.idcliente}>
                                            <td>{user.idcliente}</td>
                                            <td>{user.nombre}</td>
                                            <td>{user.apellido}</td>
                                            <td>{user.telefono}</td>
                                            <td>{user.dni}</td>

                                            <td>{user.correo}</td>
                                            <td className="wrapper-btns-manage">
                                                <ul className="btns-manage">
                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                Click para
                                                                editar usuario{" "}
                                                                {user.idcliente}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-edit"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/editUserAdmin/${user.idcliente}`
                                                                )
                                                            }
                                                        >
                                                            Editar
                                                        </li>
                                                    </Tooltip>

                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                Click para ver
                                                                detalles del
                                                                usuario{" "}
                                                                {user.idcliente}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-detail"
                                                            onClick={() =>
                                                                navigate(
                                                                    `/detailsUserAdmin/${user.idcliente}`
                                                                )
                                                            }
                                                        >
                                                            Detalles
                                                        </li>
                                                    </Tooltip>

                                                    <Tooltip
                                                        overlayStyle={{
                                                            color: "#17a2b8",
                                                            borderRadius:
                                                                "1rem",
                                                        }}
                                                        overlayInnerStyle={{
                                                            backgroundColor:
                                                                "#17a2b8",
                                                            color: "white",
                                                            border: "none",
                                                            minHeight: "10px",
                                                        }}
                                                        mouseLeaveDelay={0}
                                                        placement="bottom"
                                                        trigger={["hover"]}
                                                        overlay={
                                                            <span>
                                                                ¡Cuidado! Click
                                                                para eliminar al
                                                                usuario{" "}
                                                                {user.idcliente}
                                                            </span>
                                                        }
                                                    >
                                                        <li
                                                            className="btns-manage-delete"
                                                            onClick={() =>
                                                                setShowTaskDialogUserAdmin(
                                                                    true
                                                                )
                                                            }
                                                        >
                                                            Eliminar
                                                        </li>
                                                    </Tooltip>

                                                    <Dialog
                                                        show={
                                                            showTaskDialogUserAdmin
                                                        }
                                                        title="Eliminar Usuario Administrador"
                                                        description={`¿Estás seguro de eliminar este usuario administrador?`}
                                                        confirm={
                                                            confirmUserAdmin
                                                        }
                                                        cancel={cancelUserAdmin}
                                                    />
                                                </ul>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

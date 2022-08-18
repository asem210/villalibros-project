import React from "react";
/* import "../admin/homeAdmin/HomeAdmin"; */
import "../admin/homeAdmin/homeAdmin.css";
import "./tabla.css";

export const FilaDefault: React.FC<{}> = () => {
    // <<<<<<< HEAD

    return (
        <div className="app-container-fila">
            <div className="wrapper-fila">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Num</th>
                                <th>Nombre del libro</th>
                                <th>Fecha de préstamo</th>
                                <th>Fecha de entrega</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>La casa del conde</td>
                                <td>04/10/2021</td>
                                <td>01/11/2021</td>
                                <td>S/ 5.30</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Caperucita Roja</td>
                                <td>09/12/2021</td>
                                <td>16/12/2021</td>
                                <td>S/ 4.00</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Como ser Pro en valorant</td>
                                <td>10/01/2022</td>
                                <td>03/02/2022</td>
                                <td>S/ 10.00</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>El fin del mundo</td>
                                <td>05/02/2022</td>
                                <td>25/03/2022</td>
                                <td>S/ 7.30</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Juana del Arco</td>
                                <td>05/05/2022</td>
                                <td>29/05/2022</td>
                                <td>S/ 6.50</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Pacman volumen 1</td>
                                <td>01/06/2022</td>
                                <td>21/06/2022</td>
                                <td>S/ 17.00</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Progamación para tontos</td>
                                <td>28/06/2022</td>
                                <td>01/07/2022</td>
                                <td>S/ 11.00</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Interacción Hombre Computador</td>
                                <td>02/08/2022</td>
                                <td>05/08/2022</td>
                                <td>S/ 6.60</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
    // >>>>>>> origin
};

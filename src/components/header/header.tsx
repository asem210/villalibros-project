import Tooltip from "rc-tooltip";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { FcUndo } from "react-icons/fc";

import "./header.css";
export const HistoryHeader: React.FC<{}> = () => {
    return (
        <div className="app-container-history-header">
            <BiCalendar size={30} />
            <label>Historial de Préstamos</label>
        </div>
    );
};

export const ComprarHeader: React.FC<{}> = () => {
    return (
        <div className="app-container-history-header">
            <BsCartCheckFill size={30} />
            <label>Finalizar Préstamo</label>
        </div>
    );
};

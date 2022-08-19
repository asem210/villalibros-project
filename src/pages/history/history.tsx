import React from "react";

import { NavBarDefault } from "../../components/navBar/navBar";

import { HistoryHeader } from "../../components/header/header";

import { FilaDefault } from "../../components/tabla/tabla";

import { Footer } from "../../components/footer/footer";

import { Searchbox } from "../../components/searchBox/searchBox";

import { Toaster, toast } from "react-hot-toast";

import "./history.css";
export const History: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void; // corro
    userValue: string; // correo
}> = ({ userState, setUserState, setUserValue, userValue }) => {
    return (
        <div className="app-container-history">
            <NavBarDefault
                userState={userState}
                setUserState={(txt: boolean) => setUserState(txt)}
                setUserValue={(txt: string) => setUserValue(txt)}
                userValue={userValue}
            />
            <HistoryHeader />
            <div className="app-container-history-searchbox">
                <Searchbox
                    placeholder="Filtrar por nombre, categoria, fecha, etc."
                    handleSearch={() => toast("Hello world")}
                />
            </div>

            <div className="app-container-table">
                <FilaDefault />
            </div>

            <Footer />
            <Toaster />
        </div>
    );
};

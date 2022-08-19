import React, { useState } from "react";
import "./dropdown.css";
import { IoIosArrowDown } from "react-icons/io";
const Dropdown: React.FC<{
    items: Array<String>;
    title: string;
    userState: boolean;
    setUserState: (txt: boolean) => void;
}> = ({ title, items, userState, setUserState }) => {
    const [state, setState] = useState(false);

    const shownDropdown = () => {
        setState(true);
    };

    const hideDropdown = () => {
        setState(false);
    };

    const handleClick = () => {
        state ? hideDropdown() : shownDropdown();
    };

    const logOut = () => {
        const item = items.find((item) => item === "Cerrar Sesión");
        if (item) {
            setUserState(false);
        }
    };

    let key = 0;
    return (
        <div className="dropdown">
            <div className="dropdown-menu" onClick={handleClick}>
                <span className="dropdown-title">{title}</span>
                <IoIosArrowDown className="dropdown-icon" />
                {state ? (
                    <ul className="dropdown-list">
                        {items.map((item) => {
                            return (
                                <li
                                    className="dropdown-item"
                                    key={key++}
                                    onClick={() => logOut()}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        </div>
    );
};

export default Dropdown;

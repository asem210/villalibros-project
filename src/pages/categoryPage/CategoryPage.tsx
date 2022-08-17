import { NavBarDefault } from "../../components/navBar/navBar";
import { Footer } from "../../components/footer/footer";

import CategoryListCards from "../../components/categoryListCards/CategoryListCards";

export const CategoryPage: React.FC<{
    userState: boolean;
    setUserState: (txt: boolean) => void;
    setUserValue: (txt: string) => void;
    userValue: string;
}> = ({ userState, setUserState, setUserValue, userValue }) => {
    return (
        <div className="app-container-adminpage">
            <NavBarDefault
                userState={userState}
                setUserState={(txt: boolean) => setUserState(txt)}
                setUserValue={(txt: string) => setUserValue(txt)}
                userValue={userValue}
            />
            <CategoryListCards />
            <Footer></Footer>
        </div>
    );
};

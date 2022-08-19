import "./card.css";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { PropsWithUserState } from "../../models/interfaces";

//Tooltip
import Tooltip from "rc-tooltip";
export function calculatePriceWithDiscount(
    priceDefault: number,
    percentDiscount: number
) {
    const priceWithDisc = priceDefault * ((100 - percentDiscount) / 100);
    return priceWithDisc;
}

const Card: React.FC<PropsWithUserState> = (
    { booksSeller },
    userState: boolean
) => {
    const navigate = useNavigate();
    const goToDetailsComp = (id: number) => {
        navigate(`/orderdetails/${id}`);
    };

    const { openCart, increaseCartQuantity } = useShoppingCart();

    function openCartAndIncreaseQ(id: number) {
        increaseCartQuantity(id);
        openCart(userState);
    }

    return (
        <div className="container-cards">
            {booksSeller.map((book) => {
                return (
                    <div key={book.id} className="card">
                        <div className="title-prevent">
                            <a href={"'#'"}>Preventa</a>
                        </div>
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
                            placement="rightBottom"
                            trigger={["hover"]}
                            overlay={<span>Click para ver detalles</span>}
                        >
                            <img
                                src={book.image}
                                alt="card"
                                onClick={() => goToDetailsComp(book.id)}
                            ></img>
                        </Tooltip>
                        <div
                            className="description"
                            onClick={() => goToDetailsComp(book.id)}
                        >
                            <p>{book.author}</p>
                            <h3>{book.title}</h3>
                        </div>

                        <div
                            className="card-bot"
                            onClick={() => goToDetailsComp(book.id)}
                        >
                            <div className="precio">
                                {book.percentDiscount ? (
                                    <>
                                        <span className="price-before-discount">
                                            S/ {book.price}
                                        </span>
                                        <p className="price">
                                            S/{" "}
                                            {calculatePriceWithDiscount(
                                                book.price,
                                                book.percentDiscount
                                            ).toFixed(2)}
                                        </p>
                                    </>
                                ) : (
                                    <p className="price">S/ {book.price}</p>
                                )}
                            </div>
                            <div className="descuento">
                                {book.percentDiscount ? (
                                    <p>{book.percentDiscount} %</p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>

                        <div className="container-button-order">
                            <div className="wrapper-button-order">
                                <button className="button-order">
                                    <span>Ordenar</span>
                                </button>
                                <button
                                    className="button-order button-order-hover"
                                    onClick={() =>
                                        openCartAndIncreaseQ(book.id)
                                    }
                                >
                                    <BsCart className="icon-cart-button"></BsCart>
                                    <span>Enviar al carrito</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;

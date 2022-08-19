import CartItem from "../cartItem/cartItem";
import { FcUndo } from "react-icons/fc";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./shoppingCart.css";
import books from "../../models/books.json";
import { calculatePriceWithDiscount } from "../card/card";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Tooltip from "rc-tooltip";
import toast from "react-hot-toast";

type ShoppingCartProps = {
    isOpen: boolean;
    stateLogin: boolean;
};

const ShoppingCart = ({ isOpen, stateLogin }: ShoppingCartProps) => {
    const navigate = useNavigate();
    const { closeCart, cartItems, cartQuantity } = useShoppingCart();

    const finishShopping = () => {
        console.log(stateLogin);
        if (stateLogin === true) {
            navigate("/finalizarCompra");
        } else {
            toast("Inicia Sesión para finalizar tu préstamo");
        }
    };
    return (
        <>
            {isOpen && (
                <div className="app-container-shopping-cart">
                    <div
                        className="wrapper-close-shopping-cart"
                        onClick={closeCart}
                    ></div>
                    <div className="wrapper-shopping-cart">
                        <div className="shopping-cart-head">
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
                                overlay={<span>Regresar</span>}
                            >
                                <FcUndo
                                    className="shopping-card-head-return"
                                    onClick={closeCart}
                                />
                            </Tooltip>

                            <h1>CARRITO DE LIBROS</h1>
                        </div>
                        {cartQuantity === 0 ? (
                            <div className="shopping-cart-body shopping-empty-cart">
                                <AiOutlineShoppingCart className="icon-empty-cart"></AiOutlineShoppingCart>
                                <span className="ad-empty-cart">
                                    Tu carrito está vacío
                                </span>
                            </div>
                        ) : (
                            <>
                                <div className="shopping-cart-body">
                                    {cartItems.map((item) => {
                                        return (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            ></CartItem>
                                        );
                                    })}
                                </div>
                                <div className="shopping-cart-footer">
                                    <div className="shopping-cart-footer-subtotal">
                                        <span>Total</span>
                                        <span className="total-price">
                                            S/{" "}
                                            {cartItems
                                                .reduce(
                                                    (subTotal, cartItem) => {
                                                        const item = books.find(
                                                            (i) =>
                                                                i.id ===
                                                                cartItem.id
                                                        );
                                                        let realPrice;
                                                        if (
                                                            item?.percentDiscount
                                                        ) {
                                                            realPrice =
                                                                calculatePriceWithDiscount(
                                                                    item.price,
                                                                    item.percentDiscount
                                                                );
                                                        } else {
                                                            realPrice =
                                                                item?.price;
                                                        }
                                                        return (
                                                            subTotal +
                                                            (realPrice || 0) *
                                                                cartItem.quantity
                                                        );
                                                    },
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="shopping-cart-footer-discounts">
                                        <span>
                                            Gracias a los descuentos usted ha
                                            ahorrado un total de S/{" "}
                                            {cartItems
                                                .reduce(
                                                    (
                                                        descuentoTotal,
                                                        cartItem
                                                    ) => {
                                                        const item = books.find(
                                                            (i) =>
                                                                i.id ===
                                                                cartItem.id
                                                        );
                                                        let realPrice,
                                                            descuento;
                                                        if (
                                                            item?.percentDiscount
                                                        ) {
                                                            realPrice =
                                                                calculatePriceWithDiscount(
                                                                    item.price,
                                                                    item.percentDiscount
                                                                );
                                                            descuento =
                                                                item.price -
                                                                realPrice;
                                                        }
                                                        return (
                                                            descuentoTotal +
                                                            (descuento || 0) *
                                                                cartItem.quantity
                                                        );
                                                    },
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => finishShopping()}
                                        className="shopping-cart-footer-btn"
                                    >
                                        Finalizar Préstamo
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;

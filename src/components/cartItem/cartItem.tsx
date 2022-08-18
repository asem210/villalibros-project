import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

import { useShoppingCart } from "../context/ShoppingCartContext";
import books from "../../models/books.json";
import "./cartItem.css";
import { calculatePriceWithDiscount } from "../card/card";
import Tooltip from "rc-tooltip";

type CartItemProps = {
    id: number;
    quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
        useShoppingCart();
    const item = books.find((i) => i.id === id);
    if (item == null) return null;
    return (
        <div className="app-container-cart-item">
            <div className="wrapper-grid">
                <div className="cart-item-img">
                    <img src={item.image} alt="imagen del producto"></img>
                </div>
                <div className="cart-item-info">
                    <h1>{item.title}</h1>
                    <div className="cart-item-prices">
                        {item.percentDiscount ? (
                            <>
                                <span className="cart-item-price-unique">
                                    S/{" "}
                                    {calculatePriceWithDiscount(
                                        item.price,
                                        item.percentDiscount
                                    )}
                                </span>
                                <span className="cart-item-price-subtotal">
                                    S/{" "}
                                    {(
                                        calculatePriceWithDiscount(
                                            item.price,
                                            item.percentDiscount
                                        ) * quantity
                                    ).toFixed(2)}
                                </span>
                                <div className="cart-item-btn-delete">
                                    <Tooltip
                                        overlayStyle={{
                                            color: "#dc3545",
                                            borderRadius: "1rem",
                                        }}
                                        overlayInnerStyle={{
                                            backgroundColor: "#dc3545",
                                            color: "white",
                                            border: "none",

                                            minHeight: "10px",
                                        }}
                                        mouseLeaveDelay={0}
                                        placement="bottomLeft"
                                        trigger={["hover"]}
                                        overlay={
                                            <span>Eliminar esta orden</span>
                                        }
                                    >
                                        <FiDelete
                                            className="icon-delete-item"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        ></FiDelete>
                                    </Tooltip>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className="cart-item-price-unique">
                                    S/ {item.price}
                                </span>
                                <span className="cart-item-price-subtotal">
                                    S/ {(item.price * quantity).toFixed(2)}
                                </span>
                                <div className="cart-item-btn-delete">
                                    <Tooltip
                                        overlayStyle={{
                                            color: "#dc3545",
                                            borderRadius: "1rem",
                                        }}
                                        overlayInnerStyle={{
                                            backgroundColor: "#dc3545",
                                            color: "white",
                                            border: "none",
                                            minHeight: "10px",
                                        }}
                                        mouseLeaveDelay={0}
                                        placement="bottom"
                                        trigger={["hover"]}
                                        overlay={
                                            <span>Eliminar esta orden</span>
                                        }
                                    >
                                        <FiDelete
                                            className="icon-delete-item"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        ></FiDelete>
                                    </Tooltip>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="cart-item-info-quantity">
                        {quantity > 0 && (
                            <>
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
                                    overlay={<span>Disminuir un libro</span>}
                                >
                                    <AiFillMinusCircle
                                        className="cart-item-icon-deacrease"
                                        onClick={() =>
                                            decreaseCartQuantity(item.id)
                                        }
                                    ></AiFillMinusCircle>
                                </Tooltip>

                                <span className="cart-item-quantity">
                                    x {quantity}
                                </span>
                            </>
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
                                minHeight: "10px",
                            }}
                            mouseLeaveDelay={0}
                            placement="bottom"
                            trigger={["hover"]}
                            overlay={<span>Aumentar un libro</span>}
                        >
                            <AiFillPlusCircle
                                className="cart-item-icon-increase"
                                onClick={() => increaseCartQuantity(item.id)}
                            ></AiFillPlusCircle>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

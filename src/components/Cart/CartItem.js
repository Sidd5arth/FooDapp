import React from 'react'
import classes from './CartItem.module.css'

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.styles}>
        <div>
            <h2>{props.name}</h2>
            <div>
                <span>{price}</span>
                <span className={classes.amount}>X{props.amount}</span>
            </div>
        </div>
        <div className={classes.btn}>
            <button className={classes.btn1} onClick={props.onRemove}>-</button>
            <button className={classes.btn1} onClick={props.onAdd}>+</button>
        </div>
    </li>
  )
}

export default CartItem;

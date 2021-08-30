import React from "react"
import loader from "../images/loader.gif";

const Loader = ({ load = true, children, className="" }) => {
    return load ? children : <img className={ className } src={loader} alt="Загрузка" />
}

export default Loader;
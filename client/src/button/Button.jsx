import React from "react";

const Button = ({ onClick = () => {}, children, isDisabled = false,}) => {
    return <button
        onClick={ onClick }
        children={ children }
        disabled={ isDisabled }
  />
}

export default Button;
import React from 'react'

const Button = ({
    isDisabled,
    btnType, containerStyle, textStyle, title, rightIcon, handleClick
}) => {
    return (
        <button disabled={isDisabled ?? false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className='flex-1'>{title}</span>
            {rightIcon && <div className='relative w-6 h-6'>
                {rightIcon}
            </div>}
        </button>
    )
}

export default Button
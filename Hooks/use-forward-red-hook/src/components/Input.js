import React from 'react'

function Input({type, placeholder,onKeyDown},ref) {

    return (
        <div>
            <input type={type} placeholder={placeholder} onKeyDown={onKeyDown} ref={ref}>
            </input>
        </div>
    )
}

const InputComponent = React.forwardRef(Input);

export default InputComponent;

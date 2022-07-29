const LabelInputType = ({label, value, handleOnChange, placeholder,type}) => {
    return (
        <label htmlFor={label}>
            {label}:
            <input type={type} name={label} value={value} onChange={e => handleOnChange(e)} placeholder={placeholder}/>
    </label>
    )
}

export default LabelInputType;
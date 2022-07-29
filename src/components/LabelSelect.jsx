const LabelSelect = ({label, value, handleOnChange, options=[]}) => {
    return (
        <label htmlFor={label}>
            {label}:
            <select name={label} value={value} onChange={e => handleOnChange(e)}>
                {options.map((option,index) => <option key={`${options}-${index}`} value={option}>{option}</option>)}
            </select>
        </label>
    )
}

export default LabelSelect;
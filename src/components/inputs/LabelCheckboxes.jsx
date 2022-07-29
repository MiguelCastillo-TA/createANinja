const LabelCheckboxes = ({label, options=[], handleOnChange}) => {
    return (
        <label htmlFor={label} className="checkbox-wrp">               
        {label}:
        {options.map((option) => {
            return (
                <label htmlFor={label} key={option}>
                    {option}
                    <input type="checkbox" name={label} value={option} onChange={handleOnChange}/>
                </label>
            )
        })}
    </label>
    )
}

export default LabelCheckboxes;
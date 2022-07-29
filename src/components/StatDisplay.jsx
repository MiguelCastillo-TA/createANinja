const StatDisplay = ({label, stat}) => {
    return (
        <p><span className="block-color">{label}: </span>{stat}</p>
    )
}

export default StatDisplay;
const StatDisplayList = ({label, stats=[]}) => {
    return (
        <>
            <p><span className="block-color">{label}: </span></p>
            <ul>
                {stats.map((stat) => <li key={stat}>{stat}</li>)}
            </ul>
        </>
    )
}

export default StatDisplayList;
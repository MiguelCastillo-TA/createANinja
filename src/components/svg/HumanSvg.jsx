import { useEffect, useState } from "react";

const HumanSvg = ({fillAnimation=false}) => {
    const [fill, setFill] = useState("")
    const [stroke, setStroke] = useState("#fff")

    useEffect(() => {
        console.log(fillAnimation)
        if (fillAnimation) {setFill("#fff"); setStroke("")}
    }, [fillAnimation])



    return (
        <svg width="100%" height="100%" viewBox="0 0 17 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>human</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-147.000000, -198.000000)" fill={fill} stroke={stroke}>
                    <g id="human" transform="translate(148.000000, 198.000000)">
                        <circle id="Oval" cx="7.5" cy="4.5" r="4"></circle>
                        <polygon id="Line" strokeLinecap="square" points="-1.04083409e-16 12 15 12 15 21.9005658 12.3696669 21.9005658 12.3696669 32 9.45586253 32 9.45586253 24.9837893 5.42003758 24.9837893 5.42003758 32 2.57529397 32 2.57529397 22 0 22"></polygon>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default HumanSvg;
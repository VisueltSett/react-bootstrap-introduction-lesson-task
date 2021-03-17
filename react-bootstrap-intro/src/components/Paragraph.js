import React from 'react'

function Paragraph(props) {
    console.log(props);

const paragraphStyle = {
    color: props.colour,
    fontSize: props.fontSize + 'px',
};


    return <p style={paragraphStyle}>{props.ptext}</p>;
}

export default Paragraph;

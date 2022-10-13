import React from 'react'

const AlertPost = ({alert}) => {
    const tagStyle={
            backgroundColor:alert?.alertLevel?.tagBackColor,
            color:alert?.alertLevel?.tagForeColor,
    }
    const tagTextStyle={
        backgroundColor:alert?.alertLevel?.textBackColor,
    }
    return (
        <>
            <div className="private-event-display-block">
                <div className="pvt-event-cont-blk" style={tagTextStyle}>
                    <div className="pvt-eventcont" style={tagStyle}>#{alert?.alertLevel?.name}</div>
                    <span className="ti-quote-left"></span>
                    <p style={{color:alert?.alertLevel?.textForeColor}}>{alert?.caption}</p>
                    <span className="ti-quote-right"></span>
                </div>
            </div>
        </>
    )
}

export default AlertPost

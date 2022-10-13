import React from 'react'

const Tooltip = ({data, isShow, position, color}) => {
       const top = position.top + window.pageYOffset + data.y;
  const left = position.left + window.pageXOffset + data.x;

  return (
    isShow && (
      <div style={{ top, left, color }} className="tooltip-wrapper">
        {data.yLabel}
      </div>
    )
  )
}

export default Tooltip

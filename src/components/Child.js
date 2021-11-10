import React from 'react'
import $ from 'jquery';
const Child = ({html}) => {
    return (
        <div className="child" id="child" >
            {html}
        </div>
    )
}

export default Child

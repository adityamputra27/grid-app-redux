import * as React from "react";
import { string, number, func } from "prop-types";

import './style.css'

function Tile ({id, color, onDoubleClick}) {
    return (
        <div className="tile" style={{backgroundColor: color}} onDoubleClick={onDoubleClick}></div>
    )
}

// default props
Tile.defaultProps = {
    color: 'gray'
}

// checking dataType
Tile.propTypes = {
    color: string,
    id: number.isRequired,
    onDoubleClick: func.isRequired
}

export default Tile
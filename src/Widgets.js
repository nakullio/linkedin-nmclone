import React from 'react'
import './Widgets.css'
import InfoIcon from  '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArtcile = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArtcile("papa react is back", "top news - 10009 readers")}
            {newsArtcile("Coronavirus: UK updates", "top news - 4643 readers")}
            {newsArtcile("Tesla reinvent speed", "Cars - 44363 readers")}
            {newsArtcile("Bitcoin ETH on the rise", "Crypto - 434563 readers")}
            {newsArtcile("Blockchain Developer on demand", "Developer - 435433 readers")}
        </div>

    )
}

export default Widgets

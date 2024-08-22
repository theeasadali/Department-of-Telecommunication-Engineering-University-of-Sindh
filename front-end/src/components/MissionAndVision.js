import React from 'react'

const MissionAndVision = (props) => {
    return (
        <>
            <h4>Mission</h4>
            <p>{props.mission}</p>

            <h4>Vision</h4>
            <p>{props.vision}</p>
        </>
    )
}

export default MissionAndVision

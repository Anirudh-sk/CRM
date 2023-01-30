import React from 'react'

function ProgressDisplay({progress}) {
  return (
    <div className='progress-display' >
        <div className='progress-bar'>
            <div style={{ width: progress + '%' }} className='progress-indicator'>
            </div>

        </div>
        <div style={{margin: "10px"}}>
            <h4>{progress}%</h4>
        </div>
    </div>
  )
}

export default ProgressDisplay
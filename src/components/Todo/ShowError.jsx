import React from 'react'

function ShowError (props) {
    if(props.hasShowFailMesg){
        return <div  className="alert alert-warning">Invalid creadentials</div>
    }
    return null
}

export default ShowError
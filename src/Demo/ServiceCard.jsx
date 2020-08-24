import React from 'react'

function ServiceCard(props) {
    return (
        <div className="col">
            <div className="card image-container-about">
                <img src={props.image} className="img-fluid card-img-top" style={{  padding:10}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.desination}.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard

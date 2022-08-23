import React from 'react'
import { useHistory } from "react-router-dom";
import SimpleLoading from '../LoadingScreen/SimpleLoading.tsx';

import './Cards.scss'

const Cards = ({ dashboards, isLoading }) => {
    let history = useHistory();
    
    return <div className="card_holder">
        {dashboards?.map((card, index) => {
            const { images, id, name, details, status, region } = card;

            return <div className="card_container" key={index} onClick={() => history.push(id)}>
                <div className="center-flex" >
                    <img className="card_image" src={images.large[0]} alt="card_image" />
                </div>
                <div className="mission_name">{name} #{index + 1}</div>
                <div className="flex-box">
                    <div className="value">{details.length > 170 ? details.substring(0, 170) + '...' : details}</div>
                </div>
                <div className="flex-box">
                    <div className="label">Status:</div>
                    <div className="value">{status} </div>
                </div>
                <div className="flex-box">
                    <div className="label">Region:</div>
                    <div className="value">{region} </div>
                </div>
            </div>

        })}
        {!isLoading && <SimpleLoading />}
    </div>
}

export default Cards

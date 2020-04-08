import React, { useContext } from 'react'
import { CardContext } from '../contexts/CardContext'
import CardDetails from './CardDetails'

const CardList = () => {
    const { cards } = useContext(CardContext)
    return cards.length ? (
        <div className="container">
            <div className="row">
                {
                    cards.map((card, index) => {
                        return (<CardDetails card={card} key={card.id} index={index} />)
                    })
                }
            </div>
        </div>
    ) : (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron jumbotron-fluid text-center">
                            <div className="container">
                                <h1 className="display-4">Game Over <i style={{fontSize:"3rem"}} className="fas fa-ghost"></i></h1>
                                <p className="lead">You Have No Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default CardList;
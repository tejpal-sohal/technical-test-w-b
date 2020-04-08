import React, { useContext, useState } from 'react'
import { CardContext } from '../contexts/CardContext'

const CardDetails = ({ card, index }) => {
  const [type, setType] = useState(card.type)
  const [extinct, setExtinct] = useState(card.extinct)
  const [diet, setDiet] = useState(card.diet)

  const { removeCard, editCard, UpdateCard} = useContext(CardContext)

  return card.isEdit === false ? (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded " >
        <div className={`random-box text-uppercase ${card.extinct === "Extinct" ? "dead" : "text-success"}`}><h2>{card.name.charAt(0)}</h2></div>
        <div className="card-body">
          <h4 className="card-title text-center text-uppercase">{card.name}</h4>
          <p className="card-title font-weight-lighter"><strong>Type:</strong> {card.type}</p>
          <p className="card-text font-weight-lighter"><strong>Diet:</strong>  {card.diet} </p>

          <p className={`card-text font-weight ${card.extinct === "Extinct" ? "text-danger" : "text-success"}`}>{card.extinct}</p>
          <div className="text-left">
            <i onClick={() => { editCard(index) }} className="fas fa-edit mr-3"></i>
            <i onClick={() => { removeCard(card.id) }} className="fas fa-trash-alt"></i>
          </div> 
        </div>
      </div>
    </div>

  ) : (
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="random-box"> <input type="text" className="custom-select animal-name" placeholder={card.name} onChange={(e) => { card.name = e.target.value }} /></div>
          <div className="card-body">
            <div><span className="card-title font-weight-lighter"><strong>Type:</strong>  </span><select className="custom-select" name="type" onChange={(e) => setType(e.target.value)}>
              <option disabled >Choose</option>
              <option value="mammal">mammal</option>
              <option value="reptile">reptile</option>
              <option value="fish">fish</option>
              <option value="amphibious">amphibious</option>
            </select>
            </div>
            <div><span className="card-title font-weight-lighter"><strong>Diet:</strong> </span><select className="custom-select" id="diet" defaultValue={''} onChange={(e) => setDiet(e.target.value)} required>
              <option disabled>Choose</option>
              <option value="carnivore">carnivore</option>
              <option value="herbivores">herbivores</option>
            </select>
            </div>
            <div>
              <span className="card-title font-weight-lighter"><strong>Living:</strong></span>
              <select className="custom-select" id="alive" defaultValue={''} onChange={(e) => setExtinct(e.target.value)} required>
                <option disabled>Choose</option>
                <option value="Extant">Extant</option>
                <option value="Extinct">Extinct</option>
              </select>
            </div>
            <div className="text-left mt-3">
            <i onClick={() => { UpdateCard(index, card.name, type, diet,extinct) }} className="fas fa-save mr-3"></i>

            </div>
          </div>
        </div>
      </div>
    )
}

export default CardDetails;
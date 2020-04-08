import React, { useContext, useState } from 'react'
import { CardContext } from '../contexts/CardContext'
import Logo from '../img/logo.png'

const NewCardForm = () => {
    const { addCard } = useContext(CardContext)
    const [name, setName] = useState('')
    const [extinct, setExtinct] = useState('Extant')
    const [type, setType] = useState('')
    const [diet, setDiet] = useState('')
    const edit = false

    const handleSubmit = (e) => {
        e.preventDefault()
        addCard(name, extinct, type, diet, edit)
        setName('')
        e.target.reset();
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded" >
                            <div className="card-body">
                            <img src={Logo} width="100" height="50" alt="" /><h2 style={{display:"inline-block"}} className="text-left ml-3 mb-5">New Card</h2>
                                <div className="row">
                                    <div className="col-sm-12 col-md-3">
                                    <label>Name</label>
                                       <div><input className="custom-select animal-name" type="text" placeholder="Animal Name" value={name}
                                            onChange={(e) => setName(e.target.value)} required /></div> 
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="type">Type</label>
                                        <select className="custom-select" id="type" defaultValue={''} name="type" onChange={(e) => setType(e.target.value)} required>
                                            <option value='' disabled >Choose</option>
                                            <option value="mammal">mammal</option>
                                            <option value="reptile">reptile</option>
                                            <option value="fish">fish</option>
                                            <option value="amphibious">amphibious</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="alive">Diet</label>
                                        <select className="custom-select"  id="diet" defaultValue={''} onChange={(e) => setDiet(e.target.value)} required>
                                            <option value='' disabled>Choose</option>
                                            <option value="carnivore">carnivore</option>
                                            <option value="cerbivores">herbivores</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12 col-md-3">
                                        <label htmlFor="alive">Living</label>
                                        <select className="custom-select"  id="alive" defaultValue={''} onChange={(e) => setExtinct(e.target.value)} required>
                                            <option value='' disabled>Choose</option>
                                            <option value="Extant">Extant</option>
                                            <option value="Extinct">Extinct</option>
                                        </select>
                                    </div>
                                    <div className="col-12 text-left mt-5"> <button className="btn btn-warning" type="submit"> Add Card </button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>



    );

}

export default NewCardForm

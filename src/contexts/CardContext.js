import React, {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCard] = useState([
        {name: "Lion",  extinct:"Extant", type:"mammal", diet:"carnivore", id:uuidv4(), isEdit:false},
        {name: "Tiger", extinct:"Extant", type:"mammal", diet:"carnivore", id:uuidv4(), isEdit:false},
        {name: "Mammuthus", extinct:"Extinct", type:"mammal", diet:"herbivorous", id:uuidv4(), isEdit:false},
        {name: "Snake", extinct:"Extant", type:"reptile", diet:"carnivore", id:uuidv4(), isEdit:false},
        {name: "Tuna", extinct:"Extinct", type:"fish", diet:"carnivore", id:uuidv4(), isEdit:false},
        {name: "Frog", extinct:"Extant", type:"amphibians", diet:"carnivore", id:uuidv4(), isEdit:false},
    ]);

    const addCard = (name, extinct, type, diet, isEdit,) => {
        setCard([...cards, { name, extinct, type, diet, isEdit, id: uuidv4()}])
    };

    const removeCard = (id) => {
        setCard(cards.filter(card => card.id !== id))
    };

    const editCard = (edit) => {
        const editCards = [...cards];
        editCards[edit].isEdit = true;
        setCard(editCards);
    }

    const UpdateCard = (edit,name,type,diet,extinct) => {
        const UpdateCard = [...cards];
        UpdateCard[edit].name = name;
        UpdateCard[edit].type = type;
        UpdateCard[edit].diet = diet;
        UpdateCard[edit].extinct = extinct;
        UpdateCard[edit].isEdit = false;
        setCard(UpdateCard);
    }

    return (
        <CardContext.Provider value={{cards, addCard, removeCard, editCard, UpdateCard}}>
           {props.children}
        </CardContext.Provider>
    )
}
export default CardContextProvider;
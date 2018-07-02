import * as actionTypes from '../constants/actionTypes';
import _ from "lodash";

const initialState = {
  cards: []
}

if (typeof(Storage) !== "undefined" && !localStorage.getItem("cards")) {
  localStorage.setItem("cards", JSON.stringify([]));
}
else if(typeof(Storage) !== "undefined" && localStorage.getItem("cards")){
  initialState.cards = JSON.parse(localStorage.getItem("cards"));
}

export default function common(state = initialState, action){
    
  switch (action.type) {
  	case actionTypes.ADD_CARD:
      if (typeof(Storage) !== "undefined"){
        let cards = JSON.parse(localStorage.getItem("cards"));
        action.card.id = cards.length + 1;
        action.card.date = new Date();
        cards.push(action.card);
        cards = localStorage.setItem("cards", JSON.stringify(cards));
        cards = JSON.parse(localStorage.getItem("cards"));
        return {...state, ...{ cards: cards}};
      }
    case actionTypes.EDIT_CARD:
      if (typeof(Storage) !== "undefined"){
        let cards = JSON.parse(localStorage.getItem("cards"));

        let index = cards.findIndex(x => x.id === action.card.id);
        action.card.date = new Date();

        cards[index] = action.card;
        
        cards = localStorage.setItem("cards", JSON.stringify(cards));
        cards = JSON.parse(localStorage.getItem("cards"));
        return {...state, ...{ cards: cards}};
      }
    case actionTypes.DELETE_CARD:
      if (typeof(Storage) !== "undefined"){
        let cards = JSON.parse(localStorage.getItem("cards"));

        let index = cards.findIndex(x => x.id === action.id);

        cards.splice(index, 1);
        
        cards = localStorage.setItem("cards", JSON.stringify(cards));
        cards = JSON.parse(localStorage.getItem("cards"));
        return {...state, ...{ cards: cards}};
      }
	default:
      return state
  }
}
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MdClose from "react-icons/lib/md/close";
import _ from "lodash";
import Card from "../card";
import * as actions from '../../actions/common';

class HomeContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cards: [{}]  
        };
    }

    addCard(){

    }

    deleteCard(){

    }

    render(){
        let cards = this.props.common && this.props.common.cards;

        return(
            <div className="container main-container">
                <div id="ideas-container">
                    <div className="row">
                        <Card/>
                        {cards.map(function(card, index) {
                            return (
                                <Card card={card} key={index}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


HomeContainer.propTypes = {};

export default connect((state) => {
    return {
        common: state.common,
        routing: state.routing
    }
})(HomeContainer);
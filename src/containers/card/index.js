import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/common';
import _ from "lodash";
import MdEdit from "react-icons/lib/md/edit";
import MdDelete from "react-icons/lib/md/delete";


class Card extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            editing: false,
            limit: 50,
            totalCount: 0
        };

        this.addCard = this.addCard.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addCard(e){
        e.preventDefault();
        let payload = {
            title: this.refs.title.value,
            description: this.refs.description.value
        }
        if(!payload.title || !payload.description) return;

        if(e.target instanceof HTMLTextAreaElement && e.which == 13){
            this.props.dispatch(actions.addCard(payload));    
            this.refs.title.value = "";
            this.refs.description.value = "";
        }
        else if(!(e.target instanceof HTMLTextAreaElement)){
            this.props.dispatch(actions.addCard(payload));
            this.refs.title.value = "";
            this.refs.description.value = "";
        }
    }

    editCard(id, e){
        e.preventDefault();
        let payload = {
            id: id,
            title: this.refs.title.value,
            description: this.refs.description.value
        }

        if(!payload.title || !payload.description) return;

        if(e.target instanceof HTMLTextAreaElement && e.which == 13){
            this.props.dispatch(actions.editCard(payload));    

            this.setState({
                editing: false
            });
        }
        else if(!(e.target instanceof HTMLTextAreaElement)){
            this.props.dispatch(actions.editCard(payload));

            this.setState({
                editing: false
            });
        }
    }

    onChange(e){
        this.setState({
            totalCount: e.target.value.length
        });
    }

    deleteCard(id){
        this.props.dispatch(actions.deleteCard(id));
    }

    enableEdit(){
        this.setState({
            editing: true,
            totalCount: this.props.card.description.length // this should be safely handled but due to busy schedule & time constrainsts
        }, function(){
            this.refs.title.focus();
        });
    }

    componentDidMount(){
        if(this.refs.title){
            this.refs.title.focus();
        }
    }

    render(){
        let _this = this;
        let date = new Date();
        if(this.props.card){
            console.log("jj");
            date = new Date(this.props.card.date);
        }
        return(
            <div className="col-md-4 note-column">
                {!this.props.card &&
                    <div className="note new">
                        <form onSubmit={this.addCard.bind(this)}>
                            <input type="text" placeholder="Enter title..." ref="title"/>
                            <textarea maxLength={this.state.limit} onChange={this.onChange.bind(this)} onKeyUp={this.addCard.bind(this)} type="text" placeholder="Enter Description and press enter..." ref="description"></textarea>
                            <button type="submit">
                                Add
                            </button>
                        </form>

                        {this.state.totalCount > 0 &&
                            <span className={this.state.totalCount >= this.state.limit - 4 ? "limit red" : "limit"}>{this.state.totalCount} / {this.state.limit}</span>
                        }
                    </div>
                }
                {this.props.card &&
                    <div className="note">
                        <div className="actions">
                            <a href="#" onClick={this.enableEdit.bind(this)}><MdEdit color={this.state.editing ? "#696969": "#96bc97"}/></a>
                            <a href="#" onClick={this.deleteCard.bind(this, this.props.card.id)}><MdDelete color={"#96bc97"}/></a>
                        </div>
                        <span className="date">{date.toLocaleDateString()}</span>
                        {!this.state.editing &&
                            <div>
                                <h2>{this.props.card.title}</h2>
                                <p>{this.props.card.description}</p>

                            </div>
                        }
                        {this.state.editing &&
                            <div className="edit">
                                <form onSubmit={this.editCard.bind(this, this.props.card.id)}>
                                    <input type="text" placeholder="Enter title..." defaultValue={this.props.card.title} ref="title"/>
                                    <textarea maxLength={this.state.limit} onChange={this.onChange.bind(this)} onKeyUp={this.editCard.bind(this, this.props.card.id)} type="text" placeholder="Enter Description and press enter..." ref="description" defaultValue={this.props.card.description}></textarea>
                                    <button type="submit">
                                        Add
                                    </button>
                                </form>
                            </div>
                        }
                        {this.state.editing && this.state.totalCount > 0 &&
                            <span className={this.state.totalCount >= this.state.limit - 4 ? "limit red" : "limit"}>{this.state.totalCount} / {this.state.limit}</span>
                        }
                    </div>
                }
            </div>
        )
    }
}

Card.propTypes = {};

export default connect((state) => {
    return {
        common: state.common,
        routing: state.routing
    }
})(Card);
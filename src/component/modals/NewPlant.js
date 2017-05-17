import React, {Component} from 'react';
import './NewPlant.css';
import api from '../../api';

const ENTER = 13;

export default class NewPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  plantId = () => {
    return this.props.params.id;
  }

  _submitCard = () => {
    let{
      nickname: {value: nickname},
      name: {value: name},
      description: {value: description},
      maxtemp: {value: maxtemp},
      mintemp: {value: mintemp},
      maxph: {value: maxph},
      minph: {value: minph},
      maxhum: {value: maxhum},
      minhum: {value: minhum},
      maxlux: {value: maxlux},
      minlux: {value: minlux}
    } = this.refs;
    if(nickname){
      api.postPlantCard({
        nickname: nickname,
        name: name,
        description: description,
        maxtemp: maxtemp,
        mintemp: mintemp,
        maxph: maxph,
        minph: minph,
        maxhum: maxhum,
        minhum: minhum,
        maxlux: maxlux,
        minlux: minlux,
        plantId: this.props.plantId
      }).then(() => {
        this.props._handlePlantCardCreate();
        this.props._fetchPlantCard();
      }).catch(console.error)
    }
  }

  _handleTyping = (e) => {
    if(this.state && this.state.error){
      this.setState({error: null})
    }
    if(e.keyCode === ENTER){
      this._submitCard()
    }
  }

  render(){
    return(
      <div className="create__card">
        <div className="create__card-content">
          <h1>Create Plant Card</h1>
          <h5>Nickname</h5>
          <input type="text" ref="nickname" onKeyUp={this._handleTyping}/><br/>
          <h5>Name</h5>
          <input type="text" ref="name" onKeyUp={this._handleTyping}/><br/>
          <h5>description</h5>
          <input type="test" ref="description" onKeyUp={this._handleTyping}/><br/>
          <h5>Maxtemp</h5>
          <input type="text" ref="maxtemp" onKeyUp={this._handleTyping}/><br/>
          <h5>Mintemp</h5>
          <input type="text" ref="mintemp" onKeyUp={this._handleTyping}/><br/>
          <h5>Maxph</h5>
          <input type="text" ref="maxph" onKeyUp={this._handleTyping}/><br/>
          <h5>Minph</h5>
          <input type="text" ref="minph" onKeyUp={this._handleTyping}/><br/>
          <h5>Maxhum</h5>
          <input type="text" ref="maxhum" onKeyUp={this._handleTyping}/><br/>
          <h5>Minhum</h5>
          <input type="text" ref="minhum" onKeyUp={this._handleTyping}/><br/>
          <h5>Maxlux</h5>
          <input type="text" ref="maxlux" onKeyUp={this._handleTyping}/><br/>
          <h5>Minlux</h5>
          <input type="text" ref="minlux" onKeyUp={this._handleTyping}/><br/>
        <div className="create__card-button">
          <button onClick={this._submitCard}>Submit Plant</button>
        </div>
        </div>
      </div>
    );
  }
}

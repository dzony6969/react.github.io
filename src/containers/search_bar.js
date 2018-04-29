import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}//this.setState
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        //dziala podobnie jak => w podstawach reacta
    }
onInputChange(event) {
    this.setState({term: event.target.value}) //this.state

}
onFormSubmit(event) {
    event.preventDefault(); //zakazuje post requesta
    //tutaj dodaje sie pogoda 
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

}

    render() {
        return (
        <form 
        onSubmit={this.onFormSubmit}
        className='input-group'>
        <input
        placeholder='Wpisz miasto aby sprawdzić pogodę'
        className='form-control'
        value={this.state.term}
        onChange={this.onInputChange}/>
        <p>{this.state.term}</p>
        <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary float-right'>WYSLIJ</button>
      </span>
      
    </form>
    )
}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)


import React, {Component} from 'react';
import {connect} from 'react-redux';

class InputForm extends Component {

    state = ({
      description: '',
      image_url:''
    })

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }
  

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  } 
 
  
  
  handleClick = (event)=> {
    event.preventDefault();
    console.log('In handleClick');
    this.props.dispatch({type: 'ADD_ITEM', payload: {
        description: this.state.description, 
        image_url:this.state.image_url, 
        user_id: this.props.reduxState.user.id}})
    this.setState({
      description: '',
      image_url:'',
    })
  }
  
  render() {
    return (
        <form>
            <p>info form</p>
            <input 
              type="text"
              name="description"
              placeholder="item description"
              onChange={this.handleChange('description')} 
              value={this.state.description}/>
            <input 
              type="text"
              name="image_url"
              placeholder="image url"
              onChange={this.handleChange('image_url')} 
              value={this.state.image_url}/>
            <button onClick={this.handleClick}>Submit</button>
        </form> 

  )}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(InputForm);

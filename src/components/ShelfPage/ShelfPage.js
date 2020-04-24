import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ShelfPage extends Component {

    componentDidMount() {
        this.getShelf();
    }

    getShelf = () => {
        console.log('In getShelf');
        this.props.dispatch({ type: 'FETCH_SHELF' });
    }

    handleDelete = (id) => {
        console.log('delete this!', id);
        this.props.dispatch({ type: 'DELETE_ITEM', payload: {item_id: id, user_id: this.props.reduxStore.user.id}});
    }


    render() {
        return (
            <div>
                <>
                    {this.props.reduxStore.shelf.map((item) => <tr key={item.id}><td>-</td><td>{item.description}</td><td>{item.image_url}</td><td><button onClick={() => this.handleDelete(item.id)}>Delete</button></td></tr>)}
                </>
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})
export default withRouter(connect(putPropsOnRedux)(ShelfPage));



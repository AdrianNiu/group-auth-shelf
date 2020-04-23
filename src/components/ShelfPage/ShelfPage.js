import React, { Component } from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ShelfPage extends Component {

    componentDidMount() {
        this.getShelf();
    }

    getShelf = () => {
        console.log('In getShelf');
        this.props.dispatch({ type: 'FETCH_SHELF' })
    }


    render() {
        return (
            <div>
                <>
                    {JSON.stringify(this.props.shelf)}
                    {this.props.shelf.map((item) => <ul key={item.id}><li>{item.description}</li><li>{item.image_url}</li></ul>)}
                </>
            </div>
        )
    }
}
const putPropsOnRedux = (reduxStore) => ({
    shelf: reduxStore.shelf
})
export default withRouter(connect(putPropsOnRedux)(ShelfPage));



import React from 'react';

export default Component => class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openItemId: null
        };
    };

    render() {
        return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
    };

    toggleOpenItem = id => {
        this.setState({
            openItemId: id === this.state.openItemId ? null : id
        });
    };
};
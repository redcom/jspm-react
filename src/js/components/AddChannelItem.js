import React from 'react';

var AddChannelItem = React.createClass({

    propTypes: {
        channel: React.PropTypes.string.isRequired
    },

    addItem: function () {
        let item = {
            'url' : this.refs.url.getDOMNode().value,
            'name' : this.refs.name.getDOMNode().value,
            'active' : true
        };
        this.props.actions.addChannelItem(this.props.channel,item);
    },

    render: function() {

        return(
            <div>
                <input type="text"
                       placeholder="URL"
                       ref="url" />
                <input type="text"
                       ref="name"
                       placeholder="name"/>
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
});

export default AddChannelItem;
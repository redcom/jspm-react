import React from 'react';

var ChannelItem = React.createClass({

    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    contextTypes : {
        Actions: React.PropTypes.object.isRequired
    },

    handleChange : function (e) { // event
        console.log(`props`,this);
        if(e.target.checked){
            this.context.Actions.activateChannelItem(
                this.props.channel,
                this.props.itemID
            );
        } else {
            this.context.Actions.muteChannelItem(
                this.props.channel,
                this.props.itemID
            );
        }
    },

    render: function() {

        let item = this.props.item;

        return(
            <div>
                <span>{item.name}</span>
                <span className="pull-right">
                    <input type="checkbox"
                       value={this.props.itemID}
                       onChange={this.handleChange}
                       defaultChecked={item.active}
                    />
                </span>
            </div>
        );
    }
});

export default ChannelItem;
import React from 'react';
import alt from '../alt';
import ChannelItem from './ChannelItem.js!jsx';

var ChannelList = React.createClass({

    getInitialState: function() {
       return this.props.store.getState();
    },

    propTypes: {
        store: React.PropTypes.object.isRequired,
        actions: React.PropTypes.object.isRequired
    },

    childContextTypes : {
        Actions: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            Actions: this.props.actions
        };
    },
    
    render: function() {
        console.log(`state`,this.state);
        this.state.items = [];
        for (var key in this.state.channels[this.props.channel]) {
            this.state.items.push(
                <ChannelItem key={`${this.props.channel}_${key}`}
                    item={this.state.channels[this.props.channel][key]}
                    itemID={key}
                    channel={this.props.channel}/>
            );
        }

        return(
            <div>
                <h2>{this.props.channel}</h2>
                <div>{this.state.items}</div>
            </div>
        );
    },

    componentDidMount: function() {
        this.props.store.listen(this.onChange);
    },

    componentWillUnmount: function() {
        this.props.store.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },
});

export default ChannelList;
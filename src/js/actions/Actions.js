import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';

var Actions = {

    create: function(channel,item) {
        AppDispatcher.dispatch({
            actionType: Constants.CHANNEL_ADD_ITEM,
            channel: channel,
            item: item
        });
    },

    getChannel: function(id) {
        console.log(`distpatching getCHANNEL action`, id);
        AppDispatcher.dispatch({
            actionType: Constants.CHANNEL_GET_ITEMS,
            id: id
        });
    },

    muteChannelItem: function(channelID,itemID) {
        AppDispatcher.dispatch({
           actionType: Constants.CHANNEL_ITEM_MUTE,
           channelID : channelID,
            itemID: itemID
        });
    },

    activateChannelItem: function(channelID,itemID) {
        AppDispatcher.dispatch({
            actionType: Constants.CHANNEL_ITEM_ACTIVATE,
            channelID : channelID,
            itemID: itemID
        });
    },

    addChannelItem: function(channelID,item) {
        AppDispatcher.dispatch({
            actionType: Constants.CHANNEL_ADD_ITEM,
            channelID : channelID,
            item: item
        });
    }

};

export default Actions;

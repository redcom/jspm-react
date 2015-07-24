import alt from '../alt';

class ChannelActions {

    muteChannelItem(channelID, itemID) {
        this.dispatch({ channelID, itemID });
    }

    activateChannelItem(channelID, itemID) {
        this.dispatch({ channelID, itemID });
    }

    addChannelItem(channelID,item) {
        this.dispatch({channelID,item});
    }
}

export default alt.createActions(ChannelActions);
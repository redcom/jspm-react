import alt from '../alt';
import Actions from '../actions/ChannelActions';

let storeID = 'ChannelsStore';

class ChannelsStore {

    constructor() {
        this.bindActions(Actions);
        let _channels = {

            "news": {
                "0": {
                    "url": "bbc.co.uk",
                    "active": true,
                    "name": "BBC"
                },
                "1": {
                    "url": "guardian.co.uk",
                    "active": true,
                    "name": "The Guardian"
                }
            }
        };
        this.channels = this.initLocalStore(storeID,_channels);
    }

    muteChannelItem({channelID,itemID}) {
        this.channels[channelID][itemID].active = false;
        this.persistToLocalStorage(storeID,this.channels);
    }

    activateChannelItem({channelID,itemID}) {
        this.channels[channelID][itemID].active = true;
        this.persistToLocalStorage(storeID,this.channels);
    }

    addChannelItem({channelID,item}) {
        this.channels[channelID][this.createMapItemID(channelID)] = item;
        this.persistToLocalStorage(storeID,this.channels);
    }

    createMapItemID(channelID) {
        return Object.keys(this.channels[channelID]).length;
    }

    initLocalStore(storeID,data) {
        if(!localStorage.getItem(storeID)) {
            console.log(`init ${storeID} local storage`);
            localStorage.setItem(storeID,JSON.stringify(data));
        }
        return JSON.parse(localStorage.getItem(storeID));
    }

    persistToLocalStorage(storeID,data) {
        localStorage.setItem(storeID,JSON.stringify(data));
    }
}

export default alt.createStore(ChannelsStore,storeID);
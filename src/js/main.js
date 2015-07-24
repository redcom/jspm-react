'use strict';

import React from 'react';
import ChannelList from './components/ChannelList.js!jsx';
import AddChannelItem from './components/AddChannelItem.js!jsx';

import Store from './stores/ChannelsStore';
import ChannelActions from './actions/ChannelActions';

React.render(
    <ChannelList channel="news"
        store={Store}
        actions={ChannelActions}/>,
    document.getElementById('app')
);

React.render(
    <AddChannelItem channel="news" actions={ChannelActions} />,
    document.getElementById('addItem')
);

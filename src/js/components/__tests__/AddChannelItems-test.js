var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var AddChannelItem = require('../AddChannelItem');

describe('AddChannelItem', () => {

    let component,spy;

    let actions = {
        addChannelItem : function(channel,item) {
            //console.log(`items`,channel,item);
        }
    };

    spy = sinon.spy(actions,'addChannelItem');

    beforeEach(function () {
        component = TestUtils.renderIntoDocument(<AddChannelItem
            channel="news"
            actions={actions}/>);
    });
    afterEach(function () {
        component = null;
    });

    it('renders', () => {
        expect(component).toBeTruthy();
    });

    it("has url, name inputs and Add button ", function () {
        console.log(`bla`,component.getDOMNode());
        let DOMNode = component.getDOMNode();
        let elements = DOMNode.children;
        expect(elements[0].nodeName).toBe("INPUT");
        expect(elements[0].getAttribute("placeholder")).toBe("URL");

        expect(elements[1].nodeName).toBe("INPUT");
        expect(elements[1].getAttribute("placeholder")).toBe("name");

        expect(elements[2].nodeName).toBe("BUTTON");
        expect(elements[2].firstChild.nodeValue).toBe("Add");
    });

    it("performs addChannelItemAction", function () {

        let elements = component.getDOMNode().children;

        component.refs.url.getDOMNode().value = 'foo';
        component.refs.name.getDOMNode().value = 'bar';

        TestUtils.Simulate.click(elements[2]);
        expect(spy.calledOnce).toBe(true);
        expect(spy.calledWith('news',{url:'foo',name:'bar',active:true})).toBe(true);
    });
});
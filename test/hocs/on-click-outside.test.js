import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import OnClickOutsideDummyComponent from './on-click-outside-dummy-component';

describe('onClickOutside HOC', () => {
  let component;
  let sandbox;
  let clickedOutsideSpy;
  let addEventSpy;
  let removeEventSpy;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    clickedOutsideSpy = sandbox.spy();
    addEventSpy = sandbox.spy(document, 'addEventListener');
    removeEventSpy = sandbox.spy(document, 'removeEventListener');
    component = mount(
      <OnClickOutsideDummyComponent clickedOutsideSpy={clickedOutsideSpy} />,
      { attachTo: document.getElementById('app') },
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should subscribe to click and keyUp event on mount', () => {
    expect(addEventSpy).to.have.been.calledTwice();
  });

  it('should unsubscribe from click and keyUp events on unmount', () => {
    component.unmount();
    expect(removeEventSpy).to.have.been.callCount(4);
  });

  it('should call handleClickOutside if click is made outside chosen element', () => {
    document.getElementById('top').click();
    expect(clickedOutsideSpy).to.have.been.calledOnce();
  });

  it('should not call handleClickOutside if click is made on chosen element', () => {
    document.getElementById('mid').click();
    expect(clickedOutsideSpy).to.not.have.been.called();
  });

  it('should not call handleClickOutside if click is made inside chosen element', () => {
    document.getElementById('bot').click();
    expect(clickedOutsideSpy).to.not.have.been.called();
  });

  it('should not call handleClickOutside if keyUp is sent via keyCode', () => {
    const event = document.createEvent('Event');
    event.keyCode = 27;
    event.initEvent('keyup', true, true);
    document.dispatchEvent(event);
    expect(clickedOutsideSpy).to.have.been.calledOnce();
  });

  it('should not call handleClickOutside if keyUp is sent via key', () => {
    const event = document.createEvent('Event');
    event.key = 'Escape';
    event.initEvent('keyup', true, true);
    document.dispatchEvent(event);
    expect(clickedOutsideSpy).to.have.been.calledOnce();
  });
});

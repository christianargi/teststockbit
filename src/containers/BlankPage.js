import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import logo from '@iso/assets/images/logo.svg';

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <img src={logo} className="App-logo" alt="logo" />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

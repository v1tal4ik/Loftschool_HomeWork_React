import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return 'layout';
  }

  renderHeader(HeaderChild) {
    return 'header';
  }

  renderFooter(FooterChild) {
    return 'footer';
  }
}

export default Layout;

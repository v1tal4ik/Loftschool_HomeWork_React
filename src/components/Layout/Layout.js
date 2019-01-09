import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  render() {
    const {header,footer} = this.props;
    return (
      <div>
        {this.renderHeader(header)}
        {this.renderFooter(footer)}
      </div>
    ); 
  }

  renderHeader(HeaderChild) {
    console.log('HeaderChild',HeaderChild);
    return <SectionTitle className ={'Header'} children = {HeaderChild}/>;
  }

  renderFooter(FooterChild) {
    return <SectionTitle className ={'Footer'} children = {FooterChild}/>;
  }
}

export default Layout;

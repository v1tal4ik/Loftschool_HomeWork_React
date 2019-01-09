import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  render() {
    const {header,footer,children} = this.props;
    return (
      <div>
        {header && this.renderHeader(header)}
        <main>
        <SectionTitle className="header__title">Main</SectionTitle>
        {children}
        </main>
        {footer && this.renderFooter(footer)}
      </div>
    ); 
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return 'empty';
  }
}

export default Layout;

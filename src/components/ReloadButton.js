import PureComponent from 'react-pure-render/component';
import React from 'react';

import IconLogo from '../icons/IconLogo';
import IconReload from '../icons/IconReload';
import { i18n } from './util';

export default class ReloadButton extends PureComponent {
  static defaultProps = {
    onClick: () => {},
    showReloadIcon: false,
  };

  constructor() {
    super();

    this.state = { hover: false };
  }

  onMouseEnter = () => {
    this.setState({ hover: true });
  };
  onMouseOut = () => {
    this.setState({ hover: false });
  };

  render() {
    const {
      props: { showReloadIcon },
      state: { hover },
    } = this;

    return (
      <div
        onClick={this.props.onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseOut}
        style={{
          alignItems: 'center',
          backgroundColor: showReloadIcon && hover ? '#3b7fc4' : '#fff',
          borderRadius: '0 5px 0 20px',
          color: '#fff',
          cursor: showReloadIcon ? 'pointer' : 'default',
          display: 'flex',
          float: 'right',
          fontSize: '1rem',
          fontWeight: 'bold',
          height: '30px',
          justifyContent: 'center',
          lineHeight: '1rem',
          position: 'absolute',
          right: 0,
          top: 0,
          transition: 'background-color 0.3s ease-in-out',
          width: '30px',
        }}
        title={i18n('txtReloadData')}
      >
        {showReloadIcon
          ? <IconReload color={hover ? '#fff' : '#205081'} />
          : <IconLogo />}
      </div>
    );
  }
}

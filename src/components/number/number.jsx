import React from 'react';
import { FormattedNumber } from 'react-intl';
import classNames from 'classnames';
import Addon from '../addon/addon';

function renderAddon(addon, addonClasses, addonSeparator, addonStyle, position) {
  if (!addon) {
    return null;
  }

  return (
    <Addon className={ classNames(`addon--${position}`, addonClasses) } style={ addonStyle }>
      <span>
        { position === 'right' ? addonSeparator : null }
        { addon }
        { position === 'left' ? addonSeparator : null }
      </span>
    </Addon>
  );
}

/**
  This component is not intended for public use
*/
export default function Number({
  className,
  style,
  value,
  valueClass,
  valueDecimals,
  valueStyle,
  prefix,
  prefixClass,
  prefixSeparator,
  prefixStyle,
  suffix,
  suffixClass,
  suffixSeparator,
  suffixStyle,
  ...rest,
}) {
  const classes = classNames('number', className);
  const styles = Object.assign({}, {
    fontWeight: '400',
    whiteSpace: 'nowrap',
  }, style);

  return (
    <span { ...rest } className={ classes } style={ styles }>
      { renderAddon(prefix, prefixClass, prefixSeparator, prefixStyle, 'left') }
      <FormattedNumber
        className={ valueClass }
        style={ valueStyle }
        value={ value }
        minimumFractionDigits={ valueDecimals }
        maximumFractionDigits={ valueDecimals }
      />
      { renderAddon(suffix, suffixClass, suffixSeparator, suffixStyle, 'right') }
    </span>
  );
}

Number.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  value: React.PropTypes.number.isRequired,
  valueClass: React.PropTypes.string,
  valueDecimals: React.PropTypes.number,
  valueStyle: React.PropTypes.object,
  prefix: React.PropTypes.node,
  prefixClass: React.PropTypes.string,
  prefixSeparator: React.PropTypes.string,
  prefixStyle: React.PropTypes.object,
  suffix: React.PropTypes.node,
  suffixClass: React.PropTypes.string,
  suffixSeparator: React.PropTypes.string,
  suffixStyle: React.PropTypes.object,
};

Number.defaultProps = {
  valueDecimals: 2,
  prefixSeparator: '',
  suffixSeparator: '',
};

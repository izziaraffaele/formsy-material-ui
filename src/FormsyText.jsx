import React from 'react';
import keycode from 'keycode';
import Formsy from 'formsy-react';
import TextField from 'material-ui/TextField';
import {_setMuiComponentAndMaybeFocus} from './utils';

let FormsyText = React.createClass({
  mixins: [ Formsy.Mixin ],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.any,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func
  },

  componentWillMount: function() {
      this.setState({
        _value: this.props.value,
      });
  },

  handleBlur: function(event) {
    this.setValue(event.currentTarget.value);
    if (this.props.onBlur) this.props.onBlur(event);
  },

  handleKeyDown: function(event) {
    if (keycode(event) === 'enter') this.handleEnterKeyDown(event);
    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
  },

  _setMuiComponentAndMaybeFocus: _setMuiComponentAndMaybeFocus,

  render: function () {
    return (
      <TextField
        {...this.props}
        ref={this._setMuiComponentAndMaybeFocus}
        onBlur={this.handleBlur}
        onFocus={this.props.onFocus}
        onKeyDown={this.handleKeyDown}
        errorText={this.getErrorMessage()}
        value={this.getValue()}
      />
    );
  }
});

export default  FormsyText;

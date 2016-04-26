import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <input type='text' className='form-control' name={this.props.name} ref={this.props.name}  value={this.props.fieldValue} onChange={this.props.handleChange}/>
    );
  }
}

export default InputField;
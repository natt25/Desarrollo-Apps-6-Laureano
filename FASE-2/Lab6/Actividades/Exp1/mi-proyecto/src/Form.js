/////////////////////////////////////// ACT4
import React, { Component } from "react";

class Form extends Component {
  // (c.2) estado inicial del formulario
  initialState = {
    name: "",
    job: ""
  };

  state = this.initialState;

  // (c.3) handleChange
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // (c.4) submitForm
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState); // limpiar formulario
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />

        <label>Trabajo</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />

        <input type="button" value="Agregar" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;

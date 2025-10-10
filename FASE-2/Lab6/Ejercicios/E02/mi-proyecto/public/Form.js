import React, { Component } from "react";

class Form extends Component {
  initialState = { name: "", job: "" };
  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { name, job } = this.state;
    if (!name.trim() || !job.trim()) return;
    this.props.handleSubmit({ name, job });
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "grid", gap: ".5rem", maxWidth: 420 }}>
          <label>Nombre</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />

          <label>Trabajo</label>
          <input type="text" name="job" value={job} onChange={this.handleChange} />

          <input type="button" value="Agregar" onClick={this.submitForm} />
        </div>
      </form>
    );
  }
}

export default Form;

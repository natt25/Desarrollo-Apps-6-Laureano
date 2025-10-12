// src/Form.js
import React, { Component } from "react";

class Form extends Component {
  initialState = { title: "", author: "" };
  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const { title, author } = this.state;
    if (!title.trim() || !author.trim()) return;
    this.props.handleSubmit({ title, author });  // enviar al padre
    this.setState(this.initialState);            // limpiar
  };

  render() {
    const { title, author } = this.state;

    return (
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <h3>Agregar libro</h3>

        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={this.handleChange}
          placeholder="Ej. La tentación del fracaso"
        />

        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          type="text"
          value={author}
          onChange={this.handleChange}
          placeholder="Ej. Julio Ramón Ribeyro"
        />

        <input type="button" value="Agregar" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;

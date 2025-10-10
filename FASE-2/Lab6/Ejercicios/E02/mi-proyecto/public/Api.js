import React, { Component } from "react";

class Api extends Component {
  state = { data: [] };

  componentDidMount() {
    // Wikipedia opensearch (puede requerir origin=*)
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Peru&limit=5&namespace=0&format=json&origin=*")
      .then((res) => res.json())
      .then((result) => this.setState({ data: result[1] })) // títulos en result[1]
      .catch((err) => {
        console.error("Wikipedia CORS? Probando JSONPlaceholder...", err);
        // Backup simple:
        // return fetch("https://jsonplaceholder.typicode.com/users")
        //   .then((r) => r.json())
        //   .then((users) => this.setState({ data: users.map(u => u.name) }));
      });
  }

  render() {
    const { data } = this.state;
    return (
      <section>
        <h1>Datos desde Wikipedia</h1>
        <ul>
          {data.length ? data.map((item, i) => <li key={i}>{item}</li>) : <li>Cargando datos…</li>}
        </ul>
      </section>
    );
  }
}

export default Api;

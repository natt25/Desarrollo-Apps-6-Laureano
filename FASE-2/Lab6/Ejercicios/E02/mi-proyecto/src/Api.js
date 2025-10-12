import React, { Component } from "react";

class Api extends Component {
  state = { data: [], loading: true, error: null };

  componentDidMount() {
    // Consulta sobre "Peruvian literature" para el tema BookVerse
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Peruvian%20literature&limit=5&namespace=0&format=json&origin=*";

    fetch(url)
      .then((r) => r.json())
      .then((result) => {
        // Wikipedia OpenSearch: result[1] contiene títulos
        this.setState({ data: result[1] || [], loading: false });
      })
      .catch((err) => this.setState({ error: err.message, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <section>
        <h1>Literatura (Wikipedia)</h1>
        {loading && <p>Cargando…</p>}
        {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

        {!loading && !error && (
          <ul>
            {data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}

export default Api;

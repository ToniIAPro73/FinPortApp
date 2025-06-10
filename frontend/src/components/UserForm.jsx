import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      if (!res.ok) throw data;

      setResponse(data);
      setName("");
      setEmail("");
    } catch (err) {
      setError(err.errors || [{ msg: err.error || "Error desconocido" }]);
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Enviar</button>
      </form>

      {response && (
        <pre style={{ color: "green" }}>
          Usuario creado:
          {JSON.stringify(response, null, 2)}
        </pre>
      )}

      {error &&
        error.map((e, i) => (
          <div key={i} style={{ color: "red" }}>
            {e.msg}
          </div>
        ))}
    </div>
  );
}

export default UserForm;

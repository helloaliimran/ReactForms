import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleInputChange(identifier, value) {
    setFormData((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// src/components/Login.tsx
import React, { useState } from 'react';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useQuery(api.users.getUser, { email });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user === undefined) {
      // Query is still loading
      return;
    }
    if (user === null) {
      // No user found with this email
      alert("Invalid email or password");
      return;
    }
    // In a real app, never compare passwords like this. Use proper hashing.
    if (user.passwordHash === password) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
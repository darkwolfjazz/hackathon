// src/components/Login.tsx
import React, { useState } from 'react';
import { useMutation } from "convex/react";
import { getUser } from "../../convex/users"; // Adjust the path if necessary

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUserMutation = useMutation("users:getUser"); // Use string reference

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await getUserMutation({ email });
      if (user && user.passwordHash === password) { // In a real app, hash the password
        alert("Login successful!");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in");
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
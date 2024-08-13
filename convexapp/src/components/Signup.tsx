import React, { useState } from 'react';
import { useMutation } from "convex/react";
import { createUser } from '../../convex/users'; // Ensure this path is correct

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the mutation directly as a reference
  const createUserMutation = useMutation("users:createUser");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserMutation({ email, password });
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
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
      <button type="submit">Sign Up</button>
    </form>
  );
}

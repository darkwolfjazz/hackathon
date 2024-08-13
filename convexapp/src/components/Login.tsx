import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { getUser } from '../../convex/users';; // Ensure this path is correct

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the getUser query correctly
  const { data: user, isLoading, isError, error } = useQuery(getUser,{ email });
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) {
      alert("Loading...");
      return;
    }
    if (isError) {
      console.error(error);
      alert("Error fetching user");
      return;
    }
    if (!user) {
      alert("User not found");
      return;
    }

    if (user.passwordHash === password) { // In a real app, hash the password
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

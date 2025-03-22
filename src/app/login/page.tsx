// app/login/page.tsx
"use client";
import { signInWithGoogle } from "@/services/auth";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return; // empêche les clics multiples
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      console.log("Utilisateur connecté :", user);
      // redirection ou traitement après login...
    } catch (err) {
      console.error("Erreur de connexion :", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLogin} disabled={loading}>
      {loading ? "Connexion..." : "Login"}
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import useRoleRedirect from "@/hooks/useRoleRedirect";
import { auth } from "../services/firebase";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Appel direct au hook qui gère la redirection selon les rôles
  useRoleRedirect();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Seulement si l'utilisateur n'est PAS connecté, redirige vers login
        router.replace("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <p>Redirection en cours...</p>
    </main>
  );
}

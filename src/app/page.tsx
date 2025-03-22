"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
// Notez le chemin relatif : on remonte de deux dossiers pour aller de `src/app` à la racine,
// puis on entre dans le dossier `lib`
import { auth } from "../services/firebase";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si l'utilisateur est connecté, on le redirige vers la page role-redirect
        router.push("/role-redirect");
      } else {
        // Sinon, on le redirige vers la page de login
        router.push("/login");
      }
    });
    setLoading(false);

    // Nettoyage
    return () => unsubscribe();
  }, [router]);

  // Optionnel : afficher un écran de chargement
  if (loading) {
    return <p>Chargement...</p>;
  }

  // Vous pouvez rendre un composant minimal ou rien du tout
  return (
    <main className="flex items-center justify-center min-h-screen">
      <p>Redirection en cours...</p>
    </main>
  );
}

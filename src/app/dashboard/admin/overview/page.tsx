"use client";
import useRole from "@/hooks/useRole";
import { useRouter } from "next/navigation"; // <-- Correction ICI

export default function AdminOverview() {
  const { user, role, loading } = useRole();
  const router = useRouter();

  if (loading) return <div>Chargement...</div>;

  if (!user || role !== "admin") {
    router.replace("/login"); // recommandation : utilise router.replace pour éviter l'historique inutile
    return null;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard Admin</h1>
      <p>Bienvenue, {user.displayName}</p>
    </div>
  );
}

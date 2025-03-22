import useRole from "@/hooks/useRole";
import { useRouter } from "next/router";

export default function AdminOverview() {
  const { user, role, loading } = useRole();
  const router = useRouter();

  if (loading) return <div>Chargement...</div>;

  if (!user || role !== "admin") {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard Admin</h1>
      <p>Bienvenue, {user.displayName}</p>
    </div>
  );
}

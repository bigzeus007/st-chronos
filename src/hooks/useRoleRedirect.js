"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useRole from "./useRole";

const useRoleRedirect = () => {
  const router = useRouter();
  const { user, role, loading } = useRole();

  useEffect(() => {
    if (!loading && user) {
      switch (role) {
        case "admin":
          router.replace("/dashboard/admin/overview");
          break;
        case "technicien":
          router.replace("/dashboard/technicien");
          break;
        case "cs":
          router.replace("/dashboard/cs");
          break;
        default:
          router.replace("/unauthorized");
          break;
      }
    } else if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, role, loading, router]);
};

export default useRoleRedirect;

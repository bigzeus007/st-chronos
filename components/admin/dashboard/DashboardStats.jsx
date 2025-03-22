"use client";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";
import { collection, query, getCountFromServer } from "firebase/firestore";

export default function DashboardStats() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      const vehiculesCount = await getCountFromServer(query(collection(db, "vehicules")));
      setStats({ vehiculesCount: vehiculesCount.data().count });
    };

    fetchStats();
  }, []);

  return (
    <div>
      <p>Nombre total de véhicules en attente : {stats.vehiculesCount}</p>
    </div>
  );
}
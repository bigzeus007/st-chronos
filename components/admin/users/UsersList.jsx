"use client";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Nom</th>
          <th>Rôle</th>
          <th>Statut</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.displayName}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
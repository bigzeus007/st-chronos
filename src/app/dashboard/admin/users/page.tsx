"use client";
import UsersList from '../../../../../components/admin/users/UsersList';

export default function UsersManagement() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Gestion des Utilisateurs</h1>
      <UsersList />
    </div>
  );
}
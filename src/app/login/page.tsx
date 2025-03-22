import { signInWithGoogle } from "@/lib/auth";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Connexion avec Google
      </button>
    </div>
  );
}

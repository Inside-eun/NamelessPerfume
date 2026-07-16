import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6">
      <h1 className="mb-8 font-serif text-lg tracking-wide">
        Name:less Perfume Admin
      </h1>
      <LoginForm />
    </div>
  );
}

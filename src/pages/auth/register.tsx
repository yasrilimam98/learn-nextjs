import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      Sudah Punya Akun ? <Link href="/auth/login">Login</Link>
    </div>
  );
};

export default RegisterPage;

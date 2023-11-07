import Link from "next/link";
import { useRouter } from "next/router";

import style from "./Login.module.css";

const LoginViews = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div className={style.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum Punya Akun ? <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginViews;

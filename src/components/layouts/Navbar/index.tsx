import { signIn, signOut, useSession } from "next-auth/react";
import style from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={style.navbar}>
      <div>Navbar</div>
      <div>
        {data && data.user.fullname} {data ? <button onClick={() => signOut()}>Sign Out</button> : <button onClick={() => signIn()}>Sign In</button>}
      </div>
    </div>
  );
};

export default Navbar;

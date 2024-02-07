import { useSession } from "next-auth/react";

const ProfilPage = () => {
  const { data }: any = useSession();

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>{data && data.user.email}</h2>
    </div>
  );
};

export default ProfilPage;

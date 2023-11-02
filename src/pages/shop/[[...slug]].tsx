import { useRouter } from "next/router";

const shopPage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {query.slug && query.slug[0]}</p>
    </div>
  );
};

export default shopPage;

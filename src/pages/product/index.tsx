import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const productPage = () => {
  const [iSLogin, setIsLogin] = useState(true);
  // const [products, setProduct] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!iSLogin) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProduct(response.data);
  //     });
  // }, []);

  return (
    <div>
      {/* <ProductView products={products} /> */}
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default productPage;

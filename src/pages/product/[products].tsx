import { fetcher } from "@/lib/swr/fetcher";
import DetailProduk from "@/views/DetailProduk";
import { useRouter } from "next/router";
import useSWR from "swr";
import { ProducType } from "../../../types/product.type";

// const DetailproductPage = () => {
const DetailproductPage = ({ products }: { products: ProducType }) => {
  const { query } = useRouter();

  // Client-side Data Fetching
  // const { data, error, isLoading } = useSWR(`/api/products/${query.products}`, fetcher);
  // console.log(data);

  return (
    <div>
      {/* Client side */}
      {/* <DetailProduk products={isLoading ? [] : data.data} /> */}

      {/* Server side */}
      <DetailProduk products={products} />
    </div>
  );
};

export default DetailproductPage;

// server side
export async function getServerSideProps({ params }: { params: { products: string } }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.products}`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}

// SSR

import ProductView from "@/views/Product";
import { ProducType } from "../../../types/product.type";

const ProductPage = (props: { products: ProducType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// dipanggil setiap ada request

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}

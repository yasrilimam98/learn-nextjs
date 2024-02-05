import { ProducType } from "../../../types/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProduk = ({ products }: { products: ProducType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={products.images} alt={products.name} />
        </div>
        <h5 className={styles.productDetail__name}>{products.name}</h5>
        <p className={styles.productDetail__category}>{products.category}</p>
        <p className={styles.productDetail__price}>{products.price && products.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
      </div>
    </>
  );
};

export default DetailProduk;

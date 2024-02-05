import Link from "next/link";
import styles from "./Product.module.scss";

type ProducType = {
  id: string;
  name: string;
  price: number;
  images: string;
  category: string;
};

const ProductView = ({ products }: { products: ProducType[] }) => {
  console.log(products);

  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Products</h1>
      <div className={styles.product__content}>
        {products?.length > 0 ? (
          <>
            {products.map((item: ProducType) => (
              <Link href={`/product/${item.id}`} key={item.id} className={styles.product__content__item}>
                <div className={styles.product__content__item__image}>
                  <img src={item.images} alt={item.name} />
                </div>
                <h5 className={styles.product__content__item__name}>{item.name}</h5>
                <p className={styles.product__content__item__category}>{item.category}</p>
                <p className={styles.product__content__item__price}>{item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.product__content__skeleton}>
            <div className={styles.product__content__skeleton__image} />
            <div className={styles.product__content__skeleton__name} />
            <div className={styles.product__content__skeleton__category} />
            <div className={styles.product__content__skeleton__price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;

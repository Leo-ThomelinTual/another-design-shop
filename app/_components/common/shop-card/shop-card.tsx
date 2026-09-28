"use client"
import ProductCard from "../../ui/product-card/product-card";
import { GetShops } from "@/app/middleware/shop";

type ShopCardProps = {
  price: number;
  category: string;
}

const ShopCard = ({ price, category }: ShopCardProps) => {

  const data = GetShops(category);

  if (!data) {
    console.log('error')
    return <p>Error</p>
  }

  return (
    <>
      {data.map((datas) => datas.price <= price ? (
        <ProductCard key={datas.id} image="/img/placeholder_product.jpg" alt={datas.alt} title={datas.title} description={datas.description} price={datas.price} link={`/boutique/${category}/product/${datas.id}`} tags={["homme", "femme"]} />

      ): null)}
    </>
  )
}

export default ShopCard

interface Obj {
  id: string;
  price: number;
  desc: string;
  brand: string;
  mainPic: string;
  tag: string;
}
export function appTranslator({
  id,
  price,
  desc,
  brand,
  mainPic,
  tag
}: Obj) {
  return {
    id,
    price: (price / 100).toFixed(2),
    description: desc,
    brandName: brand,
    mainPicUrl: mainPic,
    tags: tag
  }
}
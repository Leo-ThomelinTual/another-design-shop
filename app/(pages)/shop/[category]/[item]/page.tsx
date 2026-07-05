export default async function Page(
  props: PageProps<"/shop/[category]/[item]">,
) {
  const { category, item } = await props.params;
  return (
    <>
      <h1>
        {category} / {item}
      </h1>
    </>
  );
}

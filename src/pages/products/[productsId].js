import { Button, Card, Image, Space, Typography } from "antd";

const { Title, Text } = Typography;

const ProductDetails = ({ product }) => {
  //   console.log(product);
  return (
    <div>
      <h2 className="text-2xl my-2 font-extrabold ">Product Details Page</h2>
      <Card
        hoverable
        cover={ <Image
            className="w-full h-[300px]"
            height={300}
            alt={product.productName}
            src={product.image}
          />}
        className="mb-4"
      >
       
        <Space direction="vertical" size={18}>
          <div className="block lg:flex items-center justify-between">
            <section className="flex flex-col my-2">
              <Title level={4}>{product.productName}</Title>
              <Text strong>Category:</Text>
              <Text>{product.category}</Text>
              <Text strong>Status:</Text>
              <Text type={product.status === "In Stock" ? "success" : "danger"}>
                {product.status}
              </Text>
              <Text strong>Price:</Text>
              <Text>${product.price}</Text>
              <Text strong>Description:</Text>
              <Text>{product.description}</Text>

              <Text strong>Individual Rating:</Text>
              <Text>{product.individualRating} out of 5 Stars</Text>
              <Text strong>Average Rating:</Text>
              <Text>{product.averageRating} out of 5 Stars</Text>
              <Text strong>Reviews:</Text>
            </section>

            <div className="">
              <Text strong>Key Features:</Text>
              {Object.entries(product.keyFeatures).map(([key, value]) => (
                <div key={key}>
                  <Text strong>{key}:</Text> <Text>{value}</Text>
                </div>
              ))}
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const url = `https://pc-builder-server-indol.vercel.app/api/v1/pc/`;

  const res = await fetch(url);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productsId: product?._id }, // Use pcId instead of productsId
  }));

  // console.log(products?.data?.category);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  // console.log(params, "params");

  const res = await fetch(
    `https://pc-builder-server-indol.vercel.app/api/v1/pc/${params?.productsId}`
  ); // Use params.pcId here
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data?.data,
    },
  };
};

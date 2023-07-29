import mainAPi from "@/components/mainAPi";

import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const PcDetails = ({ products }) => {
  // console.log(products);

  if (!products?.length) {
    return <h2>Loading .......</h2>;
  }

  return (
    <div>
      <h3>Pc Details</h3>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => {
          const {
            image,
            productName,
            category,
            status,
            price,
            description,
            individualRating,
            // keyFeatures: { Brand, Model, Specification, Port, Voltage },
          } = product;
          return (
            <Col key={product?.id} style={{ marginInline: "auto" }}>
              <Card
                style={{ width: 300 }}
                cover={
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="card"
                    layout="responsive"
                  />
                }
              >
                <Meta
                  //   avatar={
                  //     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  //   }
                  title={productName}
                  description={description}
                />
                <section
                  style={{ fontFamily: "fantasy", marginInline: "10px" }}
                >
                  <h3>Category :: {category}</h3>
                  <h3>Price :: {price}</h3>
                  <h3>Status :: {status}</h3>
                  <h3>Rating :: {individualRating}</h3>
                </section>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PcDetails;


export const getStaticPaths = async () => {
  const url = `https://pc-builder-server-indol.vercel.app/api/v1/pc/`;

  const res = await fetch(url);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { pcCategory: product?.category }, // Use pcId instead of pcCategory
  }));

  console.log(products?.data?.category);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  // console.log(params, "params");

  const res = await fetch(
    `https://pc-builder-server-indol.vercel.app/api/v1/pc/category?category=${params?.pcCategory}`
  ); // Use params.pcId here
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data?.data,
      
    },
  };
};

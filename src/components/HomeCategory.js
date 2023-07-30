import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCategory = ({ categories }) => {
  
  return (
    <div className="my-5">
       <h2 className="text-2xl font-extrabold my-2">Feature Category</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {categories?.map((category) => {
          return (
            <Col key={category?.category} xs={24} lg={8}>
              <Link
                className="shadow-2xl my-3 text-center"
                href={`/pc/${category?.category}`}
              >
                <h2 className="text-xl font-semibold font-serif">{category?.category}</h2>
                <Image
                  src={category?.imageSrc}
                  alt="category"
                  height={300}
                  width={300}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomeCategory;

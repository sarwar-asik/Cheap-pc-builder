import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <Image
          height={300}
          // layout="responsive"
          width={400}
          style={{minWidth:"100%",height:"500px"}}
          alt="banner"
          src="https://img.freepik.com/free-photo/hand-soldering-cpu-motherboard-indoors-generated-by-ai_188544-24544.jpg?w=1060&t=st=1690718027~exp=1690718627~hmac=90b4a15d566161177688d022dfa27354d4620c4027aea04d9efc00e40c068c48"
        />
      </div>
      <div>
        <Image
          height={300}
          // layout="responsive"
          width={400}
          style={{minWidth:"100%",height:"500px"}}
          alt="banner"
          src="https://img.freepik.com/free-photo/woman-working-her-workshop-creative-invention_23-2149067192.jpg?w=360&t=st=1690718032~exp=1690718632~hmac=011a35cd87cbec79f62cb2e8e12322ebc0463b8bc9f81fbe4a0c58f733cb36f8"
        />
      </div>
      <div>
        <Image
          height={300}
          // layout="responsive"
          width={400}
          style={{minWidth:"100%",height:"500px"}}
          alt="banner"
          src="https://img.freepik.com/free-photo/woman-working-her-workshop-creative-invention_23-2149067189.jpg?w=996&t=st=1690718041~exp=1690718641~hmac=f8588312e48eb391b54dcac92366b2430e147c1dffdaa80230d8aafcbe30cb52"
        />
      </div>
    </Carousel>
  );
};
export default Banner;

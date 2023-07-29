import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryPage from "./category";

const PcBuilderPage = () => {
  const categories = [
    {
      name: "Motherboard",
      imageSrc:
        "https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology_53876-108531.jpg?w=740&t=st=1690567419~exp=1690568019~hmac=d5571267a18d2f44119868ceb79ea7c875290c02d1b3deb4bc4c07a5d1b91317",
    },
    {
      name: "Monitor",
      imageSrc:
        "https://img.freepik.com/free-photo/front-view-computer-screen-office-workspace-with-keyboard-clipboard_23-2148821937.jpg?w=740&t=st=1690567532~exp=1690568132~hmac=fa1f80a2c073d438eb6d2c359d092c32cbcffbcf94afe6736370565ee8a84833",
    },
    {
      name: "CPU",
      imageSrc:
        "https://img.freepik.com/free-photo/close-up-computer-motherboard_1161-106.jpg?w=740&t=st=1690567441~exp=1690568041~hmac=61658ba4cfb9bed98d0187088da6256ca44eaf540ff871e36b71786f77c90ff0",
    },

    {
      name: "RAM",
      imageSrc:
        "https://img.freepik.com/free-photo/it-person-repairing-hardware-equipment-s_23-2147883619.jpg?w=740&t=st=1690567460~exp=1690568060~hmac=785dde958a70c5883b4391159cd0cafb2b2ac4524eb3c4bbc488b3f0463490a9",
    },
    {
      name: "Power Supply Unit",
      imageSrc:
        "https://img.freepik.com/free-photo/miniature-engineer-worker-plug-lan-cable-computer_1252-838.jpg?w=740&t=st=1690567496~exp=1690568096~hmac=dfc1e7adcb67db8ed571e901f27908d067acdace2ac689b2abe2afc4ff9db656",
    },
    {
      name: "Storage Device",
      imageSrc:
        "https://img.freepik.com/free-photo/cloud-drawer_1048-1659.jpg?w=740&t=st=1690567514~exp=1690568114~hmac=eb99fb061405718860060801d01a1b99606d781d900ea62c3f42a7199e989972",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {categories.map((category, index) => {
          return (
            <CategoryPage key={index + 1} category={category}></CategoryPage>
          );
        })}
      </div>
    </div>
  );
};

export default PcBuilderPage;

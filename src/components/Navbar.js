import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:flex">
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#2f5ec3",
          width: "100%",
          fontFamily: "cursive",
          color: "white",
          paddingBlock: "10px",
        }}
      >
        <div
          className="demo-logo"
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Cheap PC Builder
        </div>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spa",

            fontSize: "16px",
            width: "50%",
            gap:"10px"
          }}
        >
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/" className="">
            Home
          </Link>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;

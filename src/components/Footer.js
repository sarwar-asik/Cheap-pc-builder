import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <div className="block lg:flex ">
        <div>
          {/* First column content */}
          <h3>Our Service </h3>
          <p>Best quality Product</p>
          <p>Update Product</p>
          <p>PC BEst Instrument</p>
          <p>Demandble Product</p>
        </div>
        <div>
          {/* Second column content */}
          <h3>Column 2</h3>
          <p>Content for Column 2</p>
        </div>
       
      </div>
    </Footer>
  );
};

export default AppFooter;

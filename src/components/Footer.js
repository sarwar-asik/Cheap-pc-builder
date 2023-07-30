import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <div className="block lg:flex ">
        <div>
          
          <h3 className="text-2xl font-bold font-serif">Our Service </h3>
          <p>Best quality Product</p>
          <p>Update Product</p>
          <p>PC BEst Instrument</p>
          <p>Demandble Product</p>
        </div>
        <div>
        <h3 className="text-xl font-bold font-serif mt-3">Our Location </h3>
          <p className="font-mono text-lg ">Dhaka ,Bd</p>
          <p className="font-mono text-lg ">Chittagong ,Bd</p>
          <p className="font-mono text-lg ">Noakhali ,Bd</p>
        </div>
       
      </div>
    </Footer>
  );
};

export default AppFooter;

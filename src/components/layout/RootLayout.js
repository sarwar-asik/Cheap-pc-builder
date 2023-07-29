import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WindowsOutlined,
  CrownOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const { Header, Sider, Content } = Layout;

const RootLayout = ({ children }) => {
  // ! for ant
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // ! authentication

  const { data: session } = useSession();
  console.log(session);

  const categories = [
    {
      name: "CPU",
      link: "/pc/CPU",
    },
    {
      name: "Motherboard",
      link: "/pc/Motherboard",
    },
    {
      name: "RAM",
      link: "/pc/RAM",
    },
    {
      name: "Power Supply Unit",
      link: "/pc/PowerSupplyUnit",
    },
    {
      name: "Storage Device",
      link: "/pc/StorageDevice",
    },
    {
      name: "Monitor",
      link: "/pc/Monitor",
    },
  ];

  return (
    <Layout>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical text-white font-bold text-[2em] px-2">
            Cheap PC Builder
          </div>
          <Menu theme="dark" mode="inline">
            <Menu.Item icon={<WindowsOutlined />}>
              <Link href="/">Home </Link>
            </Menu.Item>

            {session?.user ? (
              <>
                <Menu.Item>
                  <Link href="/" onClick={() => signOut()}>
                    Logout{" "}
                  </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item icon={<CrownOutlined />}>
                  <Link href="/signup">SignUP </Link>
                </Menu.Item>
                <Menu.Item icon={<CrownOutlined />}>
                  <Link href="/login">Login</Link>
                </Menu.Item>
              </>
            )}

            <Menu.Item icon={<PlusSquareOutlined />}>
              <Link href="/pc">PC Builder. </Link>
            </Menu.Item>
            {/* <Menu.Item>
              <Link href="/">Home </Link>
            </Menu.Item> */}
            <Menu.SubMenu
              key="sub1"
              icon={<UserOutlined />}
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              title="Categories"
            >
             {
              categories?.map(category=> <Menu.Item key={category?.name}>
              <Link href={category?.link}>{category?.name}</Link>
            </Menu.Item>)
             }
            
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              fontFamily: "cursive",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default RootLayout;

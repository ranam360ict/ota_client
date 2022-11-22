import { Typography, Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { menuItem } from "../Utils/utils";
const { Title } = Typography;
const { Header, Content } = Layout;

const ViewOta = () => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <Typography.Title className="logo" style={{ color: "white" }}>
            OTA
          </Typography.Title>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={menuItem}
          />
        </Header>
        <Content style={{ padding: "0 215px" }}>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default ViewOta;

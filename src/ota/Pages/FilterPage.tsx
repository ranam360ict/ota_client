import {
  Layout,
  Typography,
  Row,
  Col,
  Divider,
  Collapse,
  Checkbox,
  Slider,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;
const { Header, Sider, Content } = Layout;
const FilterPage = () => {
  return (
    <>
      <Layout>
        <Sider style={{ backgroundColor: "white", padding: "5px" }}>
          <Row align="middle" justify="space-around" gutter={32}>
            <Col>
              <Typography.Title level={5} style={{ margin: "0", padding: "0" }}>
                Our Advice
              </Typography.Title>
              <Typography.Text
                type="success"
                style={{ margin: "1px", padding: "0" }}
              >
                Buy now
              </Typography.Text>
            </Col>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faChartLine} />
            </Col>
          </Row>
          <Typography.Text>
            Prices are unlikely to get any better before you travel.{" "}
            <FontAwesomeIcon icon={faCircleExclamation} />
          </Typography.Text>
          <Typography.Title
            level={5}
            style={{
              background: "#3a86ff",
              padding: "2px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            1771 out of 2023 | Reset
          </Typography.Title>
          <Collapse accordion bordered={false} ghost>
            <Panel header="Recommeded filters" key="1">
              <Row>
                <Checkbox value="A" /> <p>{"Hide 2+ stops"}</p>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse accordion bordered={false} defaultActiveKey={["1"]} ghost>
            <Panel header="Stops" key="1">
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"Nonstop Tk 217,541"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="b" checked={true} />{" "}
                <Col>{" 1 stop Tk 127,319"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="c" checked={true} />{" "}
                <Col>{" 2+ stops Tk 118,376"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse accordion bordered={false} ghost>
            <Panel header="flexible options" key="1">
              <Row>
                <Checkbox value="A" /> <p>{"No changes fees"}</p>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse bordered={false} ghost>
            <Panel header="Times" key="1">
              <Row>
                <Typography.Text>Take-off Dallas (DFW)</Typography.Text>
                <Typography.Text>Sun 5:00 PM 1:30 PM</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
              <Row>
                <Typography.Text>Take-off Dubai (DXB)</Typography.Text>
                <Typography.Text>Wed 2:00 PM 1:30 PM</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
              <Row>
                <Typography.Text>Landing Dubai (DXB)</Typography.Text>
                <Typography.Text>Mon 11:00 AM wed 1:30 PM</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
              <Row>
                <Typography.Text>Landing Dallas (DFW)</Typography.Text>
                <Typography.Text>Wed 09:00 AM Fri 4:30 PM</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
            </Panel>
          </Collapse>
          <Divider />

          <Collapse bordered={false} ghost defaultActiveKey={["1"]}>
            <Panel header="Airlines" key="1">
              <Row gutter={16}>
                <Col>Select All</Col>
                <Col>Clear All</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Air Arabia"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Air Canada Tk 209,2"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Air Canada"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Air Finance"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Alaska Airlines"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"American Air Tk 2342"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Delta"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Finnair"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"iberia"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"TLK Tk 234,532"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Oman Air"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"SunExpress"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"SWISS"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse bordered={false} ghost defaultActiveKey={["1"]}>
            <Panel header="Alliance" key="1">
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"oneworld"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"SkyTeam"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Star Alliance"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse bordered={false} ghost defaultActiveKey={["1"]}>
            <Panel header="Airports" key="1">
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Depart/return same"}</Col>
              </Row>
              <Typography.Text>Dallas</Typography.Text>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"DFW: Dallas/..TK 11809"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"DAL:Love FieldTK 9809"}</Col>
              </Row>
              <Typography.Text>Dubai</Typography.Text>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"DXB:Dubai IntITK 8575"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"DXB:Dubai IntITK 8575"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"DXB:Dubai IntITK 8575"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"DXB:Dubai IntITK 8575"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>content</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default FilterPage;

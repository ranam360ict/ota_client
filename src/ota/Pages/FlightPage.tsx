import {
  Layout,
  Typography,
  Row,
  Col,
  Divider,
  Collapse,
  Checkbox,
  Slider,
  Select,
  Tabs,
} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { RiseOutlined } from "@ant-design/icons";
import FlightCheapest from "./FlightCheapest";
import FlightQuickest from "./FlightQuickest";
import FlightBest from "./FlightBest";

const { Panel } = Collapse;
const { Header, Sider } = Layout;
const FlightPage = () => {
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
              <RiseOutlined />
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
          <Collapse bordered={false} ghost defaultActiveKey={["1"]}>
            <Panel header="Transporation type" key="1">
              <Row gutter={16}>
                <Checkbox value="a" checked={true} /> <Col>{"Flight"}</Col>
              </Row>

              <Row gutter={16}>
                <Checkbox value="a" />
                <Col>{"Flight+buses Tk 213,5"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
          <Collapse bordered={false} ghost>
            <Panel header="Duration" key="1">
              <Row>
                <Typography.Text>Flight leg</Typography.Text>
                <Typography.Text>16h 15m 53h 40m</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
              <Row>
                <Typography.Text>Layover</Typography.Text>
                <Typography.Text>0h 40m 23h 55m</Typography.Text>
              </Row>
              <Slider range defaultValue={[20, 50]} />
            </Panel>
          </Collapse>
          <Divider />
          {/* sort */}
          <Typography.Title level={5}>Sort</Typography.Title>
          <Select
            defaultValue="Recommended"
            style={{ width: "100%" }}
            // onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Chapest",
              },
              {
                value: "lucy",
                label: "Recommended",
              },

              {
                value: "Yiminghe",
                label: "Quickest",
              },
              {
                value: "Yiminghe",
                label: "Missing String [Sort_DROP_DOWN_COW_A]",
              },
              {
                value: "Yiminghe",
                label: "Earliest take-off (DFW)",
              },
            ]}
          />
          {/* BOOKING SITES */}
          <Collapse bordered={false} ghost defaultActiveKey={["1"]}>
            <Panel header="Booking sites" key="1">
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"Airlines only"}</Col>
              </Row>

              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"Air Canada Tk 245,65"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"Air France Tk 234,867"}</Col>
              </Row>

              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"American Ai TK 435,43"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{"British Air TK 857,35"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" checked={true} />{" "}
                <Col>{" BudgetAir  TK 5322,34"}</Col>
              </Row>
              <Row gutter={16}>
                <Checkbox value="a" /> <Col>{"ChatDeal Tk 1296,75"}</Col>
              </Row>
            </Panel>
          </Collapse>
          <Divider />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "white",
              padding: "5px",
              marginLeft: "15px",
            }}
          >
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Cheapest (Tk 118,843)" key="1">
                <FlightCheapest></FlightCheapest>
              </Tabs.TabPane>

              <Tabs.TabPane tab="Best (Tk 127,821)" key="2">
                <FlightBest></FlightBest>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Quickest (Tk 215,528)" key="3">
                <FlightQuickest></FlightQuickest>
              </Tabs.TabPane>
            </Tabs>
          </Header>
        </Layout>
      </Layout>
    </>
  );
};

export default FlightPage;

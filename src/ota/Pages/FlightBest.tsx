import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { ShareAltOutlined } from "@ant-design/icons";
import {
  Layout,
  Typography,
  Row,
  Col,
  Collapse,
  Card,
  Progress,
  Space,
  Button,
} from "antd";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

const FlightBest = () => {
  return (
    <>
      <Card bordered={false} style={{ width: "100%", marginTop: "10px" }}>
        <Layout
          style={{
            backgroundColor: "white",
            padding: "5px",
            marginLeft: "15px",
          }}
        >
          <Content>
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Row>
                <Button>No changes fees </Button>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>
                  <Row>American</Row>
                  <Row>Airlines</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>11:30 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>nonstop</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>11:30 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col>
                  <Typography.Text>14h 30m</Typography.Text>
                </Col>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>
                  <Row>American</Row>
                  <Row>Airlines</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>2:50 am</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>nonstop</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>11:30 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col>
                  <Typography.Text>14h 30m</Typography.Text>
                </Col>
              </Row>
              <Row>
                <Col>Operated by British Airways</Col>
                <Col offset={12}>Only 1 seat left at this price</Col>
              </Row>
            </Space>
          </Content>
          <Sider
            style={{
              backgroundColor: "white",
              padding: "5px",
              marginLeft: "15px",
              borderLeft: "2px solid #EEEEEE",
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <ShareAltOutlined />

              <Row>
                <Col offset={12}>
                  <Typography.Title level={5}>Tk 2818,977</Typography.Title>
                </Col>
              </Row>
              <Typography.Text>Hacker Fare</Typography.Text>
              <Row>
                <Link to="/traveller-info">
                  <Button type="primary">View Deal</Button>
                </Link>
              </Row>
            </Space>
          </Sider>
        </Layout>
      </Card>
      <Card bordered={false} style={{ width: "100%", marginTop: "10px" }}>
        <Layout
          style={{
            backgroundColor: "white",
            padding: "5px",
            marginLeft: "15px",
          }}
        >
          <Content>
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Row>
                <Button>No changes fees </Button>
              </Row>

              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>

                  <Row>Multiple</Row>
                  <Row> Airlines</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>1:50 pm</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>MCO</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>7:10 pm +1</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col>
                  <Typography.Text>19h 20m</Typography.Text>
                </Col>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>
                  <Row>Emirates</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>2:50 am</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>nonstop</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>9:05 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col>
                  <Typography.Text>16h 15m</Typography.Text>
                </Col>
              </Row>
              <Row>
                <Col>Operated by British Airways</Col>
                <Col offset={12}>Only 1 seat left at this price</Col>
              </Row>
            </Space>
          </Content>
          <Sider
            style={{
              backgroundColor: "white",
              padding: "5px",
              marginLeft: "15px",
              borderLeft: "2px solid #EEEEEE",
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <ShareAltOutlined />

              <Row>
                <Col offset={12}>
                  <Typography.Title level={5}>Tk 202,977</Typography.Title>
                </Col>
              </Row>
              <Typography.Text>kiwi.com</Typography.Text>
              <Row>
                <Link to="/traveller-info">
                  <Button type="primary">View Deal</Button>
                </Link>
              </Row>
            </Space>
          </Sider>
        </Layout>
      </Card>
      <Card bordered={false} style={{ width: "100%", marginTop: "10px" }}>
        <Layout
          style={{
            backgroundColor: "white",
            padding: "5px",
            marginLeft: "15px",
          }}
        >
          <Content>
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Row>
                <Button>No changes fees </Button>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>

                  <Row>Emirates</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>11:30 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>nonstop</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>12:00 pm +1</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col>
                  <Typography.Text>14h 30m</Typography.Text>
                </Col>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>
                  <Row>Multiple</Row>
                  <Row>Emirates</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>3:20 am</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>FRA</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>2:35 Pm</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col>
                  <Typography.Text>21h 15m</Typography.Text>
                </Col>
              </Row>
              <Row>
                <Col>Operated by British Airways</Col>
                <Col offset={12}>Only 1 seat left at this price</Col>
              </Row>
            </Space>
          </Content>
          <Sider
            style={{
              backgroundColor: "white",
              padding: "5px",
              marginLeft: "15px",
              borderLeft: "2px solid #EEEEEE",
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Row>
                <ShareAltOutlined />
                <Col offset={12}>Eco Special</Col>
              </Row>

              <Row>
                <Col offset={12}>
                  <Typography.Title level={5}>Tk 519,977</Typography.Title>
                </Col>
              </Row>
              <Typography.Text>CheapOair</Typography.Text>
              <Row>
                <Link to="/traveller-info">
                  <Button type="primary">View Deal</Button>
                </Link>
              </Row>
            </Space>
          </Sider>
        </Layout>
      </Card>
      <Card bordered={false} style={{ width: "100%", marginTop: "10px" }}>
        <Layout
          style={{
            backgroundColor: "white",
            padding: "5px",
            marginLeft: "15px",
          }}
        >
          <Content>
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Row>
                <Button>No changes fees </Button>
              </Row>

              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>

                  <Row>Multiple</Row>
                  <Row> Airlines</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>1:50 pm</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>MCO</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>7:10 pm +1</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col>
                  <Typography.Text>19h 20m</Typography.Text>
                </Col>
              </Row>
              <Row gutter={100}>
                <Col>
                  <Row>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </Row>
                  <Row>Emirates</Row>
                </Col>

                <Col>
                  <Row>
                    <Typography.Title level={5}>2:50 am</Typography.Title>
                  </Row>
                  <Row>DXB</Row>
                </Col>
                <Col span={4}>
                  <Row>
                    <Progress percent={100} showInfo={false} />
                  </Row>
                  <Row>nonstop</Row>
                </Col>
                <Col>
                  <Row>
                    <Typography.Title level={5}>9:05 am</Typography.Title>
                  </Row>
                  <Row>DFW</Row>
                </Col>
                <Col>
                  <Typography.Text>16h 15m</Typography.Text>
                </Col>
              </Row>
              <Row>
                <Col>Operated by British Airways</Col>
                <Col offset={12}>Only 1 seat left at this price</Col>
              </Row>
            </Space>
          </Content>
          <Sider
            style={{
              backgroundColor: "white",
              padding: "5px",
              marginLeft: "15px",
              borderLeft: "2px solid #EEEEEE",
            }}
          >
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <ShareAltOutlined />

              <Row>
                <Col offset={12}>
                  <Typography.Title level={5}>Tk 202,977</Typography.Title>
                </Col>
              </Row>
              <Typography.Text>kiwi.com</Typography.Text>
              <Row>
                <Link to="/traveller-info">
                  <Button type="primary">View Deal</Button>
                </Link>
              </Row>
            </Space>
          </Sider>
        </Layout>
      </Card>
    </>
  );
};

export default FlightBest;

import { FormOutlined, InfoCircleFilled } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Tabs,
  Typography,
} from "antd";

const TravellerInfo = () => {
  return (
    <>
      <Typography.Title>Traveler Info</Typography.Title>
      <Col span={12}>
        <Typography.Text>
          To comply with the TSA Secure Flight program, the traveler information
          listed here must exactly match the information of the
          government-issued photo ID that each traveler presents at the airport.
        </Typography.Text>
      </Col>
      <Col span={12} style={{ border: "1px solid gray", padding: "10px" }}>
        <Typography.Text>
          <InfoCircleFilled />
          {"   "} Sign in to your MileagePlus® account for even faster checkout.
        </Typography.Text>
      </Col>

      <Row style={{ marginTop: "20px" }}>
        <Col span={12}>
          <Row style={{ background: "#002244" }}>
            <Typography.Text style={{ padding: "10px", color: "white" }}>
              Traveler 1
            </Typography.Text>
          </Row>
          <Form
            style={{ border: "1px solid gray", padding: "15px" }}
            layout="vertical"
          >
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="First name"
                    name="firstname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Last name"
                    name="lastname"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    label="Middle name/initial"
                    name="middlename"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="(if shown on ID)" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Date of birth"
                    name="dateofbirth"
                    rules={[
                      {
                        required: true,
                        message: "Please input your birth!",
                      },
                    ]}
                  >
                    <Row gutter={3}>
                      <Col span={12}>
                        <Select
                          defaultValue="MONTH"
                          options={[
                            {
                              value: "JANUARY",
                              label: "JANUARY",
                            },
                            {
                              value: "FEBRUARY",
                              label: "FEBRUARY",
                            },
                            {
                              value: "MARCH",
                              label: "MARCH",
                            },
                            {
                              value: "APRIL",
                              label: "APRIL",
                            },
                            {
                              value: "MAY",
                              label: "MAY",
                            },
                            {
                              value: "JUNE",
                              label: "JUNE",
                            },
                            {
                              value: "JULY",
                              label: "JULY",
                            },
                          ]}
                        />
                      </Col>
                      <Col span={6}>
                        <Input placeholder="DD" />
                      </Col>
                      <Col span={6}>
                        <Input placeholder="YYYY" />
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select a gender"
                      options={[
                        {
                          value: "male",
                          label: "male",
                        },
                        {
                          value: "female",
                          label: "female",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={7}>
                  <Form.Item
                    label="Suffix"
                    name="suffix"
                    rules={[
                      {
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Select
                      defaultValue="Select a suffix"
                      options={[
                        {
                          value: "DDS",
                          label: "DDS",
                        },
                        {
                          value: "ESQ",
                          label: "ESQ",
                        },
                        {
                          value: "||",
                          label: "||",
                        },
                        {
                          value: "|||",
                          label: "|||",
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Divider />
              </Row>

              <Collapse defaultActiveKey={["1"]} ghost>
                <Collapse.Panel
                  header="Frequent flyer program (optional)"
                  key="1"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Frequent flyer program"
                        name="username"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Select
                          defaultValue="Select program"
                          options={[
                            {
                              value: "United MileagePlus",
                              label: "United MileagePlus",
                            },
                            {
                              value: "Aer Lingus Aeroplan",
                              label: "Aer Lingus Aeroplan",
                            },
                            {
                              value: "Asian Club",
                              label: "Asian Club",
                            },
                            {
                              value: "Azul TudoAzul",
                              label: "Azul TudoAzul",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Frequent flyer number"
                        name="flyernumber"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                  </Row>
                </Collapse.Panel>

                <Collapse.Panel
                  header="Traveler contact information (optional)"
                  key="2"
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="Traveler contact information"
                        name="username"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Select
                          defaultValue="Select program"
                          options={[
                            {
                              value: "united states +1",
                              label: "united states +1",
                            },
                            {
                              value: "Algeria +234",
                              label: "Algeria +234",
                            },
                            {
                              value: "Austria +43",
                              label: "Austria +43",
                            },
                            {
                              value: "Cuba +53",
                              label: "Cuba +53",
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Mobile Number"
                        name="mobile"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                  </Row>
                </Collapse.Panel>

                <Collapse.Panel header="Add TSA Precheck/PASS ID" key="3">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        label="TSA PreCheck Number / PASS ID"
                        name="tsa"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Redress Number"
                        name="Redressnumber"
                        rules={[
                          {
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                    </Col>
                  </Row>
                </Collapse.Panel>
              </Collapse>
            </Space>
          </Form>
        </Col>
        <Col
          span={6}
          offset={1}
          style={{ border: "1px solid gray", padding: "5px" }}
        >
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Your Trip" key="1">
              <Space
                direction="vertical"
                size="middle"
                style={{ display: "flex" }}
              >
                <Row>
                  <Typography.Title level={5}>
                    ROUNDEDTRIP (1 TRAVELER)
                  </Typography.Title>{" "}
                  <Col>
                    <Button type="link">
                      <FormOutlined />{" "}
                      <Typography.Text underline>
                        Revice this trip
                      </Typography.Text>
                    </Button>
                  </Col>
                </Row>
                <Row justify="center">
                  <Card size="small" style={{ width: 300 }}>
                    <Typography.Title level={5}>
                      Dallas/Fort Worth DFW to Dubai DXB
                    </Typography.Title>
                    <Typography.Text>
                      Nov 27Sunday, November 274:20 pm to 10:55 pm1 stop
                    </Typography.Text>
                    <Row>
                      <Button type="link">show details</Button>
                    </Row>
                  </Card>
                </Row>
                <Row justify="center">
                  <Card size="small" style={{ width: 300 }}>
                    <Typography.Title level={5}>
                      Dallas/Fort Worth DFW to Dubai DXB
                    </Typography.Title>
                    <Typography.Text>
                      Nov 27Sunday, November 274:20 pm to 10:55 pm1 stop
                    </Typography.Text>
                    <Row>
                      <Button type="link">show details</Button>
                    </Row>
                  </Card>
                </Row>

                <Row>
                  <Col offset={3}>Fare</Col>
                  <Col offset={13}>$2,114.00</Col>
                </Row>
                <Row>
                  <Col offset={3}>Taxes and fees</Col>
                  <Col offset={9}>$164.88</Col>
                </Row>
                <Row>
                  <Col offset={3}>
                    <Typography.Title level={4}>Total due</Typography.Title>
                  </Col>
                  <Col offset={9}>
                    <Typography.Title level={5}>$ 2,311.88</Typography.Title>
                  </Col>
                </Row>
              </Space>
              <Row>
                <Col offset={3}>or starting from $207/month</Col>
              </Row>
              <Button block type="primary">
                Continue
              </Button>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Cost breakdown" key="2">
              <Space
                direction="vertical"
                size="middle"
                style={{ display: "flex" }}
              >
                <Typography.Title level={5}>Fare</Typography.Title>
                <Row>
                  <Typography.Text>1 adult (18-64)</Typography.Text>
                  <Col offset={10}>$ 2,144.00</Col>
                </Row>
                <Typography.Title level={5}>Taxes and Fees</Typography.Title>
              </Space>
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default TravellerInfo;

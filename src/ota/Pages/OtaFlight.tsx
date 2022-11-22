import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Form,
  Row,
  Col,
  Select,
  Button,
  Modal,
  DatePicker,
} from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
const OtaFlight = () => {
  const [formChange, setFormChange] = useState<boolean>(true);
  const [formChanges, setFormChanges] = useState<string>("");
  const [toChanges, settoChanges] = useState<string>("");
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  let initialCounters = [
    { key: 1, value: "adults", label: "Adults 18-64", count: 1 },
    { key: 2, value: "students", label: "Students over 18", count: 0 },
    { key: 3, value: "youth", label: "Youths 12-17", count: 0 },
    { key: 4, value: "children", label: "Children 2-11", count: 0 },
    {
      key: 5,
      value: "Toddlers",
      label: "Toddlers in own seat under 2",
      count: 0,
    },
    { key: 6, value: "infants", label: "Infants on lap under 2", count: 0 },
  ];

  const [counters, setCounters] = useState<any>(initialCounters);

  //selectpax count Increament Number
  function handleIncrementClick(index: number) {
    const nextCounters: any = counters.map((c: any, i: number) => {
      if (i === index) {
        if (
          (c.key === 1 && c.count < 9) ||
          (c.key === 2 && c.count < 8) ||
          (c.key === 3 && c.count < 7) ||
          (c.key === 4 && c.count < 7) ||
          (c.key === 5 && c.count < 7) ||
          c.key === 6
        ) {
          return { ...c, count: c.count + 1 };
        } else {
          return c;
        }
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  //selectpax count decreament Number
  function handleIncrementClicks(index: number) {
    const nextCounters = counters.map((c: any, i: number) => {
      console.log(c);

      if (i === index) {
        return { ...c, count: c.count - 1 };
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  const handleChange = (values: any) => {
    const body: any = {
      ...values,
      // fromDate: moment(values.date[0]).format("YYYY-MM-DD"),
      // toDate: moment(values.date[1]).format("YYYY-MM-DD"),
    };
    // delete body.date;
    console.log(body);
  };
  const onFill = () => {
    setFormChange(!formChange);
    if (formChanges) {
      form.setFieldsValue({
        fromvalue: `${formChange ? toChanges : formChanges}`,
        tovalue: `${formChange ? formChanges : toChanges}`,
      });
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(counters);

  let countNumber = 0;
  const result = counters?.filter((val: any) => {
    countNumber = countNumber + val.count;
    if (countNumber === 1) {
      return val.count === 1;
    }
  });
  // console.log(result);
  // console.log(countNumber);
  return (
    <>
      <Typography.Title level={2} style={{ margin: "50px 0" }}>
        Search hundreds of flight sites at once.
      </Typography.Title>
      <Form
        // onFinish={handleChange}
        // form={form}
        name="control-hooks"
        layout="vertical"
      >
        <Row gutter={50}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Form.Item name="round-trip" label="Select Trip">
              <Select
                placeholder="roundtrip"
                options={[
                  {
                    value: "round-trip",
                    label: "Round-trip",
                  },
                  {
                    value: "one-way",
                    label: "One-way",
                  },
                  {
                    value: "multi-city",
                    label: "Multi-city",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Form.Item name="adultsModal" label="Select Pax">
              <>
                {/* <Button block value="default">
                  Select pax
                </Button> */}
                <Button block value="default" onClick={showModal}>
                  {countNumber === 1
                    ? `${countNumber} ${result[0].value}`
                    : `${countNumber} travellers`}{" "}
                  <DownOutlined />
                </Button>

                <Modal
                  title="Basic Modal"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <Row gutter={[0, 8]}>
                    {counters.map((counter: any, i: any) => (
                      <React.Fragment key={counter.key}>
                        <Col span={11}>
                          <Typography.Title level={5}>
                            {counter?.label}
                          </Typography.Title>
                        </Col>
                        <Col span={8} offset={5}>
                          <Button
                            type="primary"
                            disabled={counter.count == 0}
                            onClick={() => {
                              handleIncrementClicks(i);
                            }}
                          >
                            -
                          </Button>
                          {"  "}
                          {counter.count}
                          {"  "}
                          <Button
                            disabled={
                              (i === 5 &&
                                counters[0].count === counters[5].count) ||
                              (i === 5 &&
                                counters[1].count === counters[5].count) ||
                              (i === 5 &&
                                counters[2].count === counters[5].count)
                            }
                            type="primary"
                            onClick={() => {
                              handleIncrementClick(i);
                            }}
                          >
                            +
                          </Button>
                        </Col>
                      </React.Fragment>
                    ))}
                  </Row>
                </Modal>
              </>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Form.Item name="class" label="Select class">
              <Select
                placeholder="Economy"
                options={[
                  {
                    value: "Economy",
                    label: "Economy",
                  },
                  {
                    value: "Premium-economy",
                    label: "Premium Economy",
                  },
                  {
                    value: "business",
                    label: "Business",
                  },
                  {
                    value: "first",
                    label: "First",
                  },
                  {
                    value: "multiple",
                    label: "Multiple",
                  },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row align={"middle"}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Form.Item name="fromvalue" label="From">
              <Select
                placeholder="From ?"
                onChange={(e) => setFormChanges(e)}
                showSearch
              >
                <Option value="Dallas, Texas,United States DFW">
                  Dallas, Texas,United States DFW
                </Option>
                <Option value="Dallas, Texas, United States ADS">
                  Dallas, Texas, United States ADS
                </Option>
                <Option value="Dallas-Fort Worth Metropoliton Area, Texas, UnitedStates">
                  Dallas-Fort Worth Metropoliton Area, Texas, UnitedStates
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col onClick={onFill} xs={24} sm={24} md={24} lg={2} xl={2}>
            <Form.Item label=" ">
              <Row align="bottom" justify="center">
                <Row className="rotate">
                  <Button type="primary" size="small">
                    <ArrowLeftOutlined />
                    <ArrowRightOutlined />
                  </Button>
                </Row>
              </Row>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Form.Item name="tovalue" label="To">
              <Select
                placeholder="To ?"
                onChange={(e) => settoChanges(e)}
                showSearch
              >
                <Option value="Dallas-Fort Worth Metropoliton Area, Texas, UnitedStates">
                  Dallas-Fort Worth Metropoliton Area, Texas, UnitedStates
                </Option>
                <Option value="Dallas, Texas, United States ADS">
                  Dallas, Texas, United States ADS
                </Option>
                <Option value="Dubai">Dubai</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <Form.Item label="Choose Date" name="date" required>
              <RangePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Link to="/filter-page">
            <Button type="primary">Search</Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default OtaFlight;

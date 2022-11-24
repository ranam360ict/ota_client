import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Card size="small" style={{ width: "600px", margin: "0 auto" }}>
        <Row justify="center" align="top" style={{ marginTop: "40px" }}>
          <Col>
            <Typography.Title>Register Form</Typography.Title>
          </Col>
        </Row>

        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Row gutter={10} justify="center">
            <Col span={10}>
              <Form.Item
                label="FullName"
                name="username"
                rules={[
                  { required: true, message: "Please input your fullname!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={10} justify="center">
            <Col span={10}>
              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[
                  { required: true, message: "Please input your mobile!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                label="NID Number"
                name="NID Number"
                rules={[
                  { required: true, message: "Please input your NID Number!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="center" gutter={10}>
            <Col span={10}>
              <Form.Item
                label="Dath of Birth"
                name="dateofbirth"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                label="Present address"
                name="presentadd"
                rules={[
                  {
                    required: true,
                    message: "Please input your Present address!",
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16} justify="center">
            <Col span={10}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                label="Confirm Password"
                name="confirm-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm-password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Col offset={2}>
            <Form.Item
              name="remember"
              valuePropName="checked"
              //   wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>I accept Terms of use</Checkbox>
            </Form.Item>
          </Col>
          <Col offset={2}>
            <Form.Item>
              <Link to="/flight">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Link>
            </Form.Item>
          </Col>
        </Form>
      </Card>
    </>
  );
};

export default Register;

import { Col, DatePicker, Form, Input, Radio, Row, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const CarRental = () => {
  return (
    <>
      <Typography.Title level={4}>
        Car rentals for any kind of trip
      </Typography.Title>
      <Typography.Text>
        Compare deals from the biggest car rental companies
      </Typography.Text>
      <Row>
        <Radio value={1}>Return to same location</Radio>
        <Radio value={1}>Return to different location</Radio>
      </Row>

      <Form>
        <Form.Item>
          <Col span={6}>
            <Input
              size="large"
              maxLength={10}
              placeholder="Pick up Location"
              prefix={<FontAwesomeIcon icon={faCar} />}
            />
          </Col>
        </Form.Item>
        <DatePicker suffixIcon={<FontAwesomeIcon icon={faCar} />} />
        <DatePicker.RangePicker
          suffixIcon={<FontAwesomeIcon icon={faCar} />}
          superNextIcon={<FontAwesomeIcon icon={faCar} />}
        />
      </Form>
    </>
  );
};

export default CarRental;

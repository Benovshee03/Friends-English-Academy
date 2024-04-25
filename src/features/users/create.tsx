import React from "react";
import { Card, Col, Row } from "antd";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import { addUser } from "./userSlice";
import { useNavigate } from "react-router-dom";
import FormComponent from "./components/registerForm";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = UserAppDispatch();


  const onFinish = (values: any) => {
    dispatch(addUser(values));
    navigate("/admin/users");
  };

  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <FormComponent onFinish={onFinish} />
        </Col>
      </Row>
    </Card>
  );
};

export default Create;
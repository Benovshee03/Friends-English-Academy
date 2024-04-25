import React from "react";
import { Card, Col, Row } from "antd";
import { UserAppDispatch } from "../../app/hooks";
import { authRegister } from "./authSlice";
import { useNavigate } from "react-router-dom";
import Register from "./components/register";
const AuthRegister: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = UserAppDispatch();


  const onFinish = (values: any) => {
    dispatch(authRegister(values));
    navigate("/");
  };

  return (
    <Card>
      <Row style={{ marginTop: 16 }}>
        <Col span={24}>
          <Register onFinish={onFinish} />
        </Col>
      </Row>
    </Card>
  );
};

export default AuthRegister;
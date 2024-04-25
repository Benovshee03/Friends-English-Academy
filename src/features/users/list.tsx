import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Row,
  Table,
  Col,
  Result,
  Button,
  Tooltip,
  TableProps,
  Dropdown,
  Space,
  Menu,
  Popconfirm,
} from "antd";
// import "./list.css";
import { UserType } from "./type";
import { UserAppDispatch, useAppSelector } from "../../app/hooks";
import {
    deleteUser,
    fetchUsers,
    fetchUser,
    updateUser,
    addRoles,
  } from "./userSlice";
import {
  SearchOutlined,
  PlusOutlined,
  SettingOutlined,
  EditOutlined,
  PropertySafetyOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Card from "antd/es/card/Card";
// import CustomModal from "../../components/Modal";
// import UserDetail from "./components/userDetails";
import FormComponent from "./components/registerForm";
// import RoleSelectForm from "./components/roleSelectForm"; 

const List: React.FC = () => {
  const [open, setOpen] = useState({
    open: false,
    content: "",
  });

  const [roleModal, setRoleModal] = useState(false);

  const dispatch = UserAppDispatch();
  const users = useAppSelector((state: any) => state.users.list);
  const user = useAppSelector((state: any) => state.users.selected);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onDetailsHandle = useCallback(
    (e: boolean, id?: string) => {
      setOpen({
        open: e,
        content: "details",
      });
      if (id) {
        dispatch(fetchUser(id));
      }
    },
    [dispatch]
  );

  const onDeleteHandle = useCallback(
    (e: any) => {
      dispatch(deleteUser(e));
    },
    [dispatch]
  );

  const onEditHandle = useCallback(
    (e: boolean, id?: string) => {
      if (id) {
        dispatch(fetchUser(id));
      }
      setOpen({
        open: e,
        content: "edit",
      });
    },
    [dispatch]
  );

  const onFinish = (values: any) => {
    dispatch(updateUser(values));
    setOpen({ open: false, content: "" });
  };

  /**
   * @description Role select form submit handler
   * @param Current User and Selected Roles
   */
  const onRoleFinish = (values: any) => {
    dispatch(addRoles(values));
  };

  const onRoleSelectHandle = useCallback(
    (e: boolean, id?: string) => {
      setRoleModal(e);
      if (id) {
        dispatch(fetchUser(id));
      }
    },
    [dispatch]
  );

  const onNavigateToCreate = () => navigate("/admin/users/create");

  type ColumnType = TableProps<UserType>["columns"] | any;
  const columns: ColumnType = useMemo(
    () => [
      {
        title: "User Name",
        dataIndex: "username",
        key: `username`,
      },
      {
        title: "First Name",
        dataIndex: "firstname",
        key: `firstname`,
      },
      {
        title: "Last Name",
        dataIndex: "lastname",
        key: `lastname`,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: `email`,
      },
      {
        title: "Actions",
        key: `actions`,
        dataIndex: "_id",
        render: (_: any) => {
          return (
            <Dropdown
              trigger={["click"]}
              dropdownRender={(menu) => (
                <div>
                  <Menu>
                    <Menu.Item
                      key={`edit_${_}`}
                      onClick={() => onEditHandle(true, _)}
                      icon={<EditOutlined />}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      key={`details_${_}`}
                      onClick={() => onDetailsHandle(true, _)}
                      icon={<SearchOutlined />}
                    >
                      Details
                    </Menu.Item>
                    <Menu.Item
                      key={`add_role${_}`}
                      onClick={() => onRoleSelectHandle(true, _)}
                      icon={<PropertySafetyOutlined />}
                    >
                      Add Role
                    </Menu.Item>
                    <Menu.Item
                      key={`delete_${_}`}
                      icon={<DeleteOutlined />}
                      danger
                    >
                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => onDeleteHandle(_)}
                      >
                        Delete
                      </Popconfirm>
                    </Menu.Item>
                  </Menu>
                </div>
              )}
            >
              <Button size={"middle"}>
                <Space>
                  <SettingOutlined />
                </Space>
              </Button>
            </Dropdown>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Card>
        <Row>
          <Col
            xs={{ span: 24, offset: 0 }}
            sm={{ span: 24, offset: 0 }}
            md={{ span: 0, offset: 0 }}
          >
            <Result
              status="403"
              title="403"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Pervin Nerdesin?</Button>}
            />
          </Col>
          <Col
            xs={{ span: 0, offset: 0 }}
            sm={{ span: 0, offset: 0 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}
            xl={{ span: 24, offset: 0 }}
            xxl={{ span: 24, offset: 0 }}
            style={{ marginBottom: 16 }}
          >
            <Tooltip title="Create">
              <Button
                onClick={onNavigateToCreate}
                style={{ float: "right" }}
                type="primary"
                icon={<PlusOutlined />}
              >
                Yeni User
              </Button>
            </Tooltip>
          </Col>
          <Col span={24}>
            <Table
              size="middle"
              locale={{
                emptyText: "Data Yok :(",
                filterSearchPlaceholder: "Ara",
              }}
              columns={columns}
              dataSource={users}
            />
          </Col>
        </Row>
      </Card>

      {/* <CustomModal
        title={`Kullanıcı Role Ekle`}
        width={60}
        open={roleModal}
        onOpenHandler={onRoleSelectHandle}
        content={<RoleSelectForm onFinish={onRoleFinish} user={user} />}
      />

      {open.content === "details" ? (
        <CustomModal
          title={`User Details`}
          width={90}
          open={open.open}
          onOpenHandler={onDetailsHandle}
          content={<UserDetail user={user} />}
        />
      ) : (
        <CustomModal
          title={`User Edit`}
          width={90}
          open={open.open}
          onOpenHandler={onEditHandle}
          content={
            <FormComponent
              isEdit={true}
              onFinish={onFinish}
              initialValues={user}
            />
          }
        />
      )} */}
    </>
  );
};

export default List;
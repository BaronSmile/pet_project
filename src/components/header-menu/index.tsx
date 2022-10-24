import React from 'react';
import {Menu, MenuProps} from "antd";
import {Header} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";

const HeaderMenu = () => {
  const navigate = useNavigate();

  const items1 = [{label: "Home", key: "/"},{label: "Form", key: "/form"}].map(({label, key}) => ({
    key,
    label,
  }));

  return (
    <Header className="header">
      <div className="logo"/>
      <Menu onClick={({key})=>navigate(key)} theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.pathname]} items={items1}/>
    </Header>
  );
};

export default HeaderMenu;

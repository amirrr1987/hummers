import React, { ReactElement, useState } from "react";
import { Button, Form, Input, Space, AutoComplete } from "antd";

import "./Login.less";
import AuthCard from "@/components/AuthCard/AuthCard";

const Login: React.FC = (): ReactElement => {
  const title = "ورود/ثبت‌نام";
  const caption = "جهت ورود یا ثبت‌ نام شماره موبایل خود را وارد کنید";

  const options = [
    {
      value: "+98",
      label: "+98",
    },
    {
      value: "+1",
      label: "+1",
    },
  ];
  const [tel, setTel] = useState("");

  const updateTel = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length <= 10) {
      let formattedMask = "";
      for (let i = 0; i < digits.length; i++) {
        if (i === 3 || i === 6) {
          formattedMask += " ";
        }
        formattedMask += digits[i];
      }
      setTel(formattedMask);
    }
  };

  return (
    <AuthCard title={title} captain={caption}>
      <Form.Item className="mb-20">
        <Space.Compact size="large" block className="ltr grid grid-cols-12">
          <AutoComplete
            options={options}
            className="col-span-3"
            placeholder=""
            defaultValue="+98"
          />
          <Input className="col-span-9" value={tel} onInput={updateTel} />
        </Space.Compact>
      </Form.Item>
    </AuthCard>
  );
};

export default Login;

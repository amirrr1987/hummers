import React, { ReactElement, useState } from "react";
import { Button, Form, Input } from "antd";

import "./Forget.less";
import AuthCard from "@/components/AuthCard/AuthCard";

const Forget: React.FC = (): ReactElement => {
  const title = "احراز اطلاعات هویتی";
  const caption = "جهت ورود یا ثبت‌ نام شماره موبایل خود را وارد کنید";

  const [idNumber, setIdNumber] = useState("");

  const updateIdNumber = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length <= 10) {
      let formattedMask = "";
      for (let i = 0; i < digits.length; i++) {
        formattedMask += digits[i];
      }
      setIdNumber(formattedMask);
    }
  };

  return (
    <AuthCard title={title} captain={caption}>
      <Form.Item label="کد ملی خود راوارد نمایید" className="mb-20">
        <Input
          size="large"
          className="ltr text-center"
          value={idNumber}
          onInput={updateIdNumber}
        />
      </Form.Item>
    </AuthCard>
  );
};

export default Forget;

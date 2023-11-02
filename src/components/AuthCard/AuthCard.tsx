import { Button, Card, Form } from "antd";
import { ReactElement } from "react";
import Logo from "@/assets/logo.png";
import "./AuthCard.less";
interface Props {
  title: string;
  captain: string;
  children: ReactElement;
}
const AuthCard = (props: Props): ReactElement => {
  return (
    <Card
      className="w-120  shadow-lg rounded-3xl"
      cover={<img className="!w-1/2 mx-auto mt-10" src={Logo} />}
    >
      <div className="text-green-500 text-2xl text-center font-700 mb-8">
        {props.title}
      </div>
      <div className="text-center mb-8">{props.captain}</div>
      <Form layout="vertical" className="">
        {props.children}
        <Button type="primary" size="large" block>
          تایید
        </Button>
      </Form>
    </Card>
  );
};

export default AuthCard;

import { Form } from "antd";
import { Link } from "react-router-dom";
import "./css/Register.css";
const Register = () => {
  //Form handler
  const onFinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Register Form</h1>
          <Form.Item className="item" label="name" name="name">
            <input type="text" required />
          </Form.Item>
          <Form.Item className="item" label="email" name="email">
            <input type="text" required />
          </Form.Item>
          <Form.Item className="item" label="password" name="password">
            <input type="text" required />
          </Form.Item>
          <Link to="/login" className="mr-2 pr-3 text-black">
            Already Logged In ?
          </Link>
          <button> Register </button>
        </Form>
      </div>
    </>
  );
};

export default Register;

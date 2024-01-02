import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./styles.module.less";
import { Input, Toast } from "antd-mobile";
import { getOTP, login } from "../../service/api";
import { API_CODE } from "./constant";
import useCountdown from "../../hooks/useCountdown";

const COUNT_DOWN = 60;
function FormBox() {
  const { seconds, setSeconds } = useCountdown({
    timeout: 0,
  });
  const [phone, setPhone] = useState("");
  const [isGetOTP, setIsGetOTP] = useState(false);
  const [otp, setOtp] = useState("");
  // const navigate = useNavigate();

  const resendOTP = async () => {
    const { errNo } = await getOTP({ mobile: phone });
    if (errNo === API_CODE.SUCCESS) {
      setIsGetOTP(true);
      setSeconds(COUNT_DOWN);
      console.log("get code success");
    }
  };

  const submit = async () => {
    if (isGetOTP) {
      loginSubmit();
    } else {
      getOTPSubmit();
    }
  };

  const getOTPSubmit = async () => {
    if (phone.length < 10) {
      Toast.show({
        content: "please input correct phone number",
      });
      return;
    }
    await getOTP({ mobile: phone });
    setIsGetOTP(true);
    setSeconds(COUNT_DOWN);
  };

  const loginSubmit = async () => {
    if (otp.length < 4) {
      Toast.show({
        content: "please input correct OTP code",
      });
      return;
    }
    const { errNo } = await login({ mobile: phone, digits: otp });
    if (errNo === API_CODE.SUCCESS) {
      // TODO 登出成功之后的动作
      console.log("login success");
    }
  };

  return (
    <div className={style.formBox}>
      <div className={style.title}>{isGetOTP ? "Code" : "Phone number"}</div>
      <div className={style.iptBox}>
        {isGetOTP ? (
          <>
            <Input
              value={otp}
              onChange={(str: string) => {
                setOtp(
                  str.replace(/\s+/, "").replace(/[^\d]/g, "").slice(0, 4)
                );
              }}
              placeholder="Please enter OTP"
              className={`${style.ipt} ${otp ? style.iptPhone : ""}`}
            />
            <div className={style.otpRight} onClick={resendOTP}>
              {seconds <= 0 ? "Resend" : `${seconds}s`}
            </div>
          </>
        ) : (
          <>
            <div className={style.prefix}>+91</div>
            <div className={style.line}></div>
            <Input
              value={phone}
              onChange={(str: string) => {
                setPhone(
                  str.replace(/\s+/, "").replace(/[^\d]/g, "").slice(0, 10)
                );
              }}
              placeholder="Please enter your phone number"
              className={`${style.ipt} ${phone ? style.iptPhone : ""}`}
            />
          </>
        )}
      </div>
      <div className={style.button} onClick={submit}></div>
    </div>
  );
}

export default FormBox;

import axios, { AxiosResponse } from "axios";

async function api<T>({ url, data }: { url: string; data: any }) {
  try {
    const res: AxiosResponse<CommonResType<T>> = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.data.errNo !== 0 || res.status !== 200) {
      // Vue.prototype.$toast({
      //   type: "error",
      //   text: res.data.errStr || "network error",
      // });
    }
    return res.data;
  } catch (error) {
    // Vue.prototype.$toast({ type: "error", text: "network error" });
    console.log(error);
    return {
      errNo: 0,
      errStr: 'catch an error',
    }
  }
}

export function getOrderDetail(orderNo: string) {
  return api({
    url: "/api/payin/detail",
    data: {
      orderNo,
    },
  });
}

export type OTPProps = {
  mobile: string;
};

export type CommonResType<T = any> = {
  errNo: number;
  errStr: string;
  data: T;
};

export type LoginReqType = {
  mobile: string;
  digits: string;
};

export type LoginResType = {
  USS: string;
};

export const getOTP = async (data: OTPProps) => {
  return api({
    url: "/app/user/digits",
    data,
  });
};

export const login = async (data: LoginReqType) => {
  return api<LoginResType>({
    url: "/app/user/login",
    data,
  });
};

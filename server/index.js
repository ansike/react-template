const http = require("http");

// const staticServer = StaticServer('./static');
const app = http.createServer((req, res) => {
  console.log("req.url", req.url);
  if (req.url === "/app/user/digits") {
    return res.end(
      JSON.stringify({
        errNo: 0,
        errStr: "SUCCESS",
        data: {
          orderNo: "asdfasdjsdfasf", // #订单号
        },
      })
    );
  }

  if (req.url === "/app/user/login") {
    return res.end(
      JSON.stringify({
        errNo: 0,
        errStr: "SUCCESS",
        data: {
          orderNo: "asdfasdjsdfasf", // #订单号
          payment: "1800.00", //#支付金额
        },
      })
    );
  }


  // staticServer(req, res);
});

app.listen(90, () => {
  console.log("server start on http://localhost:90");
});

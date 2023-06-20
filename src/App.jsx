import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [data, setdata] = useState(window.screen.width);
  const [data1, setdata1] = useState(window.screen.height);
  const [isloading, issetloading] = useState(false);

  const changedata = () => {
    setdata1(window.innerHeight);
    setdata(window.innerWidth);
    issetloading(true);
  };

  useEffect(() => {
    window.addEventListener("resize", changedata);
    console.log("hhh");

    return () => {
      console.log("hihi");
      window.removeEventListener("resize", changedata);
    };
  });

  return (
    <>
      <div className="card text-center">
        {isloading == false ? (
          <div className="card-header">Display Resolution Full size</div>
        ) : (
          <div className="card-header">Display Resolution Resize</div>
        )}

        <div className="card-body">
          <h5 className="card-title">
            {data}x{data1}px
          </h5>
          {isloading == true ? (
            <i
              className="fa fa-spinner fa-spin mt-3"
              style={{ fontSize: 40 }}
            ></i>
          ) : (
            <i className="fa fa-spinner mt-3" style={{ fontSize: 40 }}></i>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

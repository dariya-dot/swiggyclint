import React, { useEffect, useState } from "react";
import { API_URL } from "../../../API/api";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Circles } from 'react-loader-spinner'

const Chains = () => {
  const [venderData, setVenderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const venderFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}vender/all-venders`);
      const newdata = await response.json();
      setVenderData(newdata);
      setLoading(false);
      console.log(newdata);
    } catch (error) {
      alert("failed to fetch data");
      console.error(error);
    }
  };
  useEffect(() => {
    venderFirmHandler();
  }, []);
  const handleScroll = (direction) => {
    const galary = document.getElementById("galary");
    const scrollAmount = 1060;
    if (direction === "left") {
      galary.scrollTo({
        left: galary.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      galary.scrollTo({
        left: galary.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    
    <div className="container">
               <>
        {loading && <div className="loader">
          <h3>Your food <img src="/assets/Image/table-etiquette.png"/> is  Loading</h3>
          <>
          <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              />
          </>
          </div> 
          
          }
        </>
      <div className="firmhead">
        <div>
          <h3>Top restaurant chains in Hydrabad</h3>
        </div>
       
        <div className="buttonsection">
          <div
            onClick={() => {
              handleScroll("left");
            }}
          >
            <BsArrowLeftCircleFill className="btnicons" />
          </div>
          <div
            onClick={() => {
              handleScroll("right");
            }}
          >
            <BsArrowRightCircleFill className="btnicons" />
          </div>
        </div>
      </div>

      <div
        className="chainSection"
        id="galary"
        onScroll={(e) => {
          e.target.scrollLeft;
        }}
      >
        {venderData.venders &&
          venderData.venders.map((vender) => {
            return (
              <>
                <div className="firmbox">
                  {vender.firm.map((item) => {
                    return (
                      <>
                        <div className="firmname" key={item._id}>
                          {item.firmName}
                        </div>
                        <div className="firmimage">
                          <img
                            src={`${API_URL}product/uploads/${item.image}`}
                            alt="image not avilable"
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Chains;

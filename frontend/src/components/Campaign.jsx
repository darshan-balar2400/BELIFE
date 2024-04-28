import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { RiPriceTagLine } from "react-icons/ri";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Campaign = ({isHideTitle=false,buttonText="Apply"}) => {
  const [data, setData] = useState([]);
  const[user,setUser] = useState("");

  useEffect(() => {
    const FetChData = async () => {
      let request = await axios("http://localhost:5000/campaign/all");

      let data = await request.data;

      setData(data.campaigns);
    };

    
    FetChData();

    // Get the value of a cookie
    let value = JSON.parse(sessionStorage.getItem("user"));
      if (value && value.donor) {
        setUser(value.donor.name);
      }
   

  }, []);

  const Apply = () => {
    
    if(user == undefined || user === ""){
        ShowError("Please Login First !");
    }
    else{
      ShowSuccess("Information saved, Our team will contact you very soon!")
    }
    
  }

  const ShowError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const ShowSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
   
    <section>
      <div class="campaign_container" id="campaign">
        <div class="content">
          {isHideTitle == false ? <div class="title">
            <h1 class="text-3xl"># Campaigns</h1>
          </div> : ""}
          <div class="body my-14">
            <div className="campaigns">
              {data &&
                data.map((value, index) => {
                  return (
                    <div className="campaign_card">
                      <div className="card_title">
                        <h2>{value.name}</h2>
                      </div>

                      <div className="card_body">
                        <p>
                          {" "}
                          <span>
                            <MdOutlineDateRange />
                          </span>{" "}
                          Date : {value.date}
                        </p>
                        <p>
                          <span>
                            <FaLocationDot />{" "}
                          </span>
                          Location : {value.location}
                        </p>

                        <p className="tagline">
                          {value.tagline}
                        </p>

                        <button className="button" onClick={Apply}>{buttonText}</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Campaign;

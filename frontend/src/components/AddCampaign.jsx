import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const AddCampaigns = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    loation: "",
    tagline: "",
  });

  const setInputValue = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const SubmitRegister = async (e) => {
    e.preventDefault();

    try {
      let req = await axios.post(
        "http://localhost:5000/campaign/add",
        formData
      );

      let data = await req.data;

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/profile");
      }, 4000);
    } catch (e) {
      ShowError(e.response.data.error.message);
    }
  };

  const ShowError = (msg) => {
    toast.error(msg, {
      position: "bottom-left",
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
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    // Get the value of a cookie
    let value = JSON.parse(sessionStorage.getItem("user"));

    if (value== "" ||  value == undefined || !value) {
      navigate("/");
      return;
    } else {
      if (value.donor.user != "admin") {
        navigate("/");
      }
    }
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-left"
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
      <div className="registration_container">
        {!loading ? (
          <div className="content">
            <div className="form_container">
              <div className="title">
                <h2>Add A Blood Donation Campaign</h2>
              </div>

              <div className="input_form">
                <form onSubmit={SubmitRegister}>
                  {/* name */}
                  <div className="input_ele">
                    <p>name</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      minLength={2}
                      value={formData.name}
                      onChange={setInputValue}
                    />
                  </div>

                  <div className="input_ele">
                    <p>date</p>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      value={formData.date}
                      onChange={setInputValue}
                    />
                  </div>

                  <div className="input_ele">
                    <p>location</p>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      minLength={2}
                      value={formData.location}
                      onChange={setInputValue}
                    />
                  </div>

                  <div className="input_ele">
                    <p>Tagline</p>
                    <input
                      type="text"
                      name="tagline"
                      id="tagline"
                      required
                      minLength={2}
                      value={formData.tagline}
                      onChange={setInputValue}
                    />
                  </div>

                  <input
                    type="submit"
                    name="submit"
                    value="SUBMIT"
                    className="button"
                  />
                </form>
              </div>
            </div>

            <div className="image_container">
              {/* <img src="/assets/images/logo.png" /> */}
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default AddCampaigns;

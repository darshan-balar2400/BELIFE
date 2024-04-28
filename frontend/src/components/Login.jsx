import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Loading";

const Login = () => {
  const navigate = useNavigate();
  const[loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Get the value of a cookie
    let value = JSON.parse(sessionStorage.getItem("user"));

    if (value != undefined && value.donor != undefined) {
      navigate("/profile");
    }
  }, []);

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

  const setInputValue = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const SubmitRegister = async (e) => {
    e.preventDefault();

    try {
      let req = await axios.post("http://localhost:5000/donor/login", formData);

      let data = await req.data;

      setLoading(true);

      setTimeout(() => {
        // window.location.reload();
        setLoading(false);
       
      },3000);

      sessionStorage.setItem("user", JSON.stringify(data));

      if(data.donor.user == "admin"){
        navigate("/admin", 0);
      }
      else{
        navigate("/profile",0);
      }
     
    } catch (e) {
        ShowError(e.response.data.error.message);
    }
  };

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
      {!loading ? <div className="content">
         <div className="form_container">
            <div className="title">
              <h2>Login As A Donor</h2>
            </div>

            <div className="input_form">
              <form autoComplete="false" onSubmit={SubmitRegister}>
                {/* name */}

                <div className="input_ele">
                  <p>email</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={setInputValue}
                    minLength={2}
                  />
                </div>

                <div className="input_ele">
                  <p>password</p>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={setInputValue}
                  />
                </div>

                <input
                  type="submit"
                  name="submit"
                  value="LOGIN"
                  className="button"
                />
              </form>
            </div>
          </div>

          <div className="image_container">
            {/* <img src="/assets/images/logo.png" /> */}
          </div> 
         </div> : <Loading/>}
      </div>
    </>
  );
};

export default Login;

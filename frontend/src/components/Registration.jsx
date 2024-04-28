import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    father_name: "",
    blood_group: "",
    state: "",
    district: "",
    pincode: "",
    email: "",
    address: "",
    password: "",
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
        "http://localhost:5000/donor/register",
        formData
      );

      let data = await req.data;

      setLoading(true);

      setTimeout(() => {
        alert("Registration Successfully Happen !");
        setLoading(false);
        navigate("/login");
      }, 3000);
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
                <h2>Create A New Account As A Donor</h2>
              </div>

              <div className="input_form">
                <form onSubmit={SubmitRegister}>
                  {/* name */}
                  <div className="input_ele">
                    <div className="input_two">
                      <div>
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

                      <div>
                        <p>Age</p>
                        <input
                          type="number"
                          name="age"
                          id="age"
                          required
                          value={formData.age}
                          onChange={setInputValue}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input_ele">
                    <p>gender</p>

                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={setInputValue}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male" selected>
                        Male
                      </option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="input_ele">
                    <div className="input_two">
                      <div>
                        <p>father name</p>
                        <input
                          type="text"
                          name="father_name"
                          id="father_name"
                          required
                          minLength={2}
                          value={formData.father_name}
                          onChange={setInputValue}
                        />
                      </div>

                      <div>
                        <p>mobile</p>
                        <input
                          type="number"
                          name="mobile"
                          id="mobile"
                          required
                          value={formData.mobile}
                          onChange={setInputValue}
                        />
                      </div>
                    </div>
                  </div>

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
                    <div className="input_two">
                      <div>
                        <p>state</p>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          required
                          minLength={2}
                          value={formData.state}
                          onChange={setInputValue}
                        />
                      </div>

                      <div>
                        <p>district</p>
                        <input
                          type="text"
                          name="district"
                          id="district"
                          required
                          minLength={2}
                          value={formData.district}
                          onChange={setInputValue}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="input_ele">
                    <p>address</p>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      required
                      minLength={2}
                      value={formData.address}
                      onChange={setInputValue}
                    />
                  </div>
                  <div className="input_ele">
                    <p>blood_group</p>
                    <select
                      name="blood_group"
                      value={formData.blood_group}
                      onChange={setInputValue}
                    >
                      <option>Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="input_ele">
                    <p>pincode</p>
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      required
                      value={formData.pincode}
                      onChange={setInputValue}
                      // max={6}
                      // min={6}
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
                    value="CREATE"
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

export default Registration;

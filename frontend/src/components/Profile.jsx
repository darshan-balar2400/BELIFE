import { useNavigate } from "react-router-dom";
import Campaign from "./Campaign";
import { useState,useEffect } from "react";
import Loading from "./Loading";
const Profile = () => {
  const [user, setUser] = useState("");
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the value of a cookie
    let value = JSON.parse(sessionStorage.getItem("user"));

     if(!value && !value.donor){
        navigate("/login");
     }

     if(value.donor.user == "admin"){
      navigate("/admin");
     }

    setLoading(true);

      setTimeout(() => {
        setLoading(false);
      },2000);


    setUser(value.donor);
  }, []);

  const Logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  }

  return (
    <>
    { loading ? <Loading/> : 
      user ? <section className="profile_section">
        <div class="background-image"></div>

        <div className="content">
          <div className="title">
            <h1>Hello {user.name}</h1>
          </div>
          <div className="subtitle">
            <h2 className="npm">
              <a
                href="https://www.npmjs.com/package/kemcholang"
                target="_blank"
              >
                <code>Your Blood Type : {user.blood_group}</code>
              </a>
            </h2>

            {/* <h2 className="developer_name">
              Thanks For Becomming A{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/darshan-balar-4302141bb/"
                  target="_blank"
                >
                  Donor
                </a>
              </span>
            </h2> */}

            <h2 className="mt-8">
              Wishing you a nice day <br />
              Below is list of Running campaigns that you may be interested in
            </h2>
          </div>

          <div className="buttons">
           
              <button onClick={() => Logout()}>Logout</button>
            
            {/* <a href="/#analytics">
              <button className="documentbutton">Analytics</button>
            </a> */}
          </div>
        </div>
      </section> : ""}
      <Campaign isHideTitle={true} />
    </>
  );
};

export default Profile;

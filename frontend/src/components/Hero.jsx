
const Hero = () => {
    return (
    <section className="hero_section">
         <div class="background-image"></div>

      <div className="content">
        <div className="title">
          <h1>Empowering Blood Donors, Saving Lives</h1>
        </div>
        <div className="subtitle">
          <h2 className="">
          Join our community of donors and volunteers to spread awareness, save lives<br/> and inspire hope. Every contribution counts towards a brighter future.

          </h2>
  
          <h2 className="npm">
            <a href="https://www.npmjs.com/package/kemcholang" target="_blank"><code>Lifesaving, Community-driven, Supportive </code></a>
          </h2>
  
          <h2 className="developer_name">Made for <span><a href="https://www.linkedin.com/in/darshan-balar-4302141bb/" target="_blank">Donors</a></span></h2>
        </div>
  
        <div className="buttons">
          <a href="/register">
            <button>Joins as a Donor</button>
          </a>
          <a href="/lookupblood">
            <button className="documentbutton">Looking for blood</button>
          </a>
        </div>
        <div className="mt-14 image">
          <img
            src="/assets/images/logo.png"
            width="120"
            height="120"
            alt=""
          />
        </div>
      </div>
    </section>
    )
}

export default Hero;
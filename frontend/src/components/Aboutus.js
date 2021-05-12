import "../styles/Aboutus.css";

function Aboutus() {
  return (
    <div className="aboutPage" id="aboutus">
      <div className="left">
        <div className="aboutTitle"> Who we are </div>
        <br></br>
        <div className="aboutText">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <br></br>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.{" "}
          </p>
        </div>
        <br></br>
      </div>
      <div className="right">
        <div className="aboutImage">
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

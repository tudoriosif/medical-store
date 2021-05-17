
import "../styles/Contact.css";

function Contact(){
    return(
        <div className="contactPage" id="contact">
          <div className="contactTitle"> Contact us </div>
          <br></br>
          <div className="contactDetails">
             
            <div className="support" > Support </div>
            <a href="mailto:Supportmail@gmail.com">Supportmail@gmail.com</a>
            <br></br>
            <br></br>
            <div className="marketing"> Marketing </div>
            <a href="mailto:Marketingmail@gmail.com">Marketingmail@gmail.com</a>
            <br></br>
            <br></br>
            <div className="adress">
                Gutin Street nr.1, Satu Mare
                <br></br>
                Phone: 0362 400 401
            </div>
         </div>
         <footer className="copyRight">&copy; Meds Connect 2021. All rights reserved</footer>
        </div>
    )
}
export default Contact

// import Logo from "./Logo"
// import NavBar from "./NavBar"
import {useState} from "react"

function Footer () {
    const [email, setEmail] = useState("")

    function handleEmail (e) {
        setEmail(e.target.value)

        fetch('http://localhost:9393/buyer')
    }



    return(
        <div className="footer">
            <span>
                <form className="mailing_list" onSubmit={handleEmail}>
                    <input className="" type="text" placeholder="Enter email address" value={email} />
                    <button>Subscribe</button>
                </form> 
                
            </span>


        </div>
    )
}

export default Footer
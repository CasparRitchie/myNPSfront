import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // FETCH le formulaire pour le login
        const responseLog = await fetch("http://localhost/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': 'Bearer' + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
            email,
            password
        })
        });
        const jwtResponse = await responseLog.json();

        if (responseLog.status === 200 && jwtResponse.role === 'admin') {
            localStorage.setItem("jwt", JSON.stringify(jwtResponse));
            navigate('/');
        } else if (responseLog.status === 200 && jwtResponse.role === 'user') {
            localStorage.setItem("jwt", JSON.stringify(jwtResponse));
            navigate('/surveys');
                }        else {
            alert("Password incorrect");
            event.target.email.value = "";
            event.target.password.value = "";
        }
    };
    return (
        <>
        <Header/>
                <section className="login">
                    <p>Please log in using your email and password</p>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                        
                            <label htmlFor="email">Email *</label><br />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="abc@gmail.com"
                                required
                            /><br /><br />

                            <label htmlFor="password">Password *</label><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                            /><br /><br />
                            
                            <button className="link-btn" type="submit">Log in</button>  
                        </form>
                    </div>
                    <div className="signup-container">
                        <div className="content">
                            <p>If you don't have an account yet, please click here:</p>
                            <Link className="link-btn" to="/users/create">Create a new myNPS profile</Link>
                        </div>
                    </div>
                </section>
                <Footer/>
        </>
    );
}
export default Login
import { useNavigate } from "react-router";

const Loginpan = () => {

    const navigate = useNavigate();

    const logSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // FETCH le formulaire pour le login
        const ResponseLog = await fetch("http://localhost:80/mynps/login", {
            method: "POST",
            headers: {
                "Content-Type": "application.json",
                'Authorization': 'Bearer' + localStorage.getItem("jwt"),
            },
        body: JSON.stringify({
            email: email,
            password: password,
        })
        });
        const jwtResponse = await ResponseLog.json();

        if ('access_token' in jwtResponse) {
            localStorage.setItem("jwt", jwtResponse.access_token);
            navigate('/Profiles');
        } else {
            alert("Password incorrect");
            event.target.email.value = "";
            event.target.password.value = "";
        }
    };
}
export default Loginpan
import Header from "../components/Header"

const CreateUser = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const salutation = event.target.salutation.value;
        const first_name = event.target.first_name.value;
        const last_name = event.target.last_name.value;
        const date_of_birth = event.target.date_of_birth.value;
        const nationality = event.target.nationality.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const repassword = event.target.repassword.value;

        fetch("http://localhost/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                salutation,
                first_name,
                last_name,
                date_of_birth,
                nationality,
                email,
                password,
                repassword
            })
        });
   };



    return (
        <div> 
            <Header />
        <h2> Create a new myNPS profile </h2>
        <form onSubmit={handleSubmit}>
            <label>
                Salutation : 
                <input type="text" name="salutation" />  
            </label>
            <label>
                First Name : 
                <input type="text" name="first_name" />  
            </label>
            <label>
                Last Name : 
                <input type="text" name="last_name" />  
            </label>
            <label>
                When is your birthday? 
                <input type="date" name="date_of_birth" />  
            </label>
            <label>
                email :   
                <input type="email" name="email" />  
            </label>
            <label>
                Nationality : 
                <input type="text" name="nationality" />  
            </label>
            <label>
                Password : 
                <input type="password" name="password" />  
            </label>
            <label>
                Please re-enter your password : 
                <input type="password" name="repassword" />  
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default CreateUser

import "./form.scss";




const Form = () => {


 




    return (
        <div className="register">
      <div className="formContainer">
        <form >
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button  >Submit</button>
          <span></span>
          
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
    )
}

export default Form
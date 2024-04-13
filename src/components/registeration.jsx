function Registeration(){
    return(

    <form action="">
        <div className="form-main">
             <div className="usernameinput">
                <label for="user">Flat No</label><br/>
             <input type="text" id='user'/>
            </div>
            <br />
            <div className="passwordinput">
                <label for="pass">Password</label><br />
             <input type="password" id="pass" />
            </div>
            <div className="submitbutton">
                <br/>
             <input id='btn' type="button" value="Login" />
            </div>
        </div>
    </form>

    );
}
export default Registeration
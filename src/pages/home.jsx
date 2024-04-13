import Registeration from '../components/registeration';
import homeimg from '../images/home/home1.png'
function Home(){
return(
    <>
    <div className="Mainhome">
      <img src={homeimg} alt="" height='500px' /> 
      <div className="mainform"><Registeration/></div> 
    </div>
   
    </>
);
}
export default Home
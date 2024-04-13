import flatimg from '../images/house.png'
function Flat(){
    
    return(
        
    <div className="flat-details">
        <div className="flat_main">
            
            <div className="iconflat">
                <h2>welcome</h2>
                <h3 id='flat-no'>C1-62</h3>
                <img height='100px' src={flatimg} /></div>
            
        <table>
            <tr>
            <th >Owner name:</th>
            <td id='owner_name'>Rohith</td>
            </tr>
            <tr>
            <th>No of residents:</th>
            <td id='no_tenets'>10</td>
            </tr>
            <tr>
            <th>No of adults:</th>
            <td id='no_adults'>5</td>
            </tr>
            <tr>
            <th>No of children:</th>
            <td id='no_tenets'>5</td>
            </tr>
        </table>
        </div>
    </div>
    );
}

 
export default Flat;
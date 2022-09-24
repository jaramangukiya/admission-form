import './personalinfo.css';
import './basic.css';


function Personalinfo(){
    return(
        <div className='personal-info-section font-family color-azure'>
            <h2>Personal Information:</h2>
            <form method='post'>
                <div className='row align-item-center justify-content-between'>
                    <label>Frist Name:</label>
                    <input className='form-control' placeholder='Enter Your First Name' type='text'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Last Name:</label>
                    <input className='form-control' placeholder='Enter Your Last Name' type='text'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Mobile Number:</label>
                    <input className='form-control' placeholder='Enter Your Mobile Number' type='tel'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Date of Birth:</label>
                    <input className='form-control' type='date'></input>
                </div>
            </form>
        </div>
    );
}
export default Personalinfo;
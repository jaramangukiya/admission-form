import './familyinfo.css';
import './basic.css';

function Familyinfo(){
    return(
        <div className='family-info-section  color-azure font-family'>
            <h2>Parents Information:</h2>
            <form method='post'>
                <div className='row align-item-center justify-content-between'>
                    <label>Parent Name:</label>
                    <input className='form-control' placeholder='Enter Your Parent Name' type='text'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Relation:</label>
                    <input className='form-control' placeholder='Enter Your Relation  With Student' type='text'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Mobile Number:</label>
                    <input className='form-control' placeholder='Enter Parent Mobile Number' type='tel'></input>
                </div>
                <div className='row align-item-center justify-content-between'>
                    <label>Occupation</label>
                    <input className='form-control' placeholder='Enter Your Parent Occupation' type='text'></input>
                </div>
            </form>
        </div>
    );
}
export default Familyinfo;
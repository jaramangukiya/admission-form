// import Familyinfo from './familyinfo';
import './form.css';
import Personalinfo from './personalinfo';
import Familyinfo from './familyinfo';
import Acadamicinfo from './acadamic';

function From(){
    return(
        <div className='form'>
            <Personalinfo></Personalinfo>
            <Familyinfo></Familyinfo>
            <Acadamicinfo></Acadamicinfo>
        </div>
    );
}
export default From;
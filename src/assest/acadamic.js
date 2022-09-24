import './acadamic.css';
import './basic.css';

function Acadamicinfo(){
    return(
        <div className='acadamic-info-section font-family  color-azure'>
            <h2>Acadmic Information:</h2>
            <form method='post'>
                <div className='row justify-content-between'>
                    <select className='col-3 form-control'>
                        <option>Feild</option>
                        <option>H.S.C</option>
                        <option>S.S.C</option>
                        <option>Bachlor</option>
                        <option>Master</option>
                    </select>
                    <select className='col-3 form-control'>
                        <option>Grade</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <select className='col-3 form-control'>
                        <option>Passout Year</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                    </select>
                </div>
            </form>
        </div>
    );
}
export default Acadamicinfo;
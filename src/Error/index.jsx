import pic from './images/pic.png';
//STYLE
import './css/style.css';
import './css/index.css';


function Error() {
    return (
        <div className="error">

            <div className="error_box">

                <div className="error_box_left">
                    <p className="error_box_left_heading"> Uh oh! </p>
                    <p className="error_box_left_text"> Looks like your QR code is disabled. </p>
                    <button> HOME </button>
                </div>

                <div className="error_box_right">
                    <img src={pic} alt="error"/>
                </div>

            </div>

        </div>
    )
}

export default Error;
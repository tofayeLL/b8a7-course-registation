
import { IoBookOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import PropTypes from 'prop-types'
const Card = ({ card, handleSelected }) => {
    const { name, description, photo, price, credit } = card;
    return (
        <div className="space-y-3 p-4 shadow-xl rounded-lg">

            <div>
                <img src={photo} alt="" />
            </div>

            <h3>{name}</h3>

            <p>{description}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <span><BsCurrencyDollar></BsCurrencyDollar></span>
                    <p>price: <span>{price}</span></p>
                </div>
                <div className="flex items-center gap-1 ">
                    <p><IoBookOutline></IoBookOutline></p>
                    <p>Credit: <span>{credit}</span></p>
                </div>

            </div>

            <button onClick={() => handleSelected(card, credit)} className="px-6 py-2 bg-green-400 w-full rounded-lg">selected</button>



        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleSelected: PropTypes.func

}

export default Card;
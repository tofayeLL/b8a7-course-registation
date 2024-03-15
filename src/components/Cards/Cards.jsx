import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types'


const Cards = ({ handleSelected }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCards(data));

    }, [])


    return (
        <div className="grid grid-cols-3 gap-5">

            {
                cards.map((card, index) => <Card
                    key={index}
                    card={card}
                    handleSelected={handleSelected}
                ></Card>)
            }

            {/* card 1 */}
            {/* <div className="space-y-3 p-4">

                <div>
                    <img src="https://i.ibb.co/sP7VHpQ/Rectangle-2-2.png" alt="" />
                </div>

                <h3>Introduction To C Programming</h3>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et ab voluptates ea eum aperiam provident cum totam sint? </p>

                <div className="flex">
                    <div className="flex items-center gap-2">
                        <span></span>
                        <p>price: </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span></span>
                        <p>Credit: </p>
                    </div>

                </div>

                <button className="px-6 py-2 bg-green-400 w-full rounded-lg">selected</button>



            </div> */}

        </div>
    );
};

Cards.propTypes = {
    handleSelected: PropTypes.func

}

export default Cards;
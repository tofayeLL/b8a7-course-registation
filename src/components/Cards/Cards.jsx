

const Cards = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <h3 className="text-2xl font-semibold">Cards:</h3>
            
            {/* card 1 */}
            <div className="space-y-3 p-4">

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



             </div>

            {/* card 2 */}
            <div className="space-y-3 p-4">

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



             </div>


            {/* card 3 */}
            <div className="space-y-3 p-4">

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



             </div>
            
            
        </div>
    );
};

export default Cards;
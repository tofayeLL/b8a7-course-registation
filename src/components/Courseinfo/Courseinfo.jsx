
import PropTypes from 'prop-types'

const Courseinfo = ({ courseInfos, handleDelete }) => {

    const credit = courseInfos.reduce((p, c) => p + c.credit, 0);
    const remaining = (15 - credit);

    return (
        <div className="space-y-3 my-4 p-4">
            <div className="py-2">
                <h3 className="text-xl font-semibold border-black border-b-2 ">Credit  Remaining: {remaining}</h3>
            </div>

            <div className="py-2">
                <h3 className="text-xl font-semibold">Course Name: </h3>
                <div className="border-black border-b-2 ">
                    {
                        courseInfos.map((course, index) => <ol key={index}>
                            <li>
                                <span>{index + 1}.</span>
                                {course.name} <button onClick={() => handleDelete(course.id)} className="px-2 py-2 bg-red-300">delete</button>
                            </li>

                        </ol>)
                    }

                </div>
            </div>

            <div className="py-2">
                <h3 className="text-xl font-semibold border-black border-b-2">Total Credit Hour: <span>{credit}</span></h3>
            </div>

            <div>
                <h3 className="text-xl font-semibold ">Total Price: {courseInfos.reduce((p, c) => p + c.price, 0)}<span></span> USD</h3>

            </div>
        </div>
    );
};


Courseinfo.propTypes = {

    courseInfos: PropTypes.array,
    handleDelete: PropTypes.func


}

export default Courseinfo;
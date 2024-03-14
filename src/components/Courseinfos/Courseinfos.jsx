import Courseinfo from "../Courseinfo/Courseinfo";


const Courseinfos = ({courseInfos, handleDelete}) => {
  
    return (
        

        <div className="grid grid-cols-1   ">
            <h3 className="text-2xl font-semibold">Course Infos: {courseInfos.length}</h3>
            
            <Courseinfo 
            courseInfos={courseInfos}
            handleDelete={handleDelete}

            ></Courseinfo>
          
            
           {/* <div className="space-y-3 my-4">
           <div>
                <h3 className="text-xl font-semibold border-black border-b-4 ">Credit Hour Remaining 7hr</h3>
            </div>

            <div>
                <h3 className="text-xl font-semibold">Course Name</h3>
                <ol className="border-black border-b-4 ">

                </ol>
            </div>

            <div>
            <h3 className="text-xl font-semibold border-black border-b-4">Total Credit Hour: <span></span></h3>
            </div>

            <div>
            <h3 className="text-xl font-semibold ">Total Price: <span></span> USD</h3>

            </div>
           </div> */}


        </div>
    );
};

export default Courseinfos;
import AutoScrollGallery from "./AutoScrollGallery";

const Page2 = () => {
    return (
        <div  className="overflow-x-hidden scrollbar-hide"   >
            <div className="flex flex-col h-[91.5vh] bg-[#F2F3F5] justify-center items-center">
                <h1 className="text-5xl font-semibold"> Join a community
                </h1>
                <h1 className="text-5xl font-semibold mt-2 ">of millions
                </h1>
                <span className=" mt-5 text-xl font-normal">You’re not alone. Two million developers from all over the world visit the React</span>
                <span className="mt-0.5 text-xl font-normal">docs every month. React is something that people and teams can agree on.</span>

                
                <AutoScrollGallery/>


            </div>

        </div>
    );
};
export default Page2;
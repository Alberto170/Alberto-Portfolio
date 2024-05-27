import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col items-center lg:justify-between lg:flex-row px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="text-white p-12 leading-10">
                <h1 className="text-4xl mt-8 font-bold">
                    Fullstack Web Developer
                </h1>
                <h2>
                    Alberto Martinez
                </h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                </p>
            </div>
            <div className="lg:w-1/2 p-3 bg-gray-500 relative rounded-full">
                <Image
                    src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg"
                    width={500}
                    height={500}
                    alt="Hero image"
                    className="mx-auto w-[27rem] relative"
                    loading="eager"
                />
            </div>
        </div>
    );
}
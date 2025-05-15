import Image from "next/image"
export default function HeroImage() {
    return(
        <div className="h-[90vh] w-full">
            <Image alt="Image" width={1000} height={1100} src={"/WEB1.2.png"} priority className="w-full h-full"  />
        </div>   
    )
}
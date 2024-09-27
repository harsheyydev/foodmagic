export const Header = () =>{
    return(
        <div className="bg-black flex flex-row gap-6"> 

            <img src="https://www.foodmagicgroup.com/images/logo/logo.png "height={20} width={50} alt="" />
            <a href="" className="text-amber-500">Home</a>
            <a href=""className="text-amber-500">About</a>
            <a href=""className="text-amber-500">Services</a>
            <button className="text-amber-500 bg-red-900">Contact</button>
        </div>
    )
}
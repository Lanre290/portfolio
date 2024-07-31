function Footer(){
    return(
        <div className="w-full p-3 sm:p-20 md:p-20 py-20 flex flex-col lg:flex-row sm:flex-row md:flex-row justify-between" style={{backgroundColor: '#38e819'}}>
            <div className="w-5/6 md:w-1/4 sm:w-5/6">
                <div className="flex-row flex text-gray-50 mb-4">
                    <div className="text-3xl flex items-center justify-center mr-3 ml-2"><i className="fa fa-map-marker"></i></div>&nbsp;<div className="mt-2">Ojo, Lagos State.</div>
                </div>
                <div className="flex-row flex text-gray-50 mb-4">
                    <div className="text-3xl flex items-center justify-center mr-3"><i className="fa fa-envelope"></i></div>&nbsp; <div className="mt-2">Lanre2967@gmail.com</div>
                </div>
                <div className="flex-row flex text-gray-50 mb-4">
                    <div className="text-3xl flex items-center justify-center mr-3"><i className="fa fa-phone"></i></div>&nbsp; <div className="mt-2">+234 916-4187-495</div>
                </div>
                <div className="flex flex-row mt-10 m-auto">
                    <a href="https://web.facebook.com/profile.php?id=100083136165965" className="footer-social-links"><i className="fa fa-facebook"></i></a>
                    <a href="https://x.com/lanre2967" className="footer-social-links"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/lanre_290/" className="footer-social-links"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/ashiru-olanrewaju-219725223" className="footer-social-links"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/Lanre290" className="footer-social-links"><i className="fa fa-github"></i></a>
                </div>
            </div>

            <div className="w-full md:w-2/4 sm:w-5/6 flex flex-col">
                <div className="w-full flex flex-col">
                    <h3 className="text-3xl text-gray-50 w-5/6 md:w-3/5 sm:w-3/5 mb-6 m-auto">Leave a review: </h3>
                    <input type="text" placeholder="Name" className="bg-transparent border mt-2 w-5/6 md:w-3/5 sm:w-3/5 placeholder-gray-400 rounded-lg m-auto border-gray-50 p-3 text-gray-50" />
                    <input type="text" placeholder="Email" className="bg-transparent border mt-2 w-5/6 md:w-3/5 sm:w-3/5 placeholder-gray-400 rounded-lg m-auto border-gray-50 p-3 text-gray-50" />
                    <textarea  placeholder="Message" className="bg-transparent border mt-2 w-5/6 md:w-3/5 sm:w-3/5 placeholder-gray-400 rounded-lg m-auto border-gray-50 p-3 text-gray-50"></textarea>
                    <button className="border border-gray-50 py-3 px-5 text-lg rounded-lg w-5/6 md:w-3/5 sm:w-3/5 mt-2 bg-gray-50 m-auto shadow-md" style={{color: '#38e819'}}>Submit</button>
                </div>
                <div className="text-xl text-gray-50 mt-10 m-auto">
                    &copy;2024
                    With love from <a href="" className="text-blue-500 cursor-pointer">Bro Code</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
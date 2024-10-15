import Logo from '../assets/logo.svg';

const Navbar = ({ scrolledStatus }) => {

    return (
        <div className={`fixed top-0 w-full flex justify-center items-center ${scrolledStatus ? 'border-b border-b-gray-300' : ''} bg-white transition-all duration-300 md:p-2`}>
            <div className="w-full md:max-w-xl lg:max-w-5xl flex justify-between items-center px-4 py-4">
                {/* Menambahkan width dan height */}
                <img src={Logo} alt="Logo" className="h-8 lg:h-11" width="44" height="44" />
                {scrolledStatus ? (
                    <button className='px-4 py-2 rounded-lg font-bold text-white text-sm bg-limeGreen hover:bg-lightLime border-b-4 border-b-green-700 cursor-pointer'>Mulai</button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Navbar;

import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='max-w-7xl mx-auto flex justify-between items-center p-4 mx-4 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt=""></img>
        </header>
    );
};

export default Header;
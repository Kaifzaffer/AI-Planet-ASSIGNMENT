
import logo from "../assets/logo.png"
function NavbarHome() {
  return (
    <>
     <nav className="w-full max-w-[1442px] h-[64px] bg-white flex items-center" style={{ gap: '0px', opacity: '0px' }}>
      <div
        className="w-[87px] h-[38.11px] absolute"
        style={{
          top: '13px',
          left: '89px',
          gap: '0px',
          opacity: '0px',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </nav>
    </>
  );
}

export default NavbarHome;
const Background = () => (
  <>
    <img className="absolute w-full top-0 left-0 opacity-10 z-0 md:hidden" src='images/mobile-image-host.jpg' alt="podcaster"/>
    <img className="hidden absolute z-0 opacity-80 self-end md:block xl:hidden" src='images/tablet-image-host.jpg' alt="podcaster"/>
    <img className="hidden absolute self-end top-40 z-0 opacity-80 xl:block" src='images/desktop-image-host.jpg' alt="podcaster"/>
  </>
);
export default Background;
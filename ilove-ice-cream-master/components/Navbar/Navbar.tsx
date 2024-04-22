import MaxWidthWrapper from '../MaxWidthWrapper';
import MobileNavItems from './MobileNavItems';
import NavItems from './NavItems';
import NavbarAnimationWrapper from './NavbarAnimationWrapper';

function Navbar() {
  return (
    <NavbarAnimationWrapper>
      <header>
        <MaxWidthWrapper>
          <NavItems />
          <MobileNavItems />
        </MaxWidthWrapper>
      </header>
    </NavbarAnimationWrapper>
  );
}

export default Navbar;

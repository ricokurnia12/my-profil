import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'react-feather';
import { navlinks } from '@utils/constants';
import HeaderSmall from './header-small';
import Button from './buttons';

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Link href={href}>
      <li
        className={`
          px-5 py-2 pt-1 md:pt-4 md:px-4 md:text-center
          ${router.asPath === href ? 'border-b-2 md:border-none' : ''} 
          `}>
        <p className="transition duration-500 ease-in-out transform md:hover:-translate-y-2 text-white font-bold md:hover:text-violet">
          {title}
        </p>
        <img
          src="/images/vectors/nav_active.svg"
          alt="nav-active"
          className={`
            hidden md:block md:opacity-0
            ${router.asPath === href && 'md:opacity-100 md:w-100'}
            `}
        />
      </li>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  // const { logo }: PersonalDetails = useContext(PersonalDetailsContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setisScreenScrolled] = useState(false);
  const addShadowtoNav = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // window.scrollY >= 100 ? setisScreenScrolled(true) : setisScreenScrolled(false);
    setisScreenScrolled(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', addShadowtoNav);
    return () => {
      window.removeEventListener('scroll', addShadowtoNav);
    };
  }, []);

  return (
    <div
      className={` mx-auto bg-blue w-full mb-12  fixed z-30
      ${isScreenScrolled ? 'shadow-2xl' : ''}
       `}>
      <nav className="block md:flex justify-between items-center p-2 px-8 ">
        <div className="flex justify-between">
          <div>
            <Link className="flex items-center text-white" href="/">
              <img
                src="/me.png"
                alt="logo"
                className={`${
                  isScreenScrolled ? 'w-2 md:w-16' : 'w-16 md:w-18'
                } pl-30 my-2 transition-all transform hover:scale-75 cursor-pointer pl-8`}
              />{' '}
              <div>
                <HeaderSmall text="Ricos Profile" />
                {/* {!isScreenScrolled && <Button type="outlined" text="Click to know me" />} */}
              </div>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}>
              <Menu size={18} />
            </button>
          </div>
        </div>
        <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:block'}>
          <ul className="md:flex md:flex-row border-pink border-2 md:border-none">
            {navlinks.map((item) => {
              return <NavItem title={item.title} href={item.href} key={item.href} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

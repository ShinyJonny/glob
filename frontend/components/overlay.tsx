import React, { useRef, useState } from "react";
import type { RefObject } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import styles from "../styles/Overlay.module.css";
import { LinkIcon } from "./icon";
import NavToggle from "./nav-toggle";

interface NavItemData {
  name: string;
  href: string;
}

const NAV_ITEMS: Array<NavItemData> = [
  {
    name: "Projects",
    href: "/projects",
  },
];

export const navAnimDuration = 200;

const unlockBody = () => {
  document.body.style.overflow = "";
};

const lockBody = () => {
  document.body.style.overflow = "hidden";
};

const Overlay: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggled] = useState(false);

  const handleNavToggle = () => {
    if (!navRef.current) {
      return;
    }

    setToggled(!toggled);

    if (toggled) {
      navRef.current.style.opacity = "0%";
      setTimeout(() => {
        if (!navRef.current) {
          return;
        }

        navRef.current.style.display = "none";
        unlockBody();
      }, navAnimDuration);
    } else {
      lockBody();
      navRef.current.style.display = "flex";
      // FIXME: Working around a bug where the opacity has to be set separately,
      // after the display mode has been changed.
      setTimeout(() => {
        if (!navRef.current) {
          return;
        }

        navRef.current.style.opacity = "100%";
      }, 10);
    }
  };

  return (
    <div className={styles.container}>
      <ProfileImage />
      <Navbar items={NAV_ITEMS} navRef={navRef} />
      <ProfileInfo>
        <ProfileInfoField name="Name" value="ShinyJonny" />
        <ProfileInfoField
          name="Occupation"
          value="Student of Cyber Security (BSc)"
        />
      </ProfileInfo>
      <NavToggle
        toggled={toggled}
        onToggle={handleNavToggle}
        className={styles.navToggle}
      />
    </div>
  );
};

export default Overlay;

const ProfileImage: React.FC = () => (
  <Image
    src="/logo.svg"
    alt="Profile picture"
    priority={true}
    width={250}
    height={250}
    className={styles.profileImage}
  />
);

const ProfileInfo: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.profileInfo}>{children}</div>
);

interface ProfileInfoFieldProps {
  name: string;
  value: string;
}

const ProfileInfoField: React.FC<ProfileInfoFieldProps> = ({ name, value }) => (
  <div className={styles.profileInfoField}>
    <span className={styles.fieldKey}>{name + ":"}</span>
    <span className={styles.fieldValue}>{value}</span>
  </div>
);

interface NavbarProps {
  items: Array<NavItemData>;
  navRef: RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ items, navRef }) => {
  const router = useRouter();
  const transition = `opacity, ${navAnimDuration}ms ease-out`;

  return (
    <>
      <div ref={navRef} className={styles.navContainer} style={{ transition }}>
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            {items.map((item) => (
              <li key={item.name}>
                <NavItem
                  name={item.name}
                  href={item.href}
                  active={item.href == router.pathname}
                />
              </li>
            ))}
          </ul>
          <SocialGroup />
        </nav>
      </div>
    </>
  );
};

interface NavItemProps {
  name: string;
  href: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, href, active }) => (
  <Link href={href}>
    <a
      onClick={
        // NOTE: has to be cleaned up here because of js-based client-side route transitioning (See `next/link`).
        unlockBody
      }
      className={`link ${active ? styles.activeItem : ""}`}
    >
      {name}
    </a>
  </Link>
);

const SocialGroup: React.FC = () => (
  <div className={styles.socialGroup}>
    <LinkIcon
      src="/github-brands.svg"
      href="http://www.github.com/ShinyJonny"
      external={true}
      className={styles.socialIcon}
    />
    <LinkIcon
      src="/square-gitlab-brands.svg"
      href="http://www.gitlab.com/ShinyJonny"
      external={true}
      className={styles.socialIcon}
    />
  </div>
);

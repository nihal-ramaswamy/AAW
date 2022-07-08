import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ${styles.nav_down}`}>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        !© 2022{" "}
        <span className="hover:underline">
          AA Website™
        </span>
        . No Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Contact
          </a>
        </li>   
      </ul>
    </footer>
  );
};

export default Footer;

import { SocialLinks, PageLinks } from './Links';

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        <PageLinks name='footer-link' />
      </ul>
      <ul className='footer-icons'>
        <SocialLinks name='footer-icon' />
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

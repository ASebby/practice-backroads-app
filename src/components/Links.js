import { socialLinks, pageLinks } from '../data';
export const SocialLinks = ({ name }) => {
  return (
    <>
      {' '}
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} target='_blank' rel='noreferrer' className={name}>
              <i className={icon} />
            </a>
          </li>
        );
      })}
    </>
  );
};

export const PageLinks = ({ name }) => {
  return (
    <>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={name}>
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

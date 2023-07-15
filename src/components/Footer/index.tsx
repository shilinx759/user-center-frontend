import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'SHI集团出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined />shlinx GitHub</>,
          href: 'https://github.com/shilinx759/user-center-frontend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

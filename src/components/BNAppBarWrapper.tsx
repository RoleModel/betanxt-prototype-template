'use client';

import { BNAppBar } from '@rolemodel/betanxt-design-system/components/app-bar/BNAppBar';
import { GitHub as GitHubIcon } from '@mui/icons-material';

// Mock Link component for Next.js
const NextLinkComponent = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: unknown }) => (
  <a href={to} {...props}>{children}</a>
);

interface BNAppBarWrapperProps {
  title?: string;
  color?: 'primary' | 'secondary';
}

export const BNAppBarClient = ({ title = "BetaNXT Template", color = "primary" }: BNAppBarWrapperProps) => {
  const exampleTabs = [
    {
      label: 'Home',
      value: 'home',
      to: '/',
    },
    {
      label: 'About',
      value: 'about',
      to: '/about',
    },
  ];

  return (
    <BNAppBar 
      title={title}
      color={color}
      selectedTabValue="home"
      LinkComponent={NextLinkComponent}
      tabs={exampleTabs}
      avatar={
        {
          src: 'https://untitledui.com/images/avatars/transparent/loki-bright',
          alt: 'User Avatar',
          children: 'US',
        }
      }
      menuItems={[
        {
          label: 'GitHub',
          onClick: () => window.open('https://github.com/RoleModel/betanxt-prototype-template', '_blank'),
          icon: <GitHubIcon />,
        },
      ]}
    />
  );
};

export { BNAppBar };

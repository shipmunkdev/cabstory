import './globals.css';
import { Analytics } from '@vercel/analytics/react';

import ResponsiveAppBar from './Header';

export const metadata = {
  title: 'CabStory',
  description: 'Created by Shipmunk',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <ResponsiveAppBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

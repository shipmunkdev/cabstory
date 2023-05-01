import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'CabStory',
  description: 'Created by Shipmunk',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

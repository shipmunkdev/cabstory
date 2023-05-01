import './globals.css';

export const metadata = {
  title: 'CabStory',
  description: 'Created by Shipmunk',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

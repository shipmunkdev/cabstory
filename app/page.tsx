import Link from 'next/link';

import Button from '@cabstory/core-components/Button';

const Home = () => {
  return (
    <main>
      <Link href="/logtrip">
        <Button variant="contained" color="secondary" size="large">
          Log Trip
        </Button>
      </Link>
    </main>
  );
};

export default Home;

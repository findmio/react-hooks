import React, { useState } from 'react';
import { useMount } from '@findmio/react-hooks';

const Page = () => {
  const [mount, setMount] = useState(false);
  useMount(() => {
    setMount(true);
  });
  return <div>mount: {mount.toString()}</div>;
};
export default Page;

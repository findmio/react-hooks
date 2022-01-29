import React, { useState } from 'react';
import { useUpdateEffect } from '@findmio/react-hooks';

import { Button, message } from 'antd';
import 'antd/dist/antd.css';

const Page = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    message.info('count:' + count);
  }, [count]);
  console.log(count);

  return (
    <div>
      <div>count: {count}</div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </Button>
    </div>
  );
};
export default Page;

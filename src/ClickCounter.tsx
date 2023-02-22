import { useState } from 'react';

type Props = {};

const ClickCounter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  );
};

export default ClickCounter;

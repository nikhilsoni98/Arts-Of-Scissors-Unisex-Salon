import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="site-loader" className={hidden ? 'hidden' : ''} aria-hidden="true">
      <div className="loader-inner">
        <img src="/assets/images/full.png" alt="Arts Of Scissors Emblem" />
        <p>Arts Of Scissors</p>
      </div>
    </div>
  );
}

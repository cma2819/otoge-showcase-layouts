import React, { useEffect, useState } from 'react';

export const Clock = () => {
  const [ time, setTime ] = useState<string>('00:00');

  useEffect(() => {
    const interval = window.setInterval(() => {
      const now = new Date();

      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 1000);

    return () => {window.clearInterval(interval);}
  }, []);

  return (
    <div>
      { time }
    </div>
  )
}
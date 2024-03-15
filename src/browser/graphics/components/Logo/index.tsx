import React, { useEffect, useState } from 'react'
import { ShowcaseNodecgInstance } from '../../../global';

export const Logo = () => {
  const [logoUrl, setLogoUrl] = useState<string>('');

  useEffect(() => {
    (nodecg as ShowcaseNodecgInstance).readReplicant('assets:sponsor-logo', (assets) => {
      const [first] = assets;
      if (!first) {
        return;
      }
      setLogoUrl(first.url);
    })
  }, [])

  return <div style={{
    width: '100%',
    height: '100%',
    backgroundImage: `url('${logoUrl}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}></div>
}
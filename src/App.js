import randomcolor from 'randomcolor';
import React, { useState } from 'react';

export default function RandomColorApp() {
  const [backgroundColor, setBackgroundColor] = useState(randomcolor());

  return (
    <div>
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        Generated Color: {backgroundColor}
      </div>
      <button onClick={() => setBackgroundColor(randomcolor())}>
        Generate
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import randomcolor from 'randomcolor';

export default function RandomColorApp() {
const [color, setColor] = useState(randomcolor());

return (
<div>
  <h1>Random Color Generator</h1>
<p>The hex code for the random color is: <b>{color}</b></p>
<div style={{ backgroundColor: color, width: "100px", height: "100px", marginBottom: "10px", marginLeft: "10px"}} />
<button onClick={() => setColor(randomcolor())}>
Generate
</button>
</div>
);
}

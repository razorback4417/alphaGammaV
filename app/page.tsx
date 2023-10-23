// page.tsx
import React from 'react';
import Image from 'next/image';
import SplineViewer from './SplineViewer';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#FFC7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', maxWidth: '800px' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', margin: 0 }}>Genesis</h1>
        </div>
        <div id="splineView" style={{ flex: 1, textAlign: 'center' }}>
          {/* This is where the spline viewer will be rendered */}
          <SplineViewer canvasId="canvas3d" />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import Image from 'next/image'

// export default function Home() {
//   return (
//       <div style={{ backgroundColor: '#FFC7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//         <div style={{ display: 'flex', maxWidth: '800px' }}>
//           <div style={{ flex: 1, textAlign: 'center' }}>
//             <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3em', fontWeight: 'bold', margin: 0 }}>Genesis</h1>
//           </div>
//           <div style={{ flex: 1, textAlign: 'center' }}>
//             {/* <img src="bear_image.jpg" alt="Bear Image" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} /> */}
//             <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.487/build/spline-viewer.js"></script>
//             <spline-viewer url="https://prod.spline.design/MqEQXSbFhu9Qb7Bj/scene.splinecode"></spline-viewer>
//           </div>
//         </div>
//       </div>
//     );
// }
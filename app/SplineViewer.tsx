// SplineViewer.tsx
"use client";

import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineViewerProps {
  canvasId: string;
}

const SplineViewer: React.FC<SplineViewerProps> = ({ canvasId }) => {
  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;

    if (canvas) {
      const spline = new Application(canvas);
      spline.load('https://prod.spline.design/lGdYgE67Z5xv2Gqs/scene.splinecode');
    }
  }, [canvasId]);

  return <canvas id={canvasId} style={{ width: '100%', height: '100%' }}></canvas>;
};

export default SplineViewer;

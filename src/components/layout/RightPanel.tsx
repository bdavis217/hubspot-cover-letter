import * as React from 'react';
import { MetricsAndAwards } from '../metrics/MetricsAndAwards';

export function RightPanel() {
  return (
    <div className="px-6 pt-6">
      <h2 className="text-2xl font-bold mb-6">Career Highlights</h2>
      <MetricsAndAwards />
    </div>
  );
} 
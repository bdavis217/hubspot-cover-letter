import * as React from 'react'
import { CareerTimeline } from '../timeline/CareerTimeline'

export function TimelinePanel() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">Experience Timeline</h2>
      <CareerTimeline />
    </div>
  )
} 
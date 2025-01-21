import * as React from 'react'
import { CareerTimeline } from '../timeline/CareerTimeline'

export function TimelinePanel() {
  return (
    <div className="border-x border-[#cbd6e2] bg-white">
      <div className="px-6 pt-6">
        <h2 className="text-2xl font-bold mb-6 text-[#33475b]">Experience Timeline</h2>
        <CareerTimeline />
      </div>
    </div>
  )
} 
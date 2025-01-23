import { Card } from '../ui/card';
import { metrics, Metric } from '../../data/metrics';

function MetricCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;
  
  return (
    <Card className="bg-white border-[#cbd6e2] hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-[#e5f5f8] flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-[#00a4bd]" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#516f90]">{metric.title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-semibold text-[#33475b]">{metric.value}</p>
              {metric.subtitle && (
                <p className="text-lg text-[#516f90]">{metric.subtitle}</p>
              )}
            </div>
            <p className="text-sm text-[#516f90]">{metric.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map(metric => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
} 
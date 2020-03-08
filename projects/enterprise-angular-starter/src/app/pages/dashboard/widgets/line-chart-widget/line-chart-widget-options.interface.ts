import { ChartWidgetOptions } from '@app/core/component/chart-widget';

export class LineChartWidgetOptions extends ChartWidgetOptions {
  gradientFill?: {
    from: string;
    to: string;
  };
}

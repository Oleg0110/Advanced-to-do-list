import { Metric } from 'web-vitals';

function reportHandler(metric: Metric) {
  false && console.log(metric);
}

export default reportHandler;

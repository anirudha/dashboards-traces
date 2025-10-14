import './index.scss';

import { DashboardsTracesPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
export function plugin() {
  return new DashboardsTracesPlugin();
}
export { DashboardsTracesPluginSetup, DashboardsTracesPluginStart } from './types';

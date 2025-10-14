import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface DashboardsTracesPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DashboardsTracesPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

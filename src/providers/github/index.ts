import { find } from 'lodash';

import { Provider } from '../types';
import { availablePredicates } from './predicates';
import { fetchFilter } from './fetchers';
import { Settings } from './components/Settings';
import { IssueCard } from './components/IssueCard';

class GithubProvider implements Provider {
  public id = 'github';
  public label = 'GitHub';
  public settingsComponent = Settings;
  public cardComponent = IssueCard;

  public fetchFilter = fetchFilter;

  public getAvailablePredicates = () => availablePredicates;

  public findPredicate(name: string) {
    return find(this.getAvailablePredicates(), { name });
  }
}

export const github = new GithubProvider();

import { currentPrimary } from './currentPrimary';
import { NodeCG } from './nodecg';
import { programs } from './programs';

export = (nodecg: NodeCG): void => {
  programs(nodecg);
  currentPrimary(nodecg);
}
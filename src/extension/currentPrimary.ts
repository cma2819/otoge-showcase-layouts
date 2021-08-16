import { NodeCG } from './nodecg';

export const currentPrimary = (nodecg: NodeCG): void => {
  const logger = new nodecg.Logger('currentPrimary');

  const surroundCurrentPkReplicant = nodecg.Replicant('surroundCurrentPk', {
    defaultValue: { prev: null, current: null, next: null}
  });
  const programsReplicant = nodecg.Replicant('programs');

  const setCurrent = (pk: number) => {
    if (!programsReplicant.value) {
      return;
    }

    const currentIndex = programsReplicant.value.findIndex(program => program.pk === pk);
    if (!(currentIndex > -1)) {
      return;
    }

    const prev = programsReplicant.value.find((_, index) => index === (currentIndex - 1))?.pk || null;
    const next = programsReplicant.value.find((_, index) => index === (currentIndex + 1))?.pk || null;

    surroundCurrentPkReplicant.value = {
      prev,
      current: pk,
      next
    };
  }

  nodecg.listenFor('current.update', ({ pk }, cb) => {
    
    if (cb && cb.handled) {
      return;
    }

    try {
      setCurrent(pk);
    } catch (e) {
      logger.error(e);
      cb && cb(e);
    }
  });
}
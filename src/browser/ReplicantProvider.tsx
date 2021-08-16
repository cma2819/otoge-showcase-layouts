import clone from 'lodash.clone';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Programs, SurroundCurrentPk } from '../nodecg/replicants';
import { ShowcaseNodecgInstance } from './global';

interface Replicants {
  programs: Programs;
  surroundCurrentPk: SurroundCurrentPk;
}

const defaultValues: Replicants = {
  programs: [],
  surroundCurrentPk: {
    prev: null,
    current: null,
    next: null,
  }
};

const ncg = nodecg as ShowcaseNodecgInstance

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [ programs, setPrograms ] = useState<Programs>(defaultValues.programs);
  const [ surroundCurrentPk, setSurroundCurrentPk ] = useState<SurroundCurrentPk>(defaultValues.surroundCurrentPk);

  useEffect(() => {  
    const mutations: Array<[ keyof Replicants, React.Dispatch<any> ]> = [
      [ 'programs', setPrograms ],
      [ 'surroundCurrentPk', setSurroundCurrentPk],
    ];

    mutations.forEach(([name, mutator]) => {
      const replicant = ncg.Replicant(name);

      replicant.on('change', (newVal) => {
        mutator(clone(newVal));
      });
    });
  }, []);

  return (
    <ReplicantContext.Provider value={{
      programs,
      surroundCurrentPk
    }}>
      { children }
    </ReplicantContext.Provider>
  )
}
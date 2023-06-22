import React, { FC, ReactElement, useState } from 'react'

const useMultistepForm = (steps: ReactElement[]) => {
  const [currenStepIndex, setCurrentStepIndex] = useState<number>(0);

  const next = () => {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    })
  }

  const back = () => {
    setCurrentStepIndex(i => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    })
  }

  const goto = (index: number) => {
    setCurrentStepIndex(index);
  }

  return {
    currenStepIndex,
    step: steps[currenStepIndex],
    steps,
    isFirstStep: currenStepIndex === 0,
    isLastStep: currenStepIndex === steps.length - 1,
    goto,
    next,
    back,
  }
}

export default useMultistepForm;
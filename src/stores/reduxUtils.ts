import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const makeActionCreator = <T>(type: string) => {
  return (payload: T) => ({
    type,
    payload,
  });
};

export const makeActionCreatorWithoutPayload = (type: string) => {
  return () => ({
    type,
    payload: null,
  });
};

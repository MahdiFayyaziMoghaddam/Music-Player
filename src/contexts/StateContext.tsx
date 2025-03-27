import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { States } from "../types/States";
import { Actions } from "../types/Actions";

interface IStateContext {
  state: States;
  dispatch: Dispatch<Actions>;
}

const StateContext = createContext<IStateContext | object>({});

interface IStateProvider {
  children: ReactNode;
}

const initialStates: States = {
  isPlayMusic: false,
  allMusics: [],
  musicIndex: 0,
  allFavored: [],
  allQueue: [],
};

const StateReducer: (state: States, action: Actions) => States = (
  state,
  action
) => {
  switch (action.type) {
    case "INCREASE_MUSIC_INDEX": {
      return {
        ...state,
        musicIndex:
          state.musicIndex === state.allMusics.length - 1
            ? 0
            : state.musicIndex + 1,
      };
    }

    case "DECREASE_MUSIC_INDEX": {
      return {
        ...state,
        musicIndex:
          state.musicIndex === 0
            ? state.allMusics.length - 1
            : state.musicIndex - 1,
      };
    }

    case "SET_MUSIC_INDEX": {
      return {
        ...state,
        musicIndex: action.value,
      };
    }

    case "ADD_MUSIC": {
      const isRepeat = state.allMusics.findIndex((music) => music.title === action.value.title);

      if (isRepeat < 0) {
        if (state.allMusics.length === 0) {
          return {
            ...state,
            allMusics: [...state.allMusics, action.value],
          };
        } else {
          state.allMusics.push(action.value);
          return {
            ...state,
          };
        }
      } else {
        return state;
      }
    }

    case "TOGGLE_PLAYING_MUSIC": {
      if (state.allMusics.length > 0) {
        if (state.isPlayMusic) {
          return {
            ...state,
            isPlayMusic: false,
          };
        } else {
          return {
            ...state,
            isPlayMusic: true,
          };
        }
      }
      return state;
    }
    case "PLAY_MUSIC": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          isPlayMusic: true,
        };
      }
      return state;
    }
    case "PAUSE_MUSIC": {
      if (state.allMusics.length > 0) {
        return {
          ...state,
          isPlayMusic: false,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

function StateProvider({ children }: IStateProvider) {
  const [state, dispatch] = useReducer(StateReducer, initialStates);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

const useStateContext = (): IStateContext => {
  return useContext(StateContext as Context<IStateContext>);
};

export {StateProvider}
export {useStateContext}

import { Context, createContext, MutableRefObject, ReactNode, RefObject, useContext, useRef } from "react";



const AudioContext = createContext<RefObject<HTMLAudioElement> | null>(null)

interface IAudioProvider {
  children: ReactNode
}

const AudioProvider = ({children}: IAudioProvider) => {
  const audioRef: RefObject<HTMLAudioElement> | MutableRefObject<HTMLAudioElement | null | undefined> = useRef()
  return (
    <AudioContext.Provider value={audioRef as RefObject<HTMLAudioElement>}>
      <audio src="" ref={audioRef as RefObject<HTMLAudioElement>}></audio>
      {children}
    </AudioContext.Provider>
  )
}

const useAudio = () => {
  const context = useContext(AudioContext as Context<RefObject<HTMLAudioElement>>)
  return context.current as HTMLAudioElement
}

export {AudioProvider, useAudio}
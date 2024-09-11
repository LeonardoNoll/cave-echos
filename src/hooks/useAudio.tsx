import { useRef, useEffect } from 'react'

const useAudio = (src: string, { volume = 1, playbackRate = 1 }) => {
    const audio = useRef(new Audio(src))
  
    useEffect(() => {
      audio.current.volume = volume/10
    }, [volume])
  
    useEffect(() => {
      audio.current.playbackRate = playbackRate
    }, [playbackRate])
  
    return audio.current
  }


export default useAudio
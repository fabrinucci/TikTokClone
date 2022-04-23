import { useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://v16-webapp.tiktok.com/e7c6cf1b970d4618ca5c345b80a03058/6263907c/video/tos/useast2a/tos-useast2a-ve-0068c003/d03caf77b192410f8f8bae25cab0f1fc/?a=1988&br=844&bt=422&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HmzMyq8ZWWiNwe2Nd00yl7Gb&l=2022042223365101022307515908998F7F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk2c2k6ZmVnPDMzNzczM0ApZ2k4OTU4OmQ6NzM8O2g7M2duaGAycjQwZGRgLS1kMTZzczNhNTRhNF42NWJhMTYyMC06Yw%3D%3D&vl=&vr='

export default function VideoPlayer() {

  const [playing, setPlaying] = useState(false)

  const video = useRef()

  const handlePlay = () => {
    if(playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video 
        className={ styles.video } 
        src={ SRC } 
        controls={ false }
        ref={ video }
      />
      <button className={ styles.player } onClick={ handlePlay } />
    </div>
  )
}
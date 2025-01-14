import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HorizontalDrag() {
  return (
    <>
      <div className='relative h-screen w-full'>
        <section className='slider_container relative grid h-screen auto-cols-[100%] grid-flow-col overflow-x-auto bg-white'>
          <article
            id='article-1'
            className='slider_article relarive h-full w-full'
          >
            {/* <Image
              src={'/assets/pexels-jakubzerdzicki-19746343.jpg'}
              alt=''
              width={1080}
              height={1080}
              className='h-full w-full object-cover'
            /> */}
          </article>
          <article
            id='article-2'
            className='slider_article relarive h-full w-full'
          >
            <p>rhkfnhklndfkd</p>
          </article>
          <article
            id='article-3'
            className='slider_article relarive h-full w-full'
          ></article>
          <article
            id='article-4'
            className='slider_article relarive h-full w-full'
          ></article>
          <article
            id='article-5'
            className='slider_article relarive h-full w-full'
          ></article>
        </section>
        <div className='timeline fixed bottom-0 left-0 flex h-[10vh] w-screen justify-around'>
          <div className='scroller'>
            <p>
              <span>Desliza</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

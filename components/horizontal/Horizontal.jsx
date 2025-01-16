import React from 'react'
import style from '@/components/horizontal/style.module.css'

export default function Horizontal() {
  return (
    <>
      <section className={style.container}>
        <article className={style.sticky}>
          <div className={style.slider}>
            <div className={style.slides}>
              <div className={style.slide}>
                <div className={style.img}></div>
                <div className={style.title}>
                  <h2>Título</h2>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={style.outro}>
          <p>Texto de relleno</p>
        </article>
      </section>
    </>
  )
}

'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";

export default function Home() {
    const [isClicked, setIsClicked] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        if (isClicked) {
          if (input !== '') {
            // todo
          }
        }
    }, [isClicked]);

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <input value={input} onChange={(event) => setInput(event.target.value)}
                       placeholder={'Ты умничка'}/>
                <button onClick={() => setIsClicked(true)}>
                    Нажми на меня и больше никакого тп не будет в твоей жизни
                </button>
            </section>

        </main>
    );
}

'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState([] as any)
    const [isClicked, setIsClicked] = useState(false)
    const [input_message, setInput_message] = useState('')

    useEffect(() => {
        if (isClicked) {
            axios.post('http://localhost:8080/test',
                {
                    data: input_message
                })
                .then((response => {
                    if (response.status === 200) console.log('ok')
                    else console.log('error')
                }))
                .catch(error => {
                    console.log(error)
                })
        }
    }, []);


    useEffect(() => {
        const event = new EventSource('http://localhost:8080/something')

        event.onmessage = (event) => {
            setData(event.data);
        };

        return () => {
            event.close();
        };
    }, [isClicked]);

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <input placeholder={'Эх'}
                       value={input_message}
                       onChange={(event) => setInput_message(event.target.value)}/>
                <button onClick={() => setIsClicked(true)}>
                    Нажми на меня и больше никакого тп не будет в твоей жизни
                </button>
            </section>
            <ul className={styles.ul}>
                {data.map((text: string, index: number) => {
                    return (
                        <li key={index}>{text}</li>
                    )
                })}
            </ul>
        </main>
    );
}

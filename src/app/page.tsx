'use client'

import styles from "./page.module.css";
import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState([] as any)

    useEffect(() => {
        const event = new EventSource('http://localhost:8080/stream')

        event.onmessage = (event) => {
            setData(event.data);
        };

        return () => {
            event.close();
        };
    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div>
                    Смотри на меня и больше никакого тп не будет в твоей жизни
                </div>
            </section>
            <ul className={styles.ul}>
                {data.map((text : string, index: number) => {
                    return (
                        <li key={index}>{text}</li>
                    )
                })}
            </ul>
        </main>
    );
}

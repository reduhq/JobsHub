import { MdAttachMoney, MdWork } from "react-icons/md";

import styles from './jobItem.module.css'

interface Props{
    title:string
    company:string
    city:string
    modality:string
    min_salary:number
    max_salary:number
}

export const JobItem = (props:Props) => {
    return (
        <article className={styles.jobItem}>
            <div className={styles.jobItem__title}><h2>{props.title}</h2></div>
            <div className={styles.jobItem__data}><p>{props.company} - {props.city}</p></div>
            <div className={styles.jobItem__details}>
                <p><MdWork /> {props.modality} • <MdAttachMoney /> ${props.min_salary} - ${props.max_salary}</p>
            </div>
            
        </article>
    )
}

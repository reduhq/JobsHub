import Image from "next/image";
import styles from "./page.module.css";
import { JobItem } from "@/components/jobItem/JobItem";

export default function Home() {
  return (
    <main className={`container ${styles.page}`}>
      <h2 className={styles.page__title}>Encuentra el próximo trabajo de tus sueños</h2>
      <p className={styles.page__description}>Busque entre miles de ofertas de trabajo y encuentre la opción perfecta para usted.</p>
      <form className={styles.page__form} action="">
        <input type="search" name="keyword" id="keyword" placeholder="Puesto, Empresa, palabra clave" />
        <input type="search" name="city" id="city" placeholder="Ciudad"/>
        <button type="submit">Buscar</button>
      </form>
      <section className={styles.page__job_list}>
        <h2>Lista de vacantes recientes</h2>
        <JobItem
          title="Software engineer"
          city="Managua"
          company="Shornel"
          max_salary={80000}
          min_salary={100000}
          modality="Tiempo completo"
        />
        <JobItem
          title="Software engineer"
          city="Managua"
          company="Shornel"
          max_salary={80000}
          min_salary={100000}
          modality="Tiempo completo"
        />
        <JobItem
          title="Software engineer"
          city="Managua"
          company="Shornel"
          max_salary={80000}
          min_salary={100000}
          modality="Tiempo completo"
        />
      </section>
    </main>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Container from "../container";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>DTI - FrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </Head>
      <main className="d-flex flex-column">
        <Container remaiders={props.remaiders} />
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:5247/api/reminder");
  const json = await res.json();

  let remaidersFilterByDate = {};
  json
    .filter((remaider) => !remaider.isDeleted)
    .map((remaider) => {
      const date = remaider.date.split("T")[0];
      const hasDate = remaidersFilterByDate[date];

      if (hasDate) {
        remaidersFilterByDate[date].remaiders = [
          ...remaidersFilterByDate[date].remaiders,
          remaider,
        ];
      } else {
        remaidersFilterByDate[date] = {
          date: date,
          remaiders: [remaider],
        };
      }
    });
  return {
    remaiders: remaidersFilterByDate,
  };
};

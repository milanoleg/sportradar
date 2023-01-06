import React, { FC, ReactElement } from "react";

import { ReactComponent as Spin } from "assets/spinner.svg";

import styles from "./Spinner.module.scss";

const Spinner: FC = (): ReactElement => (
  <div className={styles.wrapper}>
    <div className={styles.spin}>
      <Spin />
    </div>
    <div className={styles.background} />
  </div>
);

export default Spinner;

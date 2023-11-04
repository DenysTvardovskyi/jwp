import React, { FC } from "react";
import { classes } from "../../utils";
import styles from "./Landing.module.scss";
import { Header } from "../../components";

interface IProps {
  main?: {
    className?: string;
  };
  children?: React.ReactNode | React.ReactNode[];
}

export const Landing: FC<IProps> = ({ main, children }: IProps): JSX.Element => {
  return (
    <div className={classes("d-flex", styles.container)}>
      <div className={styles.dashboard}>
        <Header />
        <main className={classes("d-flex py-3", styles.main, main?.className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

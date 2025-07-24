// src/components/CustomButton.tsx
import styles from '../styles/CustomButton.module.css';

type Props = {
  children: React.ReactNode;
};

export default function CustomButton({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
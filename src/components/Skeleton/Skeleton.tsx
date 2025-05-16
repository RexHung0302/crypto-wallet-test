import clsx from 'clsx';
import styles from './skeleton.module.scss';

interface SkeletonProps {
  active: boolean;
  className?: string;
}

/**
 * @description Skeleton component
 * @returns {JSX.Element}
 */
const Skeleton = ({ active, className }: SkeletonProps) => {
  return <div className={clsx(styles.skeleton, active && styles.active, className)} />;
};

export default Skeleton;

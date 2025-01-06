import styles from "./Card.module.css";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CardProps {
  benefitsData: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-icon"]}>{icon}</div>
      <h3 className={styles["card-title"]}>{title}</h3>
      <p className={styles["card-description"]}>{description}</p>
    </div>
  );
};

export function CardDemo({ benefitsData }: CardProps) {
  return (
    <div>
      <div className={styles["card-container"]}>
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}

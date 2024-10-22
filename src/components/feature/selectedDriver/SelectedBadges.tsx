interface Badge {
  label: string;
  color: string;
}

const Badge = ({ label, color }: Badge) => {
  return (
    <span
      className={`bg-${color}-200 text-${color}-800 text-xs p-2 rounded-md font-bold uppercase`}
    >
      {label}
    </span>
  );
};

const SelectedBadges = ({ badges }: { badges: Badge[] }) => {
  return (
    <div className="flex items-center justify-center gap-1 mt-2">
      {badges.map((badge: Badge) => (
        <Badge key={badge.label} label={badge.label} color={badge.color} />
      ))}
    </div>
  );
};

export default SelectedBadges;

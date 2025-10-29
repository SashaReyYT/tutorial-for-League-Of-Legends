interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const CategoryButton = ({ label, isActive = false, onClick }: CategoryButtonProps) => {
  return (
    <button
      className={`btn btn-lg px-4 py-2 fw-semibold category-btn ${
        isActive ? 'category-btn-active' : 'category-btn-inactive'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

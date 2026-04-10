import "./PageWrapper.css";

export default function PageWrapper({ children, bg = "green" }) {
  return (
    <div className={`pwrap pwrap-${bg}`}>
      {children}
    </div>
  );
}
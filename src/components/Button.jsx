function Button({ children, className, type, onClick }) {
    return (
      <button className={`button ${className}`} type={type} onClick={onClick}>
        {children}
      </button>
    );
  }
export default Button
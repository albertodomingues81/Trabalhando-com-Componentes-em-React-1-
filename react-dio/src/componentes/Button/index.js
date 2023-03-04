const Button = ( {children, className, onClick} ) => {
  return(
     <button 
      type="button" 
      className="btn btn-success" 
      onClick={onClick}
      >
       {children}
      </button>
  )
}

export default Button;
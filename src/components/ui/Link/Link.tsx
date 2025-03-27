import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface ILinkProps extends Omit<NavLinkProps, "to"> {
  href: string;
  children: ReactNode;
  className?: string;
  fontSize?: number;
}

const Link = 
  ({ href, children, className = "", fontSize = 20, ...props }: ILinkProps) => {
    return (
      <NavLink
        to={href}
        className={({ isActive }) => `
      
        ${isActive ? "*:text-primary" : "*:text-dark-400"}
      `}
        {...props}
      >
        <span
          className={`underline transition-colors duration-200 ${className}`}
          style={
            fontSize
              ? {
                  fontSize: `${fontSize}px`,
                  textUnderlineOffset: `10%`,
                }
              : {}
          }
        >
          {children}
        </span>
      </NavLink>
    );
  }


// Add display name for debugging

export default Link;

import React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "xl";
}

const Container = ({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) => {
  const sizeStyles = {
    sm: "max-w-4xl",
    default: "max-w-6xl",
    lg: "max-w-7xl",
    xl: "max-w-[1440px]",
  }
  
  return (
    <div 
      className={cn(
        "mx-auto px-4 md:px-6 w-full",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Container } 
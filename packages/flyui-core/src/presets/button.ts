export const buttonClassNames = {
  transition: 'transition-all duration-200',
  // Variants + ColorSchemes
  ghost: {
    shadow: '',
    primary: {
      border: 'border-2 border-transparent',
      bgColor: 'bg-primary',
      color: 'text-primary hover:text-gray-900 focus:text-gray-900',
      outline: '',
    },
    secondary: {
      bgColor: 'bg-secondary-500',
      color: 'text-primary hover:text-gray-900 focus:text-gray-900',
      outline: '',
    },
  },
  link: {
    shadow: '',
    primary: {
      border: 'border-2 border-transparent',
      bgColor: 'bg-transparent',
      color: 'text-primary hover:text-gray-900 focus:text-gray-900',
      outline: '',
    },
    secondary: {
      bgColor: 'bg-secondary-500',
      color: 'text-primary hover:text-gray-900 focus:text-gray-900',
      outline: '',
    },
  },
  outline: {
    shadow: 'hover:shadow-xl',
    primary: {
      border: 'border-2',
      bgColor: 'bg-transparent hover:bg-primary-hover',
      color: 'text-primary hover:text-gray-900 focus:text-gray-900',
      outline:
        'border-primary text-primary-500 bg-opacity-0 hover:bg-opacity-10',
    },
    secondary: {
      bgColor: 'bg-secondary',
      color: 'text-secondary',
      outline:
        'border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-10',
    },
  },
  solid: {
    shadow: 'hover:shadow-xl',
    primary: {
      border: 'border-2 border-primary',
      bgColor: 'bg-primary',
      color: 'text-white',
      outline: '',
    },
    secondary: {
      bgColor: 'bg-secondary-500',
      color: 'text-white',
      outline: '',
    },
  },

  ring: {
    default:
      'focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-opacity-100 focus:ring-offset-background ring-gray-500 rounded ring-0  ring-opacity-0',
  },

  // Sizes
  sm: 'px-3 py-2',
  md: 'px-4 py-2',
  lg: 'px-5 py-2',
  xl: 'px-5 py-2',
};

export const buttonStyles = (providedClassName: string) => {
  const displayProps = `inline-flex items-center`;
  const transitionProps = buttonClassNames.transition;

  // @ts-ignore
  const shadowStyles = buttonClassNames[variant]?.shadow;
  // @ts-ignore
  const sizeStyles = buttonClassNames.size;
  // @ts-ignore
  const outlineStyles = buttonClassNames[variant]?.[colorScheme]?.outline;
  // @ts-ignore
  const borderStyles = buttonClassNames[variant]?.[colorScheme]?.border;
  // @ts-ignore
  const bgColStyles = buttonClassNames[variant]?.[colorScheme]?.bgColor;
  // @ts-ignore
  const colorStyles = buttonClassNames[variant]?.[colorScheme]?.color;

  const className = `${displayProps} ${transitionProps} font-bold rounded-xl ${shadowStyles} ${buttonClassNames.ring.default} ${sizeStyles} ${borderStyles} ${outlineStyles} ${bgColStyles} ${colorStyles} ${providedClassName}`;

  return className;
}
interface AvatarProps {
  src?: string
  size?: number
  className?: string
}

const namedSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];

export const Avatar = ({ src, size = 12 }: AvatarProps) => {
  const cssStringParts =
    // @ts-ignore
    typeof size === 'string' && size.match(/^[0-9]*(px|em|rem|%)$/);
  const isCssString = Boolean(cssStringParts);
  const isNumber = typeof size === 'number';
  const isNamedSize = typeof size === 'string' && namedSizes.includes(size);

  const sizeValue = isCssString
    ? `[${size}]`
    : isNumber
    ? `[${size}px]`
    : isNamedSize
    ? size
    : 'base';

  return (
    <span className="inline-block relative">
      <img
        className={`h-${sizeValue} w-${sizeValue} rounded-full"`}
        src={src || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
        alt=""
      />
      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300" />
    </span>
 );
}
interface AvatarProps {
  src?: string
  size?: number
  className?: string
}

export const Avatar = ({ src, size = 12 }: AvatarProps) => {
  return (
    <span className="inline-block relative">
      <img
        className={`h-${size} w-${size} rounded-full"`}
        src={src || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
        alt=""
      />
      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-gray-300" />
    </span>
 );
}
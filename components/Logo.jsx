import { icons, Smile } from 'lucide-react'

export const TheLogo = ({ name, color, size, rotation }) => {
  const LudicIcon = icons[name]

  if (!LudicIcon) {
    return (
      <Smile
        color={color}
        size={size}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    )
  }
  return (
    <>
      <LudicIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </>
  )
}

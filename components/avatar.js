import AvatarPicture from "./avatarPicture"

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <AvatarPicture />

      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}


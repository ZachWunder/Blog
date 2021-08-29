import AvatarPicture from "./avatarPicture"

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <AvatarPicture className="w-12 h-12 mr-4" />

      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}


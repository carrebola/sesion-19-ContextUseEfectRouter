export function Avatar({data}) {

  const {email, imagen} = data
  return (

    <div className="flex items-center">

      <div className="px-2">{email}</div>
      <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
        <img src={imagen} alt="" />
      </div>
    </div>
  )
}
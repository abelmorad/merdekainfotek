import { team } from '@/constant'
import Image from 'next/image'

const TeamCard = () => {
  return (
    <>
      {team.map((data) => (
        <div
          className="flex flex-col place-content-center bg-white shadow-md items-center border border-gray-300 rounded-md h-72 w-60 px-5 py-10 text-center"
          key={data.id}
        >
          <Image
            src="/avatar/fullstack.png"
            alt={data.name}
            className="mb-4"
            width={128}
            height={128}
          />
          <p>{data.name}</p>
          <p>
            <strong>{data.position}</strong>
          </p>
        </div>
      ))}
    </>
  )
}

export default TeamCard

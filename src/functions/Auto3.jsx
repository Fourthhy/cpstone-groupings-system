import { StepBack, StepForward } from "lucide-react"
import { Carousel } from "flowbite-react"
import { useState } from "react"

export default function Auto3() {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const roleList = [
    { roleIcon: "/system_developer.png", roleName: "System Developer", roleIndex: 0 },
    { roleIcon: "/project_manager.png", roleName: "Project Manager", roleIndex: 1 },
    { roleIcon: "/system_quality.png", roleName: "System QA", roleIndex: 2 },
    { roleIcon: "/uiux_designer.png", roleName: "UI/UX Designer", roleIndex: 3 }
  ]

  return (
    <>
      <div>
        {roleList[currentIndex].roleName}
      </div>
      <Carousel
        className="h-auto text-gray-600 w-[75%] text-xs"
        leftControl={<StepBack color="#6dc4d0" className="ml-[-10px]" />}
        rightControl={<StepForward color="#6dc4d0" className="mr-[-10px]" />}
        slide={false}
        indicators={false}
        onSlideChange={(index) => {
          console.log(index)
          setCurrentIndex(index)
        }}
      >
        {roleList.map((role, index) => (
          <>
            <div key={index} className="flex flex-col items-center">
              <img className="w-[50px] h-[50px]" src={`${role.roleIcon}`} alt="" />
            </div>
          </>
        ))}

      </Carousel>
    </>
  )
}
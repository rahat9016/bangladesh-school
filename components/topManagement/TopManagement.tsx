import ManagementCard from "./ManagementCard"

export default function TopManagement() {
    const data = [
        {
            name: "Md. Masud Alam",
            position: "Vice Principal (Admin)",
            email:"masudmilestone1056@gmail.com",
            image:"",
            title:"ADVISER'S MESSAGE",
            descriptions: ["We, being backed up by a number of specialist teaching staff and excellent facilities and resources, offer a wide range of courses in the college. Ours is a non-profitable organization established by the MNRS TRUST. Now, it is run by a Board of Governors approved by the Board of Intermediate & Secondary Education, Dhaka under the Ministry of Education, Government of the People’s Republic of Bangladesh. The institution, growing from a Kindergarten to a Junior School and then to a Secondary School, has now emerged as a leading College of Bangladesh. Since inception, the institute has been enjoying a proud record of academic excellence and innovations. Over the years, it has generated a significant number of employments of qualified academicians, administrators and a set of dynamic staff."]
        },
        {
            name: "Md. Masud Alam",
            position: "Vice Principal (Admin)",
            email:"masudmilestone1056@gmail.com",
            image:"",
            title:"ADVISER'S MESSAGE",
            descriptions: ["We, being backed up by a number of specialist teaching staff and excellent facilities and resources, offer a wide range of courses in the college. Ours is a non-profitable organization established by the MNRS TRUST. Now, it is run by a Board of Governors approved by the Board of Intermediate & Secondary Education, Dhaka under the Ministry of Education, Government of the People’s Republic of Bangladesh. The institution, growing from a Kindergarten to a Junior School and then to a Secondary School, has now emerged as a leading College of Bangladesh. Since inception, the institute has been enjoying a proud record of academic excellence and innovations. Over the years, it has generated a significant number of employments of qualified academicians, administrators and a set of dynamic staff."]
        }
    ]
    return (
    <div className="flex flex-col gap-4">
        {data.map((item, index) => <ManagementCard key={`management-${index}`} {...item} />)}
    </div>
  )
}

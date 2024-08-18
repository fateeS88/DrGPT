import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const features = [
    {icon: <HiOutlineMagnifyingGlass />, title: "Instant Knowledge", description: "Benefit from fast and precise answers to complex medical questions, enabling better informed decision-making."},
    {icon: <HiOutlineLightBulb />, title: "Current Insights", description: "Access tailored suggestions grounded in the latest clinical guidelines and research developments."},
    {icon: <HiOutlineHandThumbUp />, title: "User Friendly", description: "Engage with a user-friendly interface crafted specifically for the needs of busy medical practitioners."}
]

export default function Features () {
    return (
        <div className="features">
            <h3> Key Features </h3>
            {features.map((feature, index) => (
                <div  key={index} className="feature-item"> 
                 <div className="feature-icon">
                        {feature.icon}
                    </div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    )
}
    
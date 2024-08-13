const features = [
    {title: "Instant Knowledge", description: "Benefit from fast and precise answers to intricate medical questions, enabling more informed decision-making."},
    {title: "Current Insights", description: "Access tailored suggestions grounded in the latest clinical guidelines and research developments."},
    {title: "User Friendly", description: "Engage with a user-friendly interface crafted specifically for the needs of busy medical practitioners."}
]

export default function Features () {
    return (
        <div>
            <h2> Key Features </h2>
            {features.map((feature, index) => (
                <div  key={index}> 
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    )
}
    
const works = [
    { title: "Seamless Access", description: "Create an account or sign in to unlock all available features and functionalities." },
    { title: "Engage with the AI", description: "Ask any question, regardless of complexity, to receive comprehensive and insightful responses." },
    { title: "Personalized Medical Guidance", description: "Get tailored suggestions based on symptoms and health history." }
]


export default function How () {
    return (
        <div className="How">
            <h3> How it Works </h3>
            {works.map((works, index) => (
                <div  key={index}> 
                    <h4>{works.title}</h4>
                    <p>{works.description}</p>
                </div>
            ))}
        </div>
    )
}
    
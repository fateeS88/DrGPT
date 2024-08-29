const works = [
    { title: "Seamless Access", description: "Create an account or sign in to unlock all available features and functionalities." },
    { title: "Engage with the AI", description: "Ask any question, regardless of complexity, to receive comprehensive and insightful responses." },
    { title: "Personalized Medical Guidance", description: "Get tailored suggestions based on symptoms and health history." }
]


export default function How () {
    return (
        <div className="how">
            <h3> How it Works </h3>
            <div className="how-grid">
            {works.map((work, index) => (
                <div  key={index} className="how-item"> 
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
    
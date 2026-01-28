import Technology from "@/components/technology"

const technologies = [
    {
        title: "JavaScript & TypeScript",
        techs: [
            "Express",
            "Next JS",
            "React",
        ]
    },
    {
        title: "PHP",
        techs: [
            "Laravel",
        ]
    },
    {
        title: "Base de datos",
        techs: [
            "MySQL",
            "PostgreSQL",
        ]
    },
    {
        title: "Otros lenguajes",
        techs: [
            "Python",
            "Tailwind CSS",
            "C",
            "C#",
            "C++",
            "HTML",
            "JS",
            "CSS",
        ]
    },
]


export default function Home({ }) {
    return (
        <div className="flex flex-col space-y-8">
            <div className="title text-center">Tecnologías</div>
            <div className="grid grid-cols-1 space-y-6">
                {
                    technologies.map((technology, index) => (
                        <div className="flex flex-col space-y-2 text-center" key={index}>
                            <div className="text-2xl">
                                {technology.title}
                            </div>
                            <div className="grid grid-cols-1 space-y-4 space-x-0 sitems-center place-items-center">
                                {
                                    technology.techs.map((tech, index) => (
                                        <Technology name={tech} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
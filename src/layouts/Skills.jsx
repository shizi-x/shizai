import { useState } from "react";

function Skills() {
    const buttons = ["Languages", "Frameworks/Libraries", "Data", "DevOPS", "Cybersecurity"];

    const langs = [
        { id: "cpp", name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { id: "c", name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { id: "python", name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { id: "java", name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { id: "js", name: "Javascript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { id: "ts", name: "Typescript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { id: "php", name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ];

    const frameworks = [
        { id: "tailwind", name: "Tailwindcss", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { id: "react", name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id: "angular", name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { id: "node", name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id: "nest", name: "Nest.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { id: "spring", name: "Springboot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { id: "django", name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { id: "tensor", name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { id: "pytorch", name: "Pytorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { id: "pandas", name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { id: "numpy", name: "Numpy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { id: "qt", name: "QT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" },
        { id: "gtk", name: "GTK", src: "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg" },
    ];

    const datas = [
        { id: "mysql", name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { id: "postgres", name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { id: "mongo", name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { id: "oracle", name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
        { id: "maria", name: "MariaDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
    ];

    const ops = [
        { id: "git", name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { id: "docker", name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { id: "kube", name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { id: "jenk", name: "Jenkins", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { id: "nginx", name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
        { id: "aws", name: "AWS", src: "https://cdn.iconscout.com/icon/free/png-256/free-amazon-aws-icon-svg-download-png-2944772.png?f=webp" },
        { id: "azure", name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    ];

    const sec = [
        { id: "pentest", name: "Pentesting", src: "" },
        { id: "adds", name: "Administration", src: "" },
        { id: "bugbounty", name: "Bug Bounty", src: "" },
        { id: "malware", name: "Malware Expertise", src: "" },
        { id: "reverse", name: "Reverse Engineering", src: "" },
        { id: "coderv", name: "Code Review", src: "" },
        { id: "blue", name: "Defense Security", src: ""},
        { id: "crypto", name: "Cryptography", src: "" },
    ];

    const [currentSkills, setCurrentSkills] = useState(frameworks);

    const handleChangeSkills = (category) => {
        switch(category) {
            case "languages": setCurrentSkills(langs); break;
            case "frameworks/libraries": setCurrentSkills(frameworks); break;
            case "data": setCurrentSkills(datas); break;
            case "devops": setCurrentSkills(ops); break;
            case "cybersecurity": setCurrentSkills(sec); break;
            default: setCurrentSkills(frameworks);
        }
    };

    return (
        <div className="h-screen">
            <h1 className="text-center mx-auto items-center justify-center flex-wrap flex m-10 text-6xl text-white/95 font-bold">Technical Skills</h1>

            <div className="lg:w-fit  bg-white/10 lg:mb-10 rounded-xl flex lg:gap-1 lg:p-2 items-center flex-wrap mx-auto justify-center">
                {buttons.map(btn => (
                    <button
                        key={btn}
                        className="p-2 pt-1 pb-1 text-black rounded-xl bg-transparent focus:text-black/80 focus:bg-blue-300/80"
                        onClick={() => handleChangeSkills(btn.toLowerCase().replace(/\s/g, ""))}
                    >
                        {btn}
                    </button>
                ))}
            </div>

            <div className="flex xs:text-xs flex-wrap w-4/5 items-center justify-center bg-white/10 rounded-xl mx-auto p-2 gap-3" id="skills">
                {currentSkills.map(skill => (
                    <div key={skill.id} className="flex items-center gap-2 p-2 text-white/80 bg-black/40 rounded-xl border border-transparent hover:border-white/15 hover:bg-black/20">
                        {skill.src ? <img className="size-10 xs:size-5" alt={`${skill.name} Logo`} src={skill.src} /> : null}
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;

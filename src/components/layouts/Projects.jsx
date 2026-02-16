function Projects() {
    const pros = [
        { id: "aiza", name: "Aiza", depl: "", hub: "", src:"" },
        { id: "stockeo", name: "Stockeo", depl: "", hub: "", src:"" },
        { id: "vido", name: "Vido", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
        { id: "", name: "", depl: "", hub: "", src:"" },
    ];
    const recentPro = pros.slice(0, 3);
    return (
        <div className="h-screen">
                <div className="m-10">
                    <h1 className="text-6xl text-center text-white/95 font-bold">Featured Projects</h1>
                    <div className="flex flex-wrap gap-5 mt-20 items-center justify-center">
                    {recentPro.map((pro) => {
                        return (
                            <div className="container bg-black size-100 rounded-xl ">
                                <img src={pro.src} alt={pro.id} />
                                <h3 className="text-2xl pl-4 pt-2 text-center text-white/80 font-semibold">{pro.name}</h3>
                            </div>
                        );
                    })};
                    </div>
                </div>
        </div>
    )
}
export default Projects;
const Categoria = ()=>{

   
    const [nomeCategoria, setNomeCategoria] = useState("")
    const [descricaoCategoria, setDescricaoCategoria] = useState("")
    const [idCount, setIdCount] = useState(0)
    const [editando, setEditando] = useState({ edit: false, id: null })
    const { tasks } = useAxiosGet('/categorias')
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        if (!tasks) return
        setCategorias(tasks)
        setIdCount(tasks.length)
    }, [tasks])

    return(
        <h1></h1>
    );
}
export default Categoria;
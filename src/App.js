import { useState, useEffect } from 'react'
import './App.css';
import Card from './Componentes/Card';
import CadastrarProdutos from './Componentes/CadastrarProduto';
import api from './Componentes/service/api';
import useAxiosGet from './Componentes/hooks/useAxiosGet';

function App() {
  const [nomeProduto, setNomeProduto] = useState("")
  const [custo, setCusto] = useState("")
  const [precoUnitario, setPrecoUnitario] = useState("")
  const [descricaoProduto, setDescricaoProduto] = useState("")
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("")
  const [categoria, setCategoria] = useState({idCategoria: ""})

  const [idCount, setIdCount] = useState(0)
  const [editando, setEditando] = useState({edit: false, id: null})
  const { tasks } = useAxiosGet('/tasks')
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    if(!tasks) return
    setProdutos(tasks)
    setIdCount(tasks.length)
  }, [tasks])

  const adicionarProduto = async() => {
    if(nomeProduto === "" || custo === "" || precoUnitario === "" ||
    descricaoProduto === "" || quantidadeEstoque === "" || categoria === null) return
    
    const novoProduto = {
     
      id: idCount + 1,
      nomeProduto: nomeProduto,
      custo: custo,
      precoUnitario: precoUnitario,
      descricaoProduto: descricaoProduto,
      quantidadeEstoque: quantidadeEstoque,
      categoria: categoria

    }
    
    const { data } = await api.post('/tasks', novoProduto)

    setProdutos([
      ...produtos,
      data
    ])

    setIdCount(idCount + 1)
    setNomeProduto("")
    setCusto("")
    setPrecoUnitario("")
    setDescricaoProduto("")
    setQuantidadeEstoque("")
    setCategoria({idCategoria:""})


    /*setImportancia("2")
    setDescricao("")*/
  }

  const editarProduto = (produto) => {
    setEditando({edit: true, id: produto.id})
    setNomeProduto(produto.nomeProduto)
    setCusto(produto.custo)
    setPrecoUnitario(produto.precoUnitario)
    setDescricaoProduto(produto.descricaoProduto)
    setQuantidadeEstoque(produto.quantidadeEstoque)
    setCategoria(produto.categoria)
  }

  const excluirProduto = async (id) => {
    const { data: produtoExcluido } = await api.delete(`/tasks/${id}`)
    const produtosFiltrados = produtos.filter( produto => produto.id !== produtoExcluido.id)
    setProdutos(produtosFiltrados);
  }

  const cancelar = () => {
    setEditando({edit: false, id: null})
    setNomeProduto("")
    setCusto("")
    setPrecoUnitario("")
    setDescricaoProduto("")
    setQuantidadeEstoque("")
    setCategoria({idCategoria:""})
  }

  const salvar = async() => {
    const produtoEditado = {
      nomeProduto: nomeProduto,
      custo: custo,
      precoUnitario: precoUnitario,
      descricaoProduto: descricaoProduto,
      quantidadeEstoque: quantidadeEstoque,
      categoria: categoria
    }

    const { data } = await api.put(`/tasks/${editando.id}`, produtoEditado)

    const produtoseditados = produtos.map( produto => {
      if(produto.id === data.id) {
        return {
          id: produto.id,
          ...produtoEditado
        }
      }
      return produto
    })

    setProdutos(produtoseditados)
    setEditando({edit: false, id: null})
    setNomeProduto("")
    setCusto("")
    setPrecoUnitario("")
    setDescricaoProduto("")
    setQuantidadeEstoque("")
    setCategoria({idCategoria:""})
  }

  

  return (
    <div className="container">
      <h1 className='text-center'>CADASTRO DE PRODUTOS</h1>

      {/* passar a função adicionar ao inves de passar props por pros??? */}
      
      <CadastrarProdutos editar = {editarProduto} adicionar = {adicionarProduto} salvar = {salvar} cancelar = {cancelar} nome = {nomeProduto} setNome = {setNomeProduto} custo = {custo} setCusto = {setCusto}
       preco = {precoUnitario} setPreco = {setPrecoUnitario} descricao = {descricaoProduto} setDescricao = {setDescricaoProduto}
      quantidade = {quantidadeEstoque} setQuantidade = {setQuantidadeEstoque} categoria = {categoria} setCategoria = {setCategoria}/>
      

      { produtos.map((produto) => <Card key={produto.id} produto={produto} editarProduto={editarProduto} excluirProduto={excluirProduto}/>) }




    </div>
  );
  }

export default App;

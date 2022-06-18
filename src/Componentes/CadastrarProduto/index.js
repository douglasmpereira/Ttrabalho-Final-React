import { FaPlus } from "react-icons/fa";

const CadastrarProdutos = ({ nome, setNome, custo, setCusto, preco, setPreco, descricao, setDescricao, quantidade, setQuantidade, categoria, setCategoria}) => {

    return(
        <div className="container">

            <form className="row g-3 mt-2">
                <div className="col-md-4">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Ex: Iphone X" value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Categoria</label>
                    <input type="text" className="form-control" placeholder="Ex: Celulares" value={categoria} onChange={e => setCategoria(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Descrição</label>
                    <input type="text" className="form-control" placeholder="Ex: 126GB" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Custo</label>
                    <input type="number" className="form-control" placeholder="Ex: 3000" value={custo} onChange={e => setCusto(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Preço Unitário</label>
                    <input type="number" className="form-control" placeholder="Ex: 6000" value={preco} onChange={e => setPreco(e.target.value)}/>
                </div>

                <div className="col-md-4">
                    <label className="form-label">Quantidade Estoque</label>
                    <input type="number" className="form-control" placeholder="Ex: 25" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                </div>

                <div className="col-12 mt-4 mb-4">
                    <button type="button" className="btn btn-outline-success" >
                        <div className='d-flex align-items-center'>Adicionar</div>
                    </button>
                </div>

                {/* <div className="col-12 mb-4">    
          { editar.editando.edit ?
            <>
              <button type="button" className="btn btn-outline-warning me-2" onClick={cancelar}>Cancelar</button>
              <button type="button" className="btn btn-outline-success" onClick={salvar}>Salvar</button>
            </>
            :
            <button type="button" className="btn btn-outline-primary" onClick={adicionar}>
              <div className='d-flex align-items-center'>
                <FaPlus className='me-2'/> 
                Adicionar
              </div>
            </button>
          }
        </div> */}
              

            </form>
        </div>
    );
}

export default CadastrarProdutos;
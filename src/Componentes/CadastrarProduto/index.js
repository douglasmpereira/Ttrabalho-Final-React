
const CadastrarProdutos = ({ nome, setNome, custo, setCusto, preco, setPreco, descricao, setDescricao, quantidade, setQuantidade,
    categoria, setCategoria, adicionarProduto, editando, edit, cancelar, salvar }) => {

    return (
        <div className="container">

            <form className="row g-3 mt-2">
                <div className="col-md-4">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Ex: Iphone X" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Categoria</label>
                    <input type="text" className="form-control" placeholder="Ex: Celulares" value={categoria.nomeCategoria} onChange={e => setCategoria({ "nomeCategoria": e.target.value })} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Descrição</label>
                    <input type="text" className="form-control" placeholder="Ex: 126GB" value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Custo</label>
                    <input type="number" className="form-control" placeholder="Ex: 3000" value={custo} onChange={e => setCusto(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Preço Unitário</label>
                    <input type="number" className="form-control" placeholder="Ex: 6000" value={preco} onChange={e => setPreco(e.target.value)} />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Quantidade Estoque</label>
                    <input type="number" className="form-control" placeholder="Ex: 25" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                </div>

                {editando.edit ?
                    <div className="col-12 mt-4 mb-4">
                        <button type="button" className="btn btn-danger me-2" onClick={cancelar}>Cancelar</button>
                        <button type="button" className="btn btn-success" onClick={salvar}>Salvar</button>
                    </div>
                    :
                    <div className="col-12 mt-4 mb-4">
                        <button type="button" className="btn btn-success" onClick={adicionarProduto}  >
                            <div className='d-flex align-items-center'>Adicionar</div>
                        </button>
                    </div>
                }

            </form>
        </div>
    );
}

export default CadastrarProdutos;
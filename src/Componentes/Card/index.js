const Card = ({ produto, editarProduto, excluirProduto }) => {

    return (
        <div className="container">

            <div className="card col-12 mb-2 mt-4" >
                <div className="card-header d-flex align-items-center">

                    <div className="card col-12 mb-2 ">
                        <div className="card-header d-flex align-items-center mt-2">

                            <p>{produto.id} - {produto.nomeProduto}</p>
                        </div>

                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Categoria</th>
                                            <th>Descrição</th>
                                            <th>Custo</th>
                                            <th>Preço Unitário</th>
                                            <th>Quantidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/* como pega a desgraça da categoria?? */}
                                            <td>{produto.idCategoria}{ }</td>
                                            <td>{produto.descricaoProduto}</td>
                                            <td>{produto.custo}</td>
                                            <td>{produto.precoUnitario}</td>
                                            <td>{produto.quantidadeEstoque}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-primary" onClick={() => editarProduto(produto)}>
                                    <div className='d-flex align-items-center'>Editar</div>
                                </button>
                                <button className="btn btn-sm btn-danger ms-1" onClick={() => excluirProduto(produto.id)}>
                                    <div className='d-flex align-items-center'>Excluir</div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;
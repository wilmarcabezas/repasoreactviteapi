import { useEffect, useState } from 'react';

export function Productos() {

    const [products, setProducts] = useState([]);
    const [productobuscado, setProductoBuscado] = useState('')

    useEffect(() => {
        fetch('https://demoproyectobackendvercel.vercel.app/products/' + productobuscado)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [productobuscado]);


    const textoBuscador = (teclado) => {
        setProductoBuscado(teclado.target.value);
    }

    return (
        <>
            <h1>Productos</h1>
            <h2>
                Buscador:
                <input type="text" name="txtbuscar" id="txtbuscar" onChange={textoBuscador} />
            </h2>
            <h2>Lista de Productos</h2>
            {
                products.map(productoIndividual => (
                    <div key={productoIndividual.id}>
                        <img src={productoIndividual.imagen} style={{ width: '100px' }} />
                        {productoIndividual.nombre} $ {productoIndividual.precio}
                        <br />
                        Color: {productoIndividual.color}
                        <br />
                        Descripcion: {productoIndividual.descripcion}

                    </div>
                ))
            }
        </>
    )
}
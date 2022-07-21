import React from 'react';

const ProductRow = ({ product }) => {
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;

///Первое прохождение
//////нажали на кнопку Show
// ----constructor,
// ----render(),
// ----componentDidMount;

//Второе прохождение
/////После нажатия кнопки 'Update'
// ----shouldComponentUpdate();
// ----render();
// ----componentDidUpdate()

// После нажатия кнопки 'Hide'
// ----componentWillUnmount()

import React from 'react';
import styled from 'styled-components';

const ProductList = ({ products }) => {
  return (
    <ListContainer>
      {products.length === 0 ? (
        <NoProducts>No products found</NoProducts>
      ) : (
        products.map((product, index) => (
          <Product key={index}>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </Product>
        ))
      )}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoProducts = styled.div`
  color: #666;
  font-size: 18px;
`;

const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductName = styled.div`
  font-size: 16px;
  color: #333;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  color: #007bff;
`;

export default ProductList;

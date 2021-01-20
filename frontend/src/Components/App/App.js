import React, { useState, useEffect } from 'react';
import AppStyled from './App.styled';
import { Header } from '../Header';
import { Heading } from '../Typo/Heading';
import { ProductList } from '../ProductList';
import { Wrapper } from '../Wrapper';
import { SearchBar } from '../SearchBar';

export const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:8000/products/')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    fetchData();
  }, []);

  return (
    <AppStyled>
      <Header />
      <Wrapper>
        <SearchBar></SearchBar>
        <Heading tag="h3">Products</Heading>
        <ProductList products={products}></ProductList>
      </Wrapper>
    </AppStyled>
  );
};

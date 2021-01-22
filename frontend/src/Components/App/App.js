import React, { useState, useEffect } from 'react';
import AppStyled from './App.styled';
import { Header } from '../Header';
import { Heading } from '../Typo/Heading';
import { ProductList } from '../ProductList';
import { Wrapper } from '../Wrapper';
import { fetchData } from '../../services/product.js';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchData().then((items) => {
      setProducts(items);
      setFilteredProducts(items);
    });
  }, []);

  useEffect(() => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  }, [search, products]);

  return (
    <AppStyled>
      <Header handleChange={handleChange} />
      <Wrapper center>
        <Heading tag="h3">Our Products</Heading>
        <ProductList products={filteredProducts}></ProductList>
      </Wrapper>
    </AppStyled>
  );
};

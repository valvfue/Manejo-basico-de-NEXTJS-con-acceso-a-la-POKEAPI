'use client';

import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const id = Math.floor(Math.random() * 1000) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon({
        name: data.name,
        id: data.id,
        image: data.sprites.other['official-artwork'].front_default,
      });
    };
    fetchPokemon();
  }, []);

  return (
    <div className="container">
      <h1>Bienvenido a mi página multilingüe</h1>
      <p>Esta es una página que se puede traducir al español, inglés y francés</p>
      {pokemon && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pokemon.image} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>Número: {pokemon.id}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Home;


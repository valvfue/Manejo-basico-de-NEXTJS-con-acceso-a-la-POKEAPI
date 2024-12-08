'use client';

import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PokemonModal from '../../components/PokemonModal';

const Gen2 = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const requests = Array.from({ length: 10 }, () =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100) + 152}`).then((res) => res.json())
      );
      const results = await Promise.all(requests);
      setPokemons(
        results.map((p) => ({
          id: p.id,
          name: p.name,
          image: p.sprites.other['official-artwork'].front_default,
        }))
      );
    };
    fetchPokemons();
  }, []);

  return (
    <div className="container">
      <h1>Pokémon de la Generación 2</h1>
      <div className="d-flex flex-wrap">
        {pokemons.map((p) => (
          <Card key={p.id} style={{ width: '18rem', margin: '1rem' }}>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>{p.name}</Card.Title>
              <Card.Text>#{p.id}</Card.Text>
              <Button onClick={() => setSelectedPokemon(p.id)}>¿Saber más?</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedPokemon && (
        <PokemonModal id={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </div>
  );
};

export default Gen2;

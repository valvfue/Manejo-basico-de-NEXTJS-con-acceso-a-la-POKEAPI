'use client';

import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  

const PokemonModal = ({ id, onClose }) => {
  const [pokemon, setPokemon] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon({
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        stats: data.stats.map((stat) => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      });
    };
    fetchDetails();
  }, [id]);

  if (!pokemon) return null;

  const handleClose = () => {
    onClose();
    router.push('/');
  };

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pokemon.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={pokemon.image} alt={pokemon.name} className="img-fluid" />
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.name}>
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PokemonModal;


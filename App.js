import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
//aula do dia 21/03
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jogadores: [
        { id: '1', nome: 'Erling Haaland', posicao: 'Atacante' },
        { id: '2', nome: 'Kylian Mbappé', posicao: 'Atacante' },
        { id: '3', nome: 'Vinicius Jr.', posicao: 'Atacante' },
        { id: '4', nome: 'Lionel Messi', posicao: 'Meia' },
        { id: '5', nome: 'Kevin De Bruyne', posicao: 'Meia' },
        { id: '6', nome: 'Cristiano Ronaldo', posicao: 'Atacante' },
      ],
    };
  }

  render() {
    return (
     //Foto do bruxo
     <View style={styles.container}>
        <Text style={styles.titulo}>Jogadores</Text>
        <Image
  source={{
    uri: 'https://campeonatobrasileiro.com.br/storage/cache/storage/conteudos/conteudos/20241124212615_brasileiros-na-champions-league-quem-sao-os-destaques-2024-11-24t212049937-933x622.jpg',
  }}
  style={{ width: 300, height: 300, margin: 20, borderRadius: 10 }}
        />
        <Text style={styles.descricao}>
        Ronaldo de Assis Moreira ou Ronaldinho Gaucho, é um ex-futebolista brasileiro que atuava como meio-campista ou ponta-esquerda, amplamente reconhecido como um dos mais talentosos da história. Atualmente é embaixador da cidade de Miami para a Copa do Mundo de 2026.
          </Text>
        <FlatList
          data={this.state.jogadores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Jogador data={item} />}
        />
      </View>
    );
  }
}
//Lembrar de perguntar como colocar a imagem dentro do espaço
class Jogador extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imagemPlaceholder} />
        <View style={styles.infoContainer}>
          <Text style={styles.nome}>{this.props.data.nome}</Text>
          <Text style={styles.posicao}>{this.props.data.posicao}</Text>
        </View>
      </View>
    );
  }
}
//cards
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 2, 
    borderColor: '#000', 
  },
  imagemPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  posicao: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
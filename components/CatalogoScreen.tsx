import React, { useCallback } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

// Tipagem
interface ItemCatalogo {
  id: number;
  titulo: string;
  artista: string;
  ano: number;
  genero: string;
}

// Dataset com as NOVAS músicas solicitadas
const catalogoData: ItemCatalogo[] = [
  { 
    id: 1, 
    titulo: "Vale a Pena Ouvir de Novo", 
    artista: "Thiagão", 
    ano: 2017, 
    genero: "Rap Nacional" 
  },
  { 
    id: 2, 
    titulo: "You Will See", 
    artista: "Quarterhead & SESA", 
    ano: 2023, 
    genero: "Dance/Eletrônica" 
  },
  { 
    id: 3, 
    titulo: "Piscina de Diamantes", 
    artista: "MC Kevin", 
    ano: 2021, 
    genero: "Funk Paulista" 
  },
  { 
    id: 4, 
    titulo: "Refém da Amnésia", 
    artista: "Realidade Cruel", 
    ano: 2004, 
    genero: "Rap Gangsta" 
  },
  { 
    id: 5, 
    titulo: "That's My Way", 
    artista: "Seu Jorge & Leon Mobley", 
    ano: 2007, 
    genero: "Samba Soul/Funk" 
  },
  { 
    id: 6, 
    titulo: "Súplica", 
    artista: "Duzz", 
    ano: 2018, 
    genero: "Trap" 
  },
];

// Card simples em linha para as músicas
const CardItem = React.memo(({ item }: { item: ItemCatalogo }) => (
  // O estilo do card é mais arredondado e flutuante, como na imagem.
  <TouchableOpacity activeOpacity={0.9} style={styles.card}>
    <View style={styles.cardHeader}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
    </View>
    <View style={styles.cardBody}>
        <Text style={styles.cardArtista}>
            {item.artista} ({item.ano})
        </Text>
        <Text style={styles.cardGenero}>Gênero: {item.genero}</Text>
    </View>
  </TouchableOpacity>
));

export default function CatalogoMusicasScreen() {
  const renderItem = useCallback(({ item }: { item: ItemCatalogo }) => (
    <CardItem item={item} />
  ), []);

  // Usei uma URL de imagem de fundo abstrata, escura e com luzes, para combinar com o tema magenta.
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1579546929929-c70ff502094c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#101010" /> 
      
      <ImageBackground 
        source={{ uri: backgroundImageUrl }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} /> {/* Overlay para escurecer a imagem e melhorar a leitura */}
        
        {/* Conteúdo Principal */}
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.tituloPrincipal}>Playlist de Clássicos</Text>
              <Text style={styles.subtituloHeader}>As faixas que marcaram a história</Text>
            </View>

            <FlatList
              data={catalogoData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.flatListContent}
              showsVerticalScrollIndicator={false}
              style={styles.flatList} 
            />

            {/* Rodapé */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Feito com estilo e ritmo</Text>
            </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos com tema roxo/magenta
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.75)', // Overlay um pouco mais escuro para o tema roxo
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  // Cor principal do tema (magenta vibrante)
  
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff00cc', // Título em Magenta
    textAlign: 'center',
    textShadowColor: 'rgba(255, 0, 204, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    marginBottom: 5,
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  flatList: {
    paddingHorizontal: 15, 
  },
  flatListContent: {
    paddingBottom: 20,
  },
  // Estilo do Card flutuante
  card: {
    backgroundColor: 'rgba(30, 0, 30, 0.8)', // Fundo escuro levemente roxo
    borderRadius: 15, 
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 204, 0.4)', // Borda magenta sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  cardHeader: {
    backgroundColor: 'rgba(255, 0, 204, 0.15)', // Faixa superior com transparência magenta
    padding: 12,
  },
  cardBody: {
    padding: 12,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff66ff', // Tom de rosa mais claro para contraste
    textTransform: 'uppercase',
  },
  cardArtista: {
    fontSize: 14,
    color: '#F0F0F0', 
    marginBottom: 4,
  },
  cardGenero: {
    fontSize: 13,
    color: '#B0B0B0', 
    fontStyle: 'italic',
  },
  footer: {
      paddingVertical: 15,
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: 'rgba(255, 0, 204, 0.2)',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  footerText: {
    fontSize: 14,
    color: '#ff00cc', 
    fontWeight: 'bold',
  },
});
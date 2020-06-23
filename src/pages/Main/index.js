import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getRealm from '~/services/realm';
import Contact from '~/components/Contact';
import {DataNavigation} from 'react-data-navigation';

import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  List,
  TouchableOpacity,
} from './styles';

export default function Main(props) {
  const [input, setInput] = useState('');
  const [contacts, setContacts] = useState([]);

  //Carrega os elementos do banco de dados dado o input de texto.
  useEffect(() => {
    async function loadContacts() {
      const realm = await getRealm();
      let queryInput = '%' + input + '%';
      const data = realm
        .objects('Contact')
        .filtered('name BEGINSWITH[c] $0 OR lastname BEGINSWITH[c] $0', input)
        .sorted('name', false);
      setContacts(data);
    }
    loadContacts();
  }, [input]);
  return (
    //Renderização da interface com navegação.
    <Container>
      <Title>Contatos</Title>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar contato..."
        />
        <Submit onPress={() => props.navigation.navigate('NewContact')}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={contacts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            onPressIn={() => {
              //Armazena o id clicado para ser acessado por UpdateContact.
              DataNavigation.setData(1, item.id);
            }}
            onPress={() => props.navigation.navigate('UpdateContact')}>
            <Contact data={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}

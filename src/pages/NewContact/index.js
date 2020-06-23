import React, {useState} from 'react';
import getRealm from '~/services/realm';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ButtonText,
  TouchableOpacity,
} from '~/pages/NewContact/styles';

export default function NewContact(props) {
  //Variáveis atualizadas a medida que o estado do input muda.
  const [inputName, setInputName] = useState('');
  const [inputLast, setInputLast] = useState('');
  const [inputPosition, setInputPosition] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputNicknames, setInputNicknames] = useState('');
  const [inputNumP, setInputNumpP] = useState('');
  const [inputNumC, setInputNumC] = useState('');
  const [inputBirthday, setInputBirthday] = useState('');
  const [inputEmailP, setInputEmailP] = useState('');
  const [inputEmailC, setInputEmailC] = useState('');
  const [inputAddressP, setinputAddressP] = useState('');
  const [inputAddressC, setinputAddressC] = useState('');
  const [inputObs, setInputObs] = useState('');
  const [error, setError] = useState(false);

  function handleNewContact() {
    //Por causa da interface Main, não é ideal que deixemos o usuário não colocar os 4 primeiros campos.
    if (
      inputName != '' &&
      inputLast != '' &&
      inputCompany != '' &&
      inputPosition != ''
    ) {
      try {
        saveContact();
        props.navigation.navigate('Home');
        setError(false);
      } catch (err) {
        console.tron.warn('Error');
      }
    } else {
      setError(true);
    }
  }

  async function saveContact() {
    const data = {
      id: Math.random() * 1000000,
      name: inputName,
      lastname: inputLast,
      position: inputPosition,
      company: inputCompany,
      nicknames: inputNicknames,
      personalnumber: inputNumP,
      worknumber: inputNumC,
      personalemail: inputEmailP,
      workemail: inputEmailC,
      homeaddress: inputAddressP,
      workaddress: inputAddressC,
      birthday: inputBirthday,
      observations: inputObs,
    };
    //Conexão ao banco de dados.
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Contact', data);
    });
  }

  return (
    //Renderização da interface.
    <Container>
      <Title>Novo Contato</Title>
      <Form>
        <Input
          value={inputName}
          error={error}
          onChangeText={setInputName}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome"
        />
        <Input
          value={inputLast}
          error={error}
          onChangeText={setInputLast}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sobrenome"
        />
      </Form>
      <Form>
        <Input
          value={inputPosition}
          error={error}
          onChangeText={setInputPosition}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Cargo"
        />
        <Input
          value={inputCompany}
          error={error}
          onChangeText={setInputCompany}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Empresa"
        />
      </Form>
      <Form>
        <Input
          value={inputNicknames}
          onChangeText={setInputNicknames}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Apelido"
        />
      </Form>
      <Form>
        <Input
          value={inputNumP}
          onChangeText={setInputNumpP}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Número Pessoal"
        />
        <Input
          value={inputNumC}
          onChangeText={setInputNumC}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Número Comercial"
        />
      </Form>
      <Form>
        <Input
          value={inputEmailP}
          onChangeText={setInputEmailP}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Pessoal"
        />
      </Form>
      <Form>
        <Input
          value={inputEmailC}
          onChangeText={setInputEmailC}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Comercial"
        />
      </Form>
      <Form>
        <Input
          value={inputBirthday}
          onChangeText={setInputBirthday}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Aniversário"
        />
      </Form>
      <Form>
        <Input
          value={inputAddressP}
          onChangeText={setinputAddressP}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Endereço Pessoal"
        />
      </Form>
      <Form>
        <Input
          value={inputAddressC}
          onChangeText={setinputAddressC}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Endereço Comercial"
        />
      </Form>
      <Form>
        <Input
          value={inputObs}
          onChangeText={setInputObs}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Observações"
        />
      </Form>
      <Button>
        <TouchableOpacity onPress={handleNewContact}>
          <ButtonText>Salvar</ButtonText>
        </TouchableOpacity>
      </Button>
    </Container>
  );
}

import React, {useEffect, useState} from 'react';
import getRealm from '~/services/realm';
import {DataNavigation} from 'react-data-navigation';
import {
  Container,
  Title,
  Form,
  Input,
  Button,
  ButtonSaveText,
  ButtonDeleteText,
  TouchableOpacity,
} from '~/pages/UpdateContact/styles';

export default function UpdateContact(props) {
  //Pega o id do contato associado ao elemento clicado, enviado em Main pela mesma função.
  const contactId = DataNavigation.getData(1);

  //Variáveis alteradas a medida que o input muda. Valores iniciais do contato clicado. Como uma "edição".
  let [contacts, setContacts] = useState([]);
  let [inputName, setInputName] = useState(contacts.name);
  let [inputLast, setInputLast] = useState(contacts.lastname);
  let [inputPosition, setInputPosition] = useState(contacts.position);
  let [inputCompany, setInputCompany] = useState(contacts.company);
  let [inputNicknames, setInputNicknames] = useState(contacts.nickname);
  let [inputNumP, setInputNumpP] = useState(contacts.personalnumber);
  let [inputNumC, setInputNumC] = useState(contacts.worknumber);
  let [inputEmailP, setInputEmailP] = useState(contacts.personalemail);
  let [inputEmailC, setInputEmailC] = useState(contacts.workemail);
  let [inputBirthday, setInputBirthday] = useState(contacts.birthday);
  let [inputAddressP, setinputAddressP] = useState(contacts.homeaddress);
  let [inputAddressC, setinputAddressC] = useState(contacts.workaddress);
  let [inputObs, setInputObs] = useState(contacts.observations);
  const [error, setError] = useState(false);

  //Variáveis necessárias para avaliar a condição de dado preenchido em cada input.
  let placeholderName = contacts.name;
  let placeholderLastname = contacts.lastname;
  let placeholderPosition = contacts.position;
  let placeholderCompany = contacts.company;
  let placeholderNicknames = contacts.nicknames;
  let placeholderNumP = contacts.personalnumber;
  let placeholderNumC = contacts.worknumber;
  let placeholderEmailP = contacts.personalemail;
  let placeholderEmailC = contacts.workemail;
  let placeholderBirthday = contacts.birthday;
  let placeholderAddressP = contacts.homeaddress;
  let placeholderAddressC = contacts.workaddress;
  let placeholderObs = contacts.observations;

  function handleUpdateContact() {
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

  useEffect(() => {
    async function loadContacts() {
      const realm = await getRealm();
      const data = realm.objectForPrimaryKey('Contact', contactId);
      setContacts(data);
    }

    loadContacts();
  }, []);

  async function saveContact() {
    const data = {
      id: contacts.id,
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
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Contact', data, true);
    });
  }

  async function deleteContact() {
    const realm = await getRealm();
    realm.write(() => {
      let deletingContact = realm.objectForPrimaryKey('Contact', contactId);
      realm.delete(deletingContact);
    });
  }

  function handleDeleteContact() {
    try {
      deleteContact();
      props.navigation.navigate('Home');
      setError(false);
    } catch (err) {
      setError(true);
      console.tron.warn('Error');
    }
  }
  return (
    //Nas condições, placeholder é avaliado e o campo é iniciado com o valor salvo no BD se tiver.
    <Container>
      <Title>Editar Contato</Title>
      <Form>
        <Input
          value={inputName}
          error={error}
          onChangeText={setInputName}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderName == ''
            ? {placeholder: 'Nome'}
            : {defaultValue: placeholderName})}
        />
        <Input
          value={inputLast}
          error={error}
          onChangeText={setInputLast}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderLastname == ''
            ? {placeholder: 'Sobrenome'}
            : {defaultValue: placeholderLastname})}
        />
      </Form>
      <Form>
        <Input
          value={inputPosition}
          error={error}
          onChangeText={setInputPosition}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderPosition == ''
            ? {placeholder: 'Cargo'}
            : {defaultValue: placeholderPosition})}
        />
        <Input
          value={inputCompany}
          error={error}
          onChangeText={setInputCompany}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderCompany == ''
            ? {placeholder: 'Empresa'}
            : {defaultValue: placeholderCompany})}
        />
      </Form>
      <Form>
        <Input
          value={inputNicknames}
          onChangeText={setInputNicknames}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderNicknames == ''
            ? {placeholder: 'Apelido'}
            : {defaultValue: placeholderNicknames})}
        />
      </Form>
      <Form>
        <Input
          value={inputNumP}
          onChangeText={setInputNumpP}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderNumP == ''
            ? {placeholder: 'Número Pessoal'}
            : {defaultValue: placeholderNumP})}
        />
        <Input
          value={inputNumC}
          onChangeText={setInputNumC}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderNumC == ''
            ? {placeholder: 'Número Comercial'}
            : {defaultValue: placeholderNumC})}
        />
      </Form>
      <Form>
        <Input
          value={inputEmailP}
          onChangeText={setInputEmailP}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderEmailP == ''
            ? {placeholder: 'Email Pessoal'}
            : {defaultValue: placeholderEmailP})}
        />
      </Form>
      <Form>
        <Input
          value={inputEmailC}
          onChangeText={setInputEmailC}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderEmailC == ''
            ? {placeholder: 'Email Comercial'}
            : {defaultValue: placeholderEmailC})}
        />
      </Form>
      <Form>
        <Input
          value={inputBirthday}
          onChangeText={setInputBirthday}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderBirthday == ''
            ? {placeholder: 'Aniversário'}
            : {defaultValue: placeholderBirthday})}
        />
      </Form>
      <Form>
        <Input
          value={inputAddressP}
          onChangeText={setinputAddressP}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderAddressP == ''
            ? {placeholder: 'Endereço Pessoal'}
            : {defaultValue: placeholderAddressP})}
        />
      </Form>
      <Form>
        <Input
          value={inputAddressC}
          onChangeText={setinputAddressC}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderAddressC == ''
            ? {placeholder: 'Endereço Comercial'}
            : {defaultValue: placeholderAddressC})}
        />
      </Form>
      <Form>
        <Input
          value={inputObs}
          onChangeText={setInputObs}
          autoCapitalize="none"
          autoCorrect={false}
          {...(placeholderObs == ''
            ? {placeholder: 'Observações'}
            : {defaultValue: placeholderObs})}
        />
      </Form>
      <Form>
        <Button>
          <TouchableOpacity onPress={handleUpdateContact}>
            <ButtonSaveText>Salvar</ButtonSaveText>
          </TouchableOpacity>
        </Button>
        <Button>
          <TouchableOpacity onPress={handleDeleteContact}>
            <ButtonDeleteText>Deletar</ButtonDeleteText>
          </TouchableOpacity>
        </Button>
      </Form>
    </Container>
  );
}

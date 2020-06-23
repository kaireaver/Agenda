export default class ContactSchema {
  static schema = {
    name: 'Contact',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      lastname: 'string',
      position: 'string',
      company: 'string',
      personalnumber: 'string',
      worknumber: 'string',
      personalemail: 'string',
      workemail: 'string',
      homeaddress: 'string',
      workaddress: 'string',
      birthday: 'string',
      observations: 'string',
    },
  };
}

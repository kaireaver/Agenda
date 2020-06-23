import Realm from 'realm';

import ContactSchema from '~/schemas/ContactSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ContactSchema.schema],
    deleteRealmIfMigrationNeeded: true,
  });
}

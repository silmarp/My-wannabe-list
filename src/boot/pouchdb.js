// import something here
import PouchDB from 'pouchdb';

const db = new PouchDB('liked');
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  // something to do
};

// db.replicate.to(remoteDB, { live: true });
// db.replicate.from(remoteDB, { live: true });

export { db };

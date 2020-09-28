## PouchDb

Dans le fichier `src/polyfill.ts` ajouter les lignes suivantes :

```
(window as any).global = window;
(window as any).process = {};
(window as any).process.nextTick = setTimeout;
```

Dans le fichier `tsconfig.json` ajouter l'option du compilateur :

```
"allowSyntheticDefaultImports": true,
```

Installer PouchDb :
`npm i pouchdb-browser`
`npm i @types/pouchdb-browser -d`

Dans `ProductService` remplacer le constructeur et les méthodes `getAllDocs` et `getDocById` par le code suivant :

```
private localDb;

constructor() {
  this.localDb = new PouchDB('phones');
  const remoteDb = new PouchDB(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones',
  );
  this.localDb.replicate.from(remoteDb, {
    live: true,
    retry: true,
  });
}

getAllDocs(): Observable<Product[]> {
  return from(
    this.localDb.allDocs({
      include_docs: true,
    }),
  ).pipe<any, Product[]>(
    map((data: any) => data.rows.map((r) => omit(r.doc, ['_rev']))),
  );
}

getDocById(id: string): Observable<Product> {
  return from(this.localDb.get(id) as Promise<Product>);
}
```

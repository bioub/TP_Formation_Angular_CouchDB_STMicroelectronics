## Page de détails

Sur la balise `<ag-grid-angular>` ajouter écouter l'événement suivant :

```
(rowClicked)="handleRowClick($event)"
```

Créer la méthode `handleRowClick` sur `ProductsListComponent` et appeler la méthode `navigate` du `Router` pour aller sur la route `/products/:productId`

> Aidez vous de console.log pour afficher le paramètre reçu par `handleRowClick``

Dans `ProductDetailsComponent` injecter `ProductService` et `ActivatedRoute`.

Dans `ProductService` créer une méthode getDocById(id) qui requêtera via la méthode `GET` l'URL `https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/:id` (remplacer `:id` par l'id du produit)

Appeler la méthode `getDocById` en lui fournissant le `productId` reçu par `activatedRoute`.

Bonus : utiliser l'opérateur `switchMap` de `RxJS`

Utiliser le SCSS suivant :

```
:host {
  display: block;
}

.phone {
  background-color: white;
  display: none;
  float: left;
  height: 400px;
  margin-bottom: 2em;
  margin-right: 3em;
  padding: 2em;
  width: 400px;
}

.phone:first-child {
  display: block;
}

.phone-images {
  background-color: white;
  float: left;
  height: 450px;
  overflow: hidden;
  position: relative;
  width: 450px;
}

.phone-thumbs {
  list-style: none;
  margin: 0;
}

.phone-thumbs img {
  height: 100px;
  padding: 1em;
  width: 100px;
}

.phone-thumbs li {
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  display: inline-block;
  margin: 1em;
}

.specs {
  clear: both;
  list-style: none;
  margin: 0;
  padding: 0;
}

.specs dt {
  font-weight: bold;
}

.specs > li {
  display: inline-block;
  vertical-align: top;
  width: 200px;
}

.specs > li > span {
  font-size: 1.2em;
  font-weight: bold;
}
```

Utiliser le template suivant en créant la méthode `setImage` et la propriété `mainImageUrl` dans `ProductDetailComponent` :

```
<ng-container *ngIf="product">
  <div class="phone-images">
    <img
      [src]="'/assets/' + mainImageUrl"
      class="phone"
      [ngClass]="{ selected: img === mainImageUrl }"
      *ngFor="let img of product.images"
    />
  </div>

  <h1>{{ product.name }}</h1>

  <p>{{ product.description }}</p>

  <ul class="phone-thumbs">
    <li *ngFor="let img of product.images">
      <img [src]="'/assets/' + img" (click)="setImage(img)" />
    </li>
  </ul>

  <ul class="specs">
    <li>
      <span>Availability and Networks</span>
      <dl>
        <dt>Availability</dt>
        <dd *ngFor="let availability of product.availability">
          {{ availability }}
        </dd>
      </dl>
    </li>
    <li>
      <span>Battery</span>
      <dl>
        <dt>Type</dt>
        <dd>{{ product.battery.type }}</dd>
        <dt>Talk Time</dt>
        <dd>{{ product.battery.talkTime }}</dd>
        <dt>Standby time (max)</dt>
        <dd>{{ product.battery.standbyTime }}</dd>
      </dl>
    </li>
    <li>
      <span>Storage and Memory</span>
      <dl>
        <dt>RAM</dt>
        <dd>{{ product.storage.ram }}</dd>
        <dt>Internal Storage</dt>
        <dd>{{ product.storage.flash }}</dd>
      </dl>
    </li>
    <li>
      <span>Connectivity</span>
      <dl>
        <dt>Network Support</dt>
        <dd>{{ product.connectivity.cell }}</dd>
        <dt>WiFi</dt>
        <dd>{{ product.connectivity.wifi }}</dd>
        <dt>Bluetooth</dt>
        <dd>{{ product.connectivity.bluetooth }}</dd>
        <dt>Infrared</dt>
        <dd>{{ product.connectivity.infrared ? "✓" : "✗" }}</dd>
        <dt>GPS</dt>
        <dd>{{ product.connectivity.gps ? "✓" : "✗" }}</dd>
      </dl>
    </li>
    <li>
      <span>Android</span>
      <dl>
        <dt>OS Version</dt>
        <dd>{{ product.android.os }}</dd>
        <dt>UI</dt>
        <dd>{{ product.android.ui }}</dd>
      </dl>
    </li>
    <li>
      <span>Size and Weight</span>
      <dl>
        <dt>Dimensions</dt>
        <dd *ngFor="let dim of product.sizeAndWeight.dimensions">{{ dim }}</dd>
        <dt>Weight</dt>
        <dd>{{ product.sizeAndWeight.weight }}</dd>
      </dl>
    </li>
    <li>
      <span>Display</span>
      <dl>
        <dt>Screen size</dt>
        <dd>{{ product.display.screenSize }}</dd>
        <dt>Screen resolution</dt>
        <dd>{{ product.display.screenResolution }}</dd>
        <dt>Touch screen</dt>
        <dd>{{ product.display.touchScreen ? "✓" : "✗" }}</dd>
      </dl>
    </li>
    <li>
      <span>Hardware</span>
      <dl>
        <dt>CPU</dt>
        <dd>{{ product.hardware.cpu }}</dd>
        <dt>USB</dt>
        <dd>{{ product.hardware.usb }}</dd>
        <dt>Audio / headphone jack</dt>
        <dd>{{ product.hardware.audioJack }}</dd>
        <dt>FM Radio</dt>
        <dd>{{ product.hardware.fmRadio ? "✓" : "✗" }}</dd>
        <dt>Accelerometer</dt>
        <dd>{{ product.hardware.accelerometer ? "✓" : "✗" }}</dd>
      </dl>
    </li>
    <li>
      <span>Camera</span>
      <dl>
        <dt>Primary</dt>
        <dd>{{ product.camera.primary }}</dd>
        <dt>Features</dt>
        <dd>{{ product.camera.features.join(", ") }}</dd>
      </dl>
    </li>
    <li>
      <span>Additional Features</span>
      <dd>{{ product.additionalFeatures }}</dd>
    </li>
  </ul>
</ng-container>
```

> Bonus : créer un Pipe `checkmark` pour remplacer `? "✓" : "✗"` dans le template

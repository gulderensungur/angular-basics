### NgModel:

`[(ngModel)] = “parameter”` inputa girilen değere sync olarak ulaşmamızı sağlar. Bu fonksiyonu kullanmak için FormModules’ü import etmemiz gerekir. Eğer module import edilmemişse şu hatayı alırız:

> NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'.

## Bootstrap indirme ve kurma:

`npm install —save bootstrap@3`

Bu kod local olarak indirme yapar. Daha sonra angular.json dosyasındaki style kısmına bootstrap’i eklememiz gerekiyor.

```json
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
              "src/styles.css"
            ],
```

### String Interpolation:

_String interpolation_ is replacing placeholders with values in a string literal.

```tsx
const number = 42;
const message = `The number is ${number}`;
message; // => 'The number is 42'
```

### Property Binding:

Property binding moves a value in one direction, from a component's property into a target element property. To bind to an element's property, enclose it in square brackets, `[]`
, which identifies the property as a target property.

```tsx
<button [disabled]="!allowNewServer">Add</button>
```

Disable property will change according to the allowNewServer is true or false.

> Köşeli ayraçlar, `[]`, Angular'ın atamanın sağ tarafını dinamik bir ifade olarak değerlendirmesine neden olur.

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for `YOUR_ELEMENT properties`
  or `YOUR_ELEMENT events`
  should yield nice results.

### Event Binding;

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

### Two-way Bindings:

For Two-Way-Binding to work, you need to enable the `ngModel`  directive. This is done by adding the `FormsModule`  to the `imports[]`  array in the AppModule.

You then also need to add the import from `@angular/forms`  in the app.module.ts file:

`import { FormsModule } from '@angular/forms';`

Two-way binding includes both property binding and event binding.

### \*ngIf():

```tsx
<p *ngIf = "isTrue">Lorem Ipsum</p>
```

If condition in ngIf function is true, Lorem ipsum text is visible otherwise it is invisible.

**ngIf with an Else condition:**

```html
<p *ngIf="isServerCreated; else noServer">{{ serverCreationStatus }}</p>
<ng-template #noServer>
  <p>No server found</p>
</ng-template>
```

**ngStyle():**

```tsx
<p [ngStyle] = "{'backgroundColor': getColor()}">This is text</p>
```

We assign the function to the style property.

**ngClass():**

```html
<p
  [ngStyle]="{ 'background-color': getColor() }"
  [ngClass]="{ online: serverStatus === 'online' }"
>
  Server id 10 is {{ serverStatus }}
</p>
```

ngClass allow us to dynamically remove or add CSS classes.

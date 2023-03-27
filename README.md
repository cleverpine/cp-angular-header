# HeaderComponent
This is an Angular library for a header component.

## Params
`isShowingSideNav` - A boolean that indicates whether or not the side navigation is currently being displayed. Default value is false.
`profileName` - A string that represents the name of the user profile. If not specified, the profile section will not be displayed.
`title` - A string that represents the title to be displayed in the header.
`profilePageHref` - A string that represents the URL for the user profile page. Default value is DEFAULT_PROFILE_PAGE_HREF.
`homePageHref` - A string that represents the URL for the home page. Default value is DEFAULT_HOME_PAGE_HREF.

`toggledSideNav` - An event emitter that is fired when the side navigation is toggled.
`logout` - An event emitter that is fired when the user logs out.

## Usage
To use this component, first install the library:

`npm install --save @lht/header`

Then, import it into your module:

```typescript
import { HeaderModule } from '@lht/header';

@NgModule({
  declarations: [
    AppComponent,
    HeaderModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Finally, use it in your component template:

```scss
<lht-header
  [isShowingSideNav]="isShowingSideNav"
  [profileName]="profileName"
  [title]="title"
  [profilePageHref]="profilePageHref"
  [homePageHref]="homePageHref"
  (toggledSideNav)="onToggledSideNav()"
  (logout)="onLogout()">
</lht-header>
```
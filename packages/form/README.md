@gov.au/form
============

> Forms contain interactive controls for submitting information to a web server


## Contents

* [Install](#install)
* [Dependency graph](#dependency-graph)
* [Tests](#tests)
* [Release History](#release-history)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Install


```shell
yarn add @gov.au/form
```

```shell
npm install @gov.au/form --save-dev
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Dependency graph

```shell
form
└─ core
```


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Tests

The visual test: https://auds.service.gov.au/packages/form/tests/site/


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Release History

* v0.1.0 - 💥 Initial version


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia.
Licensed under [MIT](https://raw.githubusercontent.com/govau/design-system-components/packages/core/master/LICENSE).


**[⬆ back to top](#contents)**

# };


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Usage


* [React](#react)


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

### React

Usage:

```jsx
import { AUForm, AUlabel, AUhintText, AUerrorText, AUfieldset, AUlegend } from '@gov.au/form';

<AUForm>
    <AUlabel text="Email" />

    <AUhintText text="We will only use this email to respond to your query." />

    <AUerrorText text="Enter an email address in the correct format, like name@example.com" />

    <AUformGroup>
        // labels, hint text, and form controls here
    </AUformGroup>

    <AUfieldset>
        <AUlegend>
        // labels/hint text here
        </AUlegend>

        // form controls here
        
    </AUfieldset>
</AUForm>
```

All props:

```jsx
<AUlabel 
text="Email"                 {/* The text of the label */}
dark={ true }                {/* The dark variation of the component */}
inline={ true }              {/* Label inline*/}
/>

<AUhintText
text="We will only use this email to respond to your query." {/* The hint text */}
dark = { true }                                              {/* The dark variation of the component */}
alt={ false }                                                {/* The alt variation of the component */}
/>

<AUerrorText
text="Enter an email in the valid format."  {/* The error text */}
dark={ true }                               {/* The dark variation of the component */}
inline={ true }                             {/* Display the error text inline*/}
/>

<AUformGroup
status="invalid"            {/* Adds invalid state to form group */}
dark = { true }             {/* The dark variation of the component */}
/>

<AUfieldset 
dark = { true }             {/* The dark variation of the component */}
/>
```

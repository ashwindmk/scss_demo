# SASS / SCSS

## SCSS

Sassy CSS.

## SCSS Features

### 1. Operators
```scss
<class> {
    font-size: 5rem + 5rem;
}
```

### 2. Variables
```scss
$bgColor: #rgb(100, 100, 100);

<class> {
    background: $bgColor;
}
```

### 3. Nesting
```scss
.mainHeader {
    ...

    h1 {
        ...

        &:hover {
            ...
        }

        &::after {
            ...
        }
    }

    p {
        ...
    }
}
```

### 4. Mixin

Allows reuse of set of properties.

```scss
@mixin <name> {
    ...
}

<class> {
    @include <name>;
    // Can override any mixin properties here
    ...
}
```

### 5. Parameterized Mixin

```scss
@mixin <name>($par1) {
    ...
    <prop>: $par1;
    ...
}

<class> {
    @include <name>(<arg1>);
}
```

### 6. Partials

- Allows to split the SCSS code into multiple files.
- All partial files must start with '_'. E.g. `_base.scss`, `_vars.scss`.
- These files won't be compiled separately.

main.scss
```scss
@import "base";  // Or "_base", or "_base.scss"
@import "vars";

...
```

## Run the Project

```bash
npm i

gulp
```

Open the dist/index.html in browser.

# Configuração do ESlint Prettier e EditorConfig

## React Base

```bash
# Create Project React
npx create-react-app [project-name]

# Install devDependicies
npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D

# Init ESLint
npx eslint --init
```

## .eslintrc.js

```javascript
# Adicionar
{
    extends: [
        ...,
        'prettier',
        'prettier/react'
    ],
    parser: 'babel-eslint',
    plugins: [
        ...,
        'prettier',
        'react-hooks'
    ],
    rules: {
    	'prettier/prettier': 'error',
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'react-hooks/rules-of-hooks': 'error',
    	'react-hooks/exhaustive-deps': 'warn' 
    }
}
```

# .prettierrc

```json
# criar arquivo .prettierrc na raiz
{
    "singleQuote": true,
    "trailingComma": "es5"
}
```

# .editorConfig

```
# Gerar arquivo .editorConfig

# Configurar
...
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
```

# settings.json

```jso
{
 "editor.codeActionsOnSave": {
 	"source.fixAll.eslint": true
 }
}
```




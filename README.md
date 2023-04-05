# README

Utilizar as técnicas de otimização (Memo, UseMemo e UseCallback) no projeto

## Ordem de renderização no React

- passo 1: criar uma nova versão do componente (vdom)
- passo 2: comprarar com a versão anterior (vdom)
- passo 3: atualizar as alterações (dom)

## Memo

Impede a criação de uma nova versão do componente (passo 1) se o props for o mesmo (shallow comparation)

Onde usar:

- Pure functions component
- Renders too often
- Re-renders with same props
- Medium to big sized components

```ts
import { memo } from 'react';

function AppComponent() {}

export const App = memo(AppComponent, (previousProps, nextProps) => {
    return Object.is(previousProps, nextProps) // deep comparataion
})
```

## UseMemo

Onde usar:

- Cálculos pesados
- Igualdade referêncial (quando repassa algum valor para o componente filho)

```ts
import { useMemo } from 'react';

export function App({products}) {
    const bestOfferByCategory = useMemo((products) => {
        return {} // heavy calculations
    }, [products])
}
```

## UseMemo

Onde usar:

- Igualdade referêncial (quando repassa alguma função para o componente filho)

```ts
import { useCallback, useState } from 'react';

export function App({products}) {
    const [favProducts, setFavProducts] = useState([])
    const addFavProduct = useCallback(async (productId) => {
        setFavProducts(favProducts => [...favProducts, productId])
    }, [])
}
```

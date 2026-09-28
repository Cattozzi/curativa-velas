# Curativa — velas naturais 

SPA em Next.js (pages router) desenvolvida para o hackathon de 8 horas. Tema: **velas naturais de cera
de abelha e velas aromáticas**.

Escolhi esse tema em homenagem a minha esposa, ela possui uma loja online chamada "Curativa", ainda está bem no começo então a escolha desse tema é para motiva-la a continuar com o sonho dela.
Como o foco do projeto e a avaliação é o desenvolvimento da estrutura e o backend,  o front end ficou por conta da IA, mas vou continuar atualizando essa aplicação mesmo após a entrega.

## Tecnologias

- Next.js 14 (pages router)
- React 18 (useState, props, .map())
- CSS Modules + Flexbox


## Funcionalidades implementadas

- **Componentização pai/filho**: `Header`, `Footer`, `BackButton`, `CandleIcon` e `Card` em pastas
próprias, importados com `import`/`export default`.
- **Props e listas**: `catalogo.jsx` lê `data/produtos.json` e usa `.map()` para renderizar um
`Card` por produto, passando os dados via props e definindo a `key`.
- **Estado reativo (`useState`)**: favoritar/desfavoritar uma vela (coração no card) e o filtro de
categoria, ambos disparados por `onClick`.
- **Roteamento SPA**: duas rotas (`/` e `/catalogo`) navegadas com `next/link`, sem recarregar a
página, mais um `BackButton` para voltar à Home. O filtro de categoria também atualiza a URL
(`?categoria=...`) via `router.push` com `shallow: true`.
- **Layout com Flexbox**: header, hero, grade de categorias e grade de cards — todos em Flexbox,
responsivos até mobile.



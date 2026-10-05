# Clínica Mavi — Institucional

Site institucional demonstrativo para a Clínica Mavi — Estética Avançada e Saúde, em Canindé, Ceará. Feito com HTML5, CSS3 e JavaScript puro, sem etapa de build ou dependências de framework.

## Abrir localmente

Abra `index.html` no navegador. Para desenvolvimento local, também é possível servir a pasta com qualquer servidor estático.

## Publicar no GitHub Pages

1. Envie os arquivos deste projeto para a raiz de um repositório GitHub.
2. Em **Settings → Pages**, selecione a branch principal e a pasta `/ (root)`.
3. Salve e aguarde a publicação. O site usa caminhos relativos e não exige build.

## Antes de publicar

- Confirme o número oficial do WhatsApp, o perfil oficial do Instagram e o endereço da clínica. Atualize as constantes `whatsappNumber`, `instagramUrl` e `mapsUrl` em `js/script.js` e os textos de contato em `index.html`.
- Substitua os placeholders de equipe por dados e fotografias reais autorizados. Os cards ainda são demonstrativos.
- Insira depoimentos reais somente após autorização.
- O projeto não continha o arquivo de logo principal `logo-mavi.png`. O cabeçalho e o rodapé usam um wordmark tipográfico provisório; substitua-o pela marca oficial quando o arquivo for disponibilizado. O favicon existente foi preservado.
- As imagens são usadas somente como referências ilustrativas e não representam a clínica, pacientes, equipe ou instalações. A origem/licença dos arquivos de imagem herdados não veio acompanhada do projeto; confirme os direitos de uso ou substitua por arquivos com licença documentada antes de uma publicação comercial.

## Estrutura

```text
clinica-mavi-institucional/
├── index.html
├── css/style.css
├── js/script.js
├── assets/logo/
└── assets/images/
    ├── hero/
    ├── clinic/
    ├── experience/
    ├── treatments/
    ├── professionals/
    ├── results/
    └── gallery/
```

As imagens são organizadas por contexto para facilitar substituições. O mesmo arquivo-fonte pode aparecer em mais de uma categoria.

## Acessibilidade e recursos

- Estrutura semântica, link para pular ao conteúdo, foco visível e descrições alternativas nas imagens.
- Menu mobile com estado acessível, FAQ nativo em accordion e respeito a `prefers-reduced-motion`.
- Animações de entrada discretas; se `IntersectionObserver` não estiver disponível, o conteúdo permanece visível.
- Sem números, endereço, horários, profissionais, serviços específicos ou depoimentos inventados.

Projeto demonstrativo desenvolvido por Wanderson Silva.

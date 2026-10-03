# Clínica Mavi — prévia de landing page

Página demonstrativa estática, responsiva e sem dependências de build. Abra `index.html` no navegador. A tipografia usa Google Fonts quando há conexão e fontes locais alternativas sem rede.

## Personalização antes da publicação

- A logo apresentada como referência não estava disponível como arquivo no projeto. Header e footer usam wordmark tipográfico provisório, inspirado nas proporções e tons da marca. Substitua pela logo oficial sem distorcer a imagem.
- As fotos locais são imagens de banco usadas apenas como referência visual; não representam a Clínica Mavi nem seus profissionais. Troque-as por fotos autorizadas antes da publicação.
- Em `js/script.js`, substitua `ADICIONAR_NUMERO` por DDI + DDD + telefone oficial, somente dígitos. Após configurar, os links abrem uma conversa do WhatsApp.
- Atualize Instagram, endereço e horário em `index.html`. As categorias de tratamento são demonstrativas e devem ser confirmadas pela clínica.

## Estrutura

- `index.html`: conteúdo semântico e metadados.
- `css/style.css`: identidade visual, ilustrações CSS e layout mobile-first.
- `js/script.js`: menu acessível, navegação, animações e WhatsApp.
- `assets/logo/favicon.svg`: favicon demonstrativo; a pasta reserva a logo oficial.
- `assets/images/`: reservado para imagens autorizadas.

Sem dependências de imagem ou bibliotecas externas. Animações respeitam `prefers-reduced-motion`.



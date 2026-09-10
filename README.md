# Gigantes da Amazônia — Feira de Ciências

Site interativo em HTML, CSS e JavaScript puro, pronto para publicar no GitHub Pages.

## Estrutura
- `index.html` — telas, conteúdo e informações do projeto.
- `style.css` — visual responsivo.
- `script.js` — perguntas, pontuação, cronômetro, feedback e navegação.

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie `index.html`, `style.css` e `script.js` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch principal (geralmente `main`) e a pasta `/ (root)`.
6. Salve e aguarde o endereço do site aparecer.

## Personalização
No `index.html`, procure:
`<p><strong>Autor(a):</strong> Seu nome aqui</p>`

Troque `Seu nome aqui` pelo nome do aluno responsável pelo projeto.

As perguntas ficam no início de `script.js`, dentro da constante `questions`, para você poder editar ou adicionar novas questões.

# 💻 DevClub Disruptivo | Landing Page Matrix Theme

> Uma Landing Page moderna, de alta conversão e interativa, inspirada no universo cinematográfico de *Matrix*, desenvolvida com foco em performance, experiência do usuário (UX) e integração de automação de marketing.

🌐 **[Acesse a aplicação em produção na Vercel](https://devclub-disruptivo.vercel.app)**

---

## 🖥️ Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de criar uma experiência de usuário imersiva e disruptiva para captação de leads. A interface utiliza elementos visuais icônicos (como a escolha entre a Pílula Vermelha e a Pílula Verde) combinados com animações fluidas e uma arquitetura orientada a componentes.

Além do visual impactante, o projeto conta com integração real de dados: os formulários preenchidos enviam os dados diretamente para um fluxo de automação via Webhook utilizando o **n8n**, permitindo o processamento instantâneo das informações dos leads.

---

## 🚀 Tecnologias e Ferramentas

O projeto foi construído utilizando as seguintes tecnologias:

- **[Next.js](https://nextjs.org/)**: Framework React com renderização otimizada e roteamento moderno.
- **[React](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para um código mais seguro e manutenível.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utilitária, responsiva e de alta performance.
- **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animações complexas, transições de tela e efeitos visuais sem perda de performance.
- **[n8n](https://n8n.io/)**: Ferramenta de automação de fluxos de trabalho (integração via Webhook API).
- **[Vercel](https://vercel.com/)**: Hospedagem e CI/CD automatizado para o deploy da aplicação.
- <div align="center">
  
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
  ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

---

## 💡 Principais Desafios e Soluções Técnicas

*   **Otimização de Animações e Memória:** Utilização do Framer Motion com gerenciamento de ciclo de vida dos componentes (`useEffect` e `cleanups`) para evitar *memory leaks* (vazamento de memória) no terminal interativo.
*   **Integração Assíncrona e Feedbacks de UI:** Tratamento do envio de dados via Webhook com tratamento de erros, tempo de resposta e feedback visual (loading/sucesso) para o usuário.
*   **Ajuste de Internacionalização (i18n):** Configuração nativa de idioma (`pt-BR`) no `layout.tsx` para evitar que navegadores tentem traduzir a página e quebrem a estrutura do DOM (problema com classes do Tailwind e React).

---
---

## 🚀 Apoie o Desenvolvimento

A arquitetura e a manutenção deste projeto fazem parte da minha evolução constante como Desenvolvedor Full Stack. Se o código, a estrutura ou as soluções apresentadas aqui te ajudaram de alguma forma, considere incentivar o projeto!

O seu apoio é fundamental para manter o foco na criação de aplicações cada vez mais robustas e disruptivas.

[![Apoiar com PagSeguro](https://img.shields.io/badge/Apoiar_com-PagSeguro-00A868?style=for-the-badge&logo=pagseguro&logoColor=white)](https://pag.ae/824DZ8SKs)

---

## ⚙️ Como executar o projeto localmente

Pré-requisitos: Ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

```bash
# 1. Clone este repositório
$ git clone https://github.com/cesareduardodonato-ecolife/devclub-disruptivo.git
# 2. Acesse a pasta do projeto
$ cd devclub-disruptivo

# 3. Instale as dependências
$ npm install
# ou
$ yarn install

# 4. Execute a aplicação em modo desenvolvedor
$ npm run dev
# ou
$ yarn dev

Abra http://localhost:3000 no seu navegador para ver o resultado.

👨‍💻 Autor
César Donato
Desenvolvedor Front-end / Full Stack (Jr) em formação

# ConverterMoeda

Uma aplicação simples de conversão de moeda — desenvolvida como parte do curso _Fullstack Developer_ da Rocketseat. Ela permite converter o valor em reais (BRL) para três moedas: dólar (USD), euro (EUR) ou libra esterlina (GBP).

---

## Tecnologias Utilizadas

- **HTML** – estruturação da interface do usuário
- **CSS** – estilização e layout da página
- **JavaScript** – lógica de conversão das moedas

---

## Visão Geral do Projeto

- **Funcionalidade principal**: O usuário insere um valor e escolhe entre dólar, euro ou libra esterlina. A aplicação faz o cálculo e retorna o valor convertido em reais.
- **Experiência do Usuário**: Interface limpa, intuitiva e responsiva.
- **Aprendizado**: Prática de manipulação de DOM, eventos JavaScript e integração básica de lógica de conversão de moedas.

---

## Instalação e Uso

1. **Clonar o repositório**

   ```bash
   git clone https://github.com/DevWebFelipe/ConverterMoeda.git
   cd ConverterMoeda
   ```

2. **Abrir o projeto no navegador**

   - Abra o arquivo `index.html` no seu navegador favorito.

3. **Utilizar a aplicação**
   - Digite o valor que deseja converter.
   - Selecione a moeda desejada (USD, EUR ou GBP).
   - Veja o valor convertido para reais.

---

## Exemplo

```plaintext
Valor: 19
Moeda selecionada: Dólar (USD)
Resultado: R$ 100 = US$ 19,00
```

> (Os valores são ilustrativos. A taxa de conversão real depende da lógica que você implementou — por exemplo, valores fixos, uso de API, etc.)

---

## Estrutura do Projeto

```
ConverterMoeda/
├── assets/
│   └── (imagens, ícones)
├── index.html
├── style.css
├── script.js
└── README.md
```

- **index.html** – marcação da interface (input, botões, resultado)
- **style.css** – estilos visuais da página
- **script.js** – lógica de conversão e interação com o usuário

---

## Próximas Melhorias

- Buscar taxas de câmbio atualizadas via uma API (por exemplo, ExchangeRatesAPI, Fixer ou similar)
- Suporte à conversão para mais moedas
- Layout responsivo para mobile
- Mensagens de erro e validação de entrada (por exemplo, valor inválido ou vazio)
- Salvar o histórico de conversões na interface

---

## Sobre o Autor

**DevWebFelipe** – estudante do curso Fullstack da Rocketseat, entusiasta de desenvolvimento web e conversão de câmbio.  
Confira outros projetos no meu perfil:  
[https://github.com/DevWebFelipe](https://github.com/DevWebFelipe)

---

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes (caso já tenha criado um).

---

## Contato

Se tiver sugestões ou quiser compartilhar algo sobre o projeto, pode abrir uma **issue** no GitHub ou entrar em contato via [insira seu e-mail ou rede social].

---

### Como usar esse README

- Substitua onde for necessário (por exemplo, nome do autor, link do perfil).
- Adicione badges (por exemplo, número de visões, GitHub Pages) se quiser dar um toque extra.
- Se já houver uma API implementada para cotação, insira detalhes (como URL da API e chaves) na seção de “Instalação” ou “Próximas Melhorias”.

---
sidebar_position: 2
---

# Stack

## 🔩 Ferramentas

Para otimizar tempo, gerenciar as tarefas e requisitos entre a equipe durante o processo de desenvolvimento a equipe utilizou a ferramenta [Trello](https://trello.com/).
Durante o processo de prototipagem, empregamos duas ferramentas distintas: o [Miro](https://miro.com/pt/) para a criação dos protótipos de baixa fidelidade, conhecidos como wireframes, e o [Figma](https://www.figma.com/) para a elaboração dos protótipos de média e alta fidelidade.

---

## ⚙️ Tecnologias

### 💻 Front-end

Optamos pela utilização do **React** por sua popularidade e ampla adoção, garantindo uma comunidade ativa e suporte contínuo. Sua abordagem baseada em componentes promove modularidade e reutilização de código, facilitando manutenção e escalabilidade.

Decidimos utilizar **TypeScript** juntamente com React para aumentar a confiabilidade e a produtividade do desenvolvimento. TypeScript proporciona tipagem estática, permitindo identificar erros antecipadamente durante o desenvolvimento, o que reduz significativamente bugs em tempo de execução.

Escolhemos por utilizar **Tailwind CSS** para aumentar a eficiência e a consistência no desenvolvimento de interfaces. Tailwind permite a criação de estilos utilitários diretamente no JSX, acelerando o processo de desenvolvimento e reduzindo a necessidade de sair do contexto do código. Isso resulta em um workflow mais ágil e integrado. 

Optamos pela utilização da biblioteca **SparkUI** desenvolvida pelos desenvolvedores Bosch Digital devido à sua integração personalizada com nossos sistemas internos, garantindo uma maior eficiência e segurança. Desenvolvida especificamente para atender às necessidades da empresa, essa biblioteca proporciona componentes que atendem o design system da Bosch.


### 👩‍💻 Back-end

A escolha pelo **Java** baseou-se em sua robustez e na capacidade do framework **Spring Boot** de simplificar o desenvolvimento de APIs eficientes. Java é conhecida por sua estabilidade, segurança e portabilidade, ideal para aplicações empresariais e de larga escala. O Spring complementa Java com uma estrutura modular que facilita tarefas como injeção de dependências, controle transacional e acesso a dados. Essa combinação aumenta a produtividade e oferece um ambiente robusto para sistemas que lidam com grandes volumes de dados e exigências complexas.

Para o deployment da nossa aplicação, escolhemos a **Azure Cloud** por sua robustez e flexibilidade. Utilizamos os seguintes serviços para garantir uma infraestrutura eficiente:
Primeiramente, usamos o **Azure PaaS** (Platform as a Service) para hospedar nossa aplicação através do Azure App Service. Este serviço nos permite focar no desenvolvimento sem nos preocuparmos com a gestão da infraestrutura subjacente, além de oferecer escalabilidade automática e integração facilitada com ferramentas de CI/CD.
Além disso, utilizamos o **Azure Container Registry** (ACR) como parte do Azure IaaS (Infrastructure as a Service). O ACR nos proporciona uma solução segura para armazenar e gerenciar nossas imagens de containers Docker, facilitando a implementação contínua e a automação de workflows de DevOps.
Essa combinação de serviços nos proporciona um ambiente de desenvolvimento e produção eficiente, seguro e escalável, alinhando-nos com as melhores práticas de DevOps.




<h1 align="center" style="font-weight: bold;">Gerenciemento de Clientes 🖥️</h1>

<p align="center">
 <a href="#crud">Layout do Sistema</a> •
 <a href="#tech">Tecnologias</a> • 
 <a href="#started">Como Rodar</a> 
</p>

<h2>Descrição do Projeto</h2>

<p align="left">
  <p>O sistema tem com principal funcionalidade o gerenciamento de clientes e seus contatos. Abaixo há uma checklist com todos os requisitos que foram implementadas para este sistema.</p>

### Lista de Requisitos Funcionais Implementados

- [x] O sistema permite o cadastro de clientes com os seguintes dados: Nome, CPF, Data de Nascimento e Endereço;
- [x] O sistema permite a edição dos dados de um cliente cadastrado;
- [x] O sistema permite a exclusão de um cliente cadastrado;
- [x] O sistema permite a listagem de todos os clientes cadastrados;
- [x] O sistema permite a busca de um cliente pelo Nome ou CPF;
- [x] O sistema permite o cadastro de contatos para um cliente;
- [x] O sistema permite a edição dos contatos de um cliente;
- [x] O sistema permite a exclusão de um contato de um cliente;
- [x] O sistema permite a listagem de todos os contatos de um cliente específico.

### Lista de Regras de Negócio Implementadas

- [x] Os campos Nome e CPF são obrigatórios no cadastro do cliente;
- [x] Os campos Tipo do Contato e Valor do Contato são obrigatórios no cadastro do contato;
- [x] O CPF informado deve ser único no sistema;
- [x] O Nome do cliente não pode estar vazio;
- [x] A Data de Nascimento deve ser válida;
- [x] Um cliente pode ter mais de um contato cadastrado;
- [x] Ao excluir um cliente, todos os seus contatos devem ser removidos do sistema;
- [x] O sistema deve validar os dados informados antes de permitir o cadastro ou
edição.
 
### Modelo Relacional Implementado

<div align="center">
    <img src="https://github.com/user-attachments/assets/8196a88f-16b0-4e4d-9a2b-64c83bef33869">
</div>

<h2 id="crud">Layout do Sistema</h2>

<div align="center">
    <img src="https://github.com/user-attachments/assets/c6d6fa91-77ca-4fd5-ba9d-6a751276eda9">
</div>


<h2 id="tech">💻 Tecnologias</h2>

Abaixo estão listadas todas as tecnologias que foram utilizadas para realizar este sistema:

- JavaScript
- HTML
- CSS
- Node.js
- MySQL
- Java (Spring-Boot)

<h2 id="started">🚀 Como rodar localmente</h2>

<h3>Pré-Requisitos</h3>

- [Node.js](https://nodejs.org/pt)
- Navegador (O crud foi feito inteiramente no [Google Chrome](https://www.google.pt/intl/pt-PT/chrome/?brand=FHFK&ds_kid=43700076570751463&gad_source=1&gclid=CjwKCAjwnPS-BhBxEiwAZjMF0qoMYAhnW_TjZMxq-DQQjfiJw79PMomQhhoNvzEn79KgchseT9NmbxoCSQ0QAvD_BwE&gclsrc=aw.ds))
- MySQL
  - Servers (Qualquer um dos 3)
    - [USBWebServer](https://usbwebserver.yura.mk.ua/)
    - [WampServer](https://www.wampserver.com/en/)
    - [Xampp](https://www.apachefriends.org/pt_br/index.html)
  - IDE (Opcional)
    - [Workbench](https://www.mysql.com/products/workbench/)
 - [Java JDK 21](https://www.oracle.com/br/java/technologies/downloads/)
 - [Maven](https://maven.apache.org/download.cgi)


## Configuração do Banco

#### 1. Clone o repositório
Abra o terminal e execute o seguinte comando para baixar o projeto:

```bash
git clone https://github.com/joao72neto/e-commerce-livros.git
```

#### 2. Configuração do Banco
Entre no diretório abaixo, abra o arquivo application.properties:
```bash
cd backend/src/main/resources
```
Coloque o seu usuário e senha nos campos destacados abaixo:

```properties
spring.application.name=crud-muralis

spring.application.name=desafio-crud-muralis
spring.datasource.url=jdbc:mysql://localhost:3306/crud_muralis
spring.datasource.username=<SEU USUÁRIO>
spring.datasource.password=<SUA SENHA>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.devtools.restart.enabled=true
server.port=8080
```
Crie o banco de dados com o comando abaixo:

```sql
create database crud_muralis; 
```

#### 3. Iniciando o Servidor backend
Entre no diretório:

```bash
cd backend

```

Digite o comando para instalar todas as dependências:

```bash
mvn install
```

Digite o próximo comando para iniciar o servidor backend;

```bash
mvn spring-boot:run
```

#### 4. Iniciando o Servidor frontend

Entre no diretório:

```bash
cd frontend

```
Digite o comando abaixo para instalar todas as dependências:

```bash
npm install
```

Digite o próximo comando para iniciar o servidor frontend;

```bash
node app.js
```

#### 5 Inserts para povoamento do banco

Inserts para a tebela de clientes

```sql
INSERT INTO cliente (clt_nome, clt_cpf, clt_data_nasc, clt_endereco) VALUES
('João Silva', '123.456.789-01', '1990-05-12', 'Rua A, 123, São Paulo - SP'),
('Maria Souza', '987.654.321-00', '1985-10-25', 'Avenida B, 456, Rio de Janeiro - RJ'),
('Carlos Pereira', '456.789.123-55', '1992-07-30', 'Rua C, 789, Belo Horizonte - MG'),
('Ana Oliveira', '741.852.963-33', '1998-03-15', 'Avenida D, 159, Curitiba - PR'),
('Fernando Lima', '159.357.258-77', '1980-09-08', 'Rua E, 753, Porto Alegre - RS'),
('Juliana Costa', '321.654.987-44', '1988-01-20', 'Rua F, 254, Salvador - BA'),
('Ricardo Martins', '654.987.321-88', '1995-12-05', 'Avenida G, 872, Fortaleza - CE'),
('Patrícia Mendes', '852.963.741-12', '1993-11-13', 'Rua H, 963, Recife - PE'),
('Gustavo Ferreira', '789.654.123-11', '1991-04-18', 'Rua I, 159, Goiânia - GO'),
('Larissa Rocha', '963.852.741-44', '1997-08-09', 'Avenida J, 258, Brasília - DF');

```

Inserts para os contatos dos clientes

```sql
INSERT INTO contato (con_tipo, con_valor, con_observacao, con_clt_id) VALUES
('Telefone', '(11) 98765-4321', 'Celular pessoal', 1),
('Email', 'joao.silva@email.com', 'Email principal', 1),
('Telefone', '(21) 91234-5678', 'WhatsApp', 2),
('Email', 'maria.souza@email.com', 'Email do trabalho', 2),
('Telefone', '(31) 99876-5432', 'Residencial', 3),
('Email', 'carlos.pereira@email.com', 'Email secundário', 3),
('Telefone', '(41) 97654-3210', 'Celular', 4),
('Email', 'ana.oliveira@email.com', 'Email principal', 4),
('Telefone', '(51) 96543-2109', 'Celular', 5),
('Email', 'fernando.lima@email.com', 'Email do trabalho', 5),
('Telefone', '(71) 99765-4321', 'WhatsApp', 6),
('Email', 'juliana.costa@email.com', 'Email pessoal', 6),
('Telefone', '(85) 96876-5432', 'Residencial', 7),
('Email', 'ricardo.martins@email.com', 'Email profissional', 7),
('Telefone', '(81) 98765-4321', 'WhatsApp', 8),
('Email', 'patricia.mendes@email.com', 'Email pessoal', 8),
('Telefone', '(62) 99876-5432', 'Celular', 9),
('Email', 'gustavo.ferreira@email.com', 'Email profissional', 9),
('Telefone', '(61) 97543-2109', 'Celular', 10),
('Email', 'larissa.rocha@email.com', 'Email do trabalho', 10);
```

#### 5. Acesse a aplicação no navegador
Copie e cole a URL abaixo na barra de endereços do seu navegador:

```bash
http://localhost:3000/
```
Agora, o CRUD está pronto para uso! 🚀


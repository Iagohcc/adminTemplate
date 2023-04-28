# Admin Template

Projeto construido em Next.js e Tailwind com layout responsivo, utilizando flexbox e métodos do FireBase para autenticação de usuário. 

![ProjetoAdminTemplate](https://user-images.githubusercontent.com/46465161/235268609-15fa8bae-d156-4531-b1db-5c759d695a76.gif)

# INSTRUÇÕES PARA USO

1 - Verifique se o node está instalado em sua máquina através do comando:
```javascript
node --version
```

2 - Realizar um git clone do projeto para baixar em sua máquina, através do comando:
```javascript
https://github.com/Iagohcc/adminTemplate.git
```

3 - Abrir o prompt de comando Windows ou Linux e navegar até a pasta do projeto. (......\adminTemplate\admin-template) e baixar os módulos no node, através do comando:
```javascript
npm install
```

4 - A essa altura já temos o projeto completo em nossa máquina, para inicicar o mesmo basta usarmos o comando:
```javascript
npm run dev
```
Após esse comando já podemos acessar a página localmente através do endereço: http://localhost:3000

5 - Para utilizar a autenticação, será necessário a criação do projeto no FireBase.
https://firebase.google.com/

Será disponibilizado uma configuração do seu projeto onde haverá a necessidade de substituir as seguintes informações (apiKey, authDomain, projectId) no arquivo .env.local na raiz do projeto.

Após esse processo, criar no projeto FireBase dois metodos de autenticação "email/senha" e "google". E então estará pronto para utilizar.

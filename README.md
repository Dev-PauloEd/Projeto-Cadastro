English version in the bottom (it isn't there yet, though)

## Descrição

  Este é um projeto de uma tela de cadastro e de login. O objetivo é conseguir criar uma conta fictícia e poder fazer login. Simples. Começando pela tela de login: ela é composta por dois inputs, um botão e dois hyperlinks. O primeiro input permite escrever tanto o e-mail como o nome de usuário; já o segundo input permite escrever a senha. O botão ativa a função JavaScript chamada "login()". O primeiro hyperlink (redefinição de senha) não funciona, e o segundo (cadastro) leva o usuário para a tela de cadastro. Continuando com a tela de cadastro: é composta por 6 inputs, um botão e um hyperlink. os seis inputs são o nome completo, o nome de usuário, o e-mail, a senha, a confirmação da senha e a data de nascimento. o botão aciona a função JavaScript "cadastro()", e o hyperlink (login) leva o usuário para a tela de login.

## Desafios
                                                                    
  Como sou iniciante, não acho que tenho experiência o suficiente para dizer que é um grande desafio. Mesmo assim, o grande desafio aqui é não utiizar banco de dados para salvar, bem, os dados... Uma solução que eu tive foi usar JSON em um arquivo separado e depois chamar utilizando o módulo fs do node.js, mas isso não funcionou, talvez porque eu não tinha aberto o servidor com o node... Sei lá. De qualquer forma, minha próxima solução seria utilizar o JSON dentro do próprio arquivo JavaScript. Ainda não tentei, mas já acho que não vai funcionar. "Por que?", você me pergunta, e eu respondo que, quando o usuário é redirecionado para o outro arquivo HTML, todos os dados salvos no arquivo JavaScript são perdidos, logo não seria possível salvar nada. Por isso, eu fiz da primeira forma.


# English version, baby


## Description

  This is a signup and login screen project. The objective is to manage to create a fictional account and be able to do login. Simple. Starting from the login screen: it's composed of two inputs, a button and two hyperlinks. The first input lets you write both e-mail and username; the second lets you write the password. The button activates the JavaScript function called "login()". The first hyperlink (password reset) doesn't work, and the second (signup) takes the user to the signup page. Continuing with the singup page: it's composed by 6 inputs, a button and a hyperlink. the six inputs are the full name, the username, e-mail, password, password confirmation and the birth date. The button activates the JavaScript function "cadastro()", and the hyperlink (login) takes the user to the login page.
  
## Challenges
                                                            
  As i am a beginner, don't think i got enough experience to say it's a great challenge. Even so, the great challenge here is not to use database to save, well, the data... A solution i had was to use JSON in a separate file and call it later using node.js's fs module, but that didn't worked, maybe because i hadn't opened a node server... I don't know. Anyway, my next solution would to use JSON inside the JavaScript file. I haven't tried it yet, but i think it won't work. "Why?", you ask me, and i answer that, when the user is redirected to the other HTML file, all the saved data in the JavaScript file are lost, so it wouldn't be able to save anything. So, i did it the first way.

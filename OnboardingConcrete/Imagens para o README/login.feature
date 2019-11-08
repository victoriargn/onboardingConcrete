#language: pt

Funcionalidade: Login

    Tem como objetivo a autenticação 
    de um usuário cadastrado na aplicação 
    do Tesouro Direto

Contexto:
    Dado que eu esteja na tela de Login

@smoke_test
Cenário: Realizar login com sucesso
    Quando realizar o login com dados válidos
    Então a home page da aplicação é exibida

@servico
Cenário: Realizar login com um usuário não cadastrado
    Dado que eu tenha um usuário não cadastrado
    Quando realizar o login
    Então visualizo uma mensagem de erro

~@instrumentado
Cenário: Realizar login sem conexão à internet 
    Dado que esteja sem conexão à internet
    Quando realizar o login com dados válidos
    Então visualizo uma mensagem de erro

~@instrumentado
Cenário: Verificar botão Entrar desabilitado ao preencher somente o campo CPF
    Quando preencher somente o campo CPF 
    Então o botão Entrar deve permanecer desabilitado

~@instrumentado
Cenário: Verificar botão Entrar desabilitado ao preencher somente o campo Senha
    Quando preencher somente o campo Senha com pelo menos seis caracteres 
    Então o botão Entrar deve permanecer desabilitado

~@instrumentado
Cenário: Verificar botão Entrar desabilitado sem preenchimento dos campos para login
    Quando não preencher os campos para login
    Então o botão Entrar deve permanecer desabilitado

~@instrumentado
Cenário: Verificar botão Entrar desabilitado ao preencher os campos para login, mas senha com menos de seis caracteres
    Quando preencher o CPF
    E preencher a senha com menos de seis caracteres
    Então o botão Entrar deve permanecer desabilitado
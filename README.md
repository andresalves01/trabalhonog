<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<header>
    <nav>
        <a class="logo" href=""><img class="imagem" src="img/logo.png" alt=""></a>
        <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-list">
            <li><a href="mecanica.html">HOME</a></li>
            <li><a href="mecanica.html">MECÂNICA</a></li>
            <li><a href="paginada1_50.html">ÁREA DO USUARIO</a></li>
        </ul>
    </nav>
</header>
<main>
    <div class="sec1">
        <div class="sec1-inf">
            <div class="inf1">
                <p id="nome-emp">AutoCar</p>
                <p id="infor">Informações</p>
            </div>

            <div class="inf1">
                <p>Localização</p>
                <p>Rua Pereira Estéfano, Vila da Saúde, Belo Horizonte</p>
                <p>autocar@gmail.com</p>
            </div>

           <div class="inf1"> 
            <ul class="inf-list">
                <p>Serviços Prestados</p>
                <li>Luzes e Freios</li>
                <li>Embreagem</li>
                <li>Funilaria e Pintura</li>
                <li>Pneus, Rodas e afim</li>
            </ul>
        </div>
        </div>
    </div>
    
    
    <div class="sec2"><iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.618426448874!2d-46.63963322534006!3d-23.618013863674683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a51837c7449%3A0x7b59e0162c6dab90!2sR.%20Pereira%20Est%C3%A9fano%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004144-070!5e0!3m2!1spt-BR!2sbr!4v1698429261415!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="area-buton">    
            <button type="button" class="but" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Contate-nos</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nova Mensagem :</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Forma de Contato :</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Mensagem :</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-primary">Enviar Mensagem</button>
      </div>
    </div>
  </div>
</div>
            
            
<!-- Button trigger modal -->
<button type="button" class="but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Visualizar Horarios
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Horarios disponiveis</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
         <form action="">
            <label for="">Horarios Disponiveis :</label>
            <p>Segunda-feira - Quinta-feira : 08:00 as 19:00</p>
            <p>Sexta-feira : 08:00 as 17:00</p>
            <p>Sabado : 08:00 as 12:00</p>
            <p>Domingo : Fechado</p>
         </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>

            
            
  


  
   







  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form action="">
                <label for="">Escolha o dia da semana :</label>
                <select name="" id="">
                <option value="">Segunda-feira</option>
                <option value="">Terça-feira</option>
                <option value="">Quarta-feira</option>
                <option value="">Quinta-feira</option>
                <option value="">Sexta-feira</option>
                <option value="">Sabado</option>
             </select></form>
             <label for="">Escolha o Horario :</label>
             <select name="" id="">
                
                <option value="">08:00</option>
                <option value="">08:30</option>
                <option value="">09:00</option>
                <option value="">09:30</option>
                <option value="">10:00</option>
                <option value="">10:30</option>
                <option value="">11:00</option>
                <option value="">11:30</option>
                <option value="">12:00</option>
                <option value="">12:30</option>
                <option value="">13:00</option>
                <option value="">13:30</option>
                <option value="">14:00</option>
                <option value="">14:30</option>
                <option value="">15:00</option>
                <option value="">15:30</option>
                <option value="">16:00</option>
                <option value="">16:30</option>
                <option value="">17:00</option>
                <option value="">17:30</option>
                <option value="">18:00</option>
                <option value="">18:30</option>
                <option value="">19:00</option>

             </select>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Salvar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
        
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Agendado com Sucesso !
        </div>
        <div class="modal-footer">
          
        </div>
      </div>
    </div>
  </div>
  <button class="but" data-bs-toggle="modal" href="#exampleModalToggle">Agendar Visita</button>

















        </div>
    </div>
</main>
    <footer>
        <div>
            <a  id="aw">Av. Brasil, 2023 - Funcionarios, Belo Horizonte - MG, 30140-002</a>
            <a id="aw">(55)31 98988-4041</a>
            
        </div>
    </footer>

<body>
    
    <script src="mobile_nav.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>


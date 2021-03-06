<?
if ($_GET['a'] == 1) {
    $stmt = $conn->prepare('INSERT INTO terms (user, ip, created_at) VALUES(:u, :i, :c)');
    $stmt->execute(array(
        ':u' => $dados['nick'],
        ':i' => $_SERVER["REMOTE_ADDR"],
        ':c' => time()
    ));

    echo '<script>document.location.href="index.php";</script>';
}
?>

<style>
    .containerTerms {
        width: 100%;
        position: relative;
        margin-top: 50px;
    }

    .containerTerms .modal-terms {
        border-radius: 5px;
        overflow-y: auto;
        padding: 30px;
        max-height: 500px;
        height: 100%;
        background-color: #FFF;
        border: 1px solid #e6e5e5;
    }

    .containerTerms h1, .containerTerms h3 {
        text-align: center;
    }

    .containerTerms p {
        line-height: 25px;
        font-size: 16px;
        margin-bottom: 15px;
    }

    .containerTerms h2 {
        margin-bottom: 10px;
    }

    .containerTerms ul {
        margin-left: 35px;
        margin-bottom: 20px;
    }

    .containerTerms .based-input {
        margin-top: 15px;
    }

    .containerTerms .based-btns {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .containerTerms .based-btns .btn {
        height: 46px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        padding: 0 20px;
        transition: opacity 0.2s;
    }

    .containerTerms .based-btns .btn:hover {
        opacity: 0.7;
    }

    .containerTerms .based-btns .btn:active {
        opacity 0.5;
    }

    .containerTerms .btn-read {
        background-color: #B90A00;
        color: #FFF;
        opacity: 0.5;
        pointer-events: none;
    }

    .containerTerms .btn-read.active {
        opacity: 1;
        pointer-events: all;
    }

    .containerTerms .btn-download {
        color: #B90A00;
        background-color: #FFF;
        border: 1px solid #e6e5e5;
    }
    
    .containerTerms label {
        margin-top: 25px;
        font-weight: 400;
    }
    @media (max-width: 990px) {
        .containerTerms .based-btns {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        
        .containerTerms .based-btns .btn {
            width: 100%;
        }
        
        .containerTerms .modal-terms {
            max-height: unset;
            overflow-y: unset;
        }
    }
</style>

<div class="containerTerms">
    <div class="modal-terms">
        <h1>TERMO DE USO</h1>
        <h3>CONTRATO DE CONCESS??O DE USO DE UM CARD??PIO ON-LINE COM SISTEMA DE AUTO GEST??O</h3>
        <br>

        <p>Os seguintes termos e condi????es regulam o direito de uso de um card??pio on-line com sistema de Auto-Gest??o.</p>
        <p>Das partes:</p>

        <span><strong>CONTRATANTE:</strong></span>
        <p>A pessoa f??sica ou jur??dica identificada na p??gina de cadastramento.</p>

        <span><strong>CONTRATADO</strong></span>
        <p>A empresa que liberou esse acesso ao sistema ao contratante.</p>

        <br />
        <h3>Cl??usula Primeira - do Objeto do Contrato</h3>

        <p>1.0) Disponibiliza????o de um Sistema Administrativo de Auto Gest??o, por CONCESS??O, num card??pio on-line, que ser?? desenvolvido pelo CONTRATADO e publicado na Internet atrav??s do dom??nio WWW.NOME_DO_RESTAURANTE.SUBDOMINIO.APP/, sob administra????o do pr??prio.</p>
        <p>1.1) O desenvolvimento do card??pio on-line que ser?? disponibilizado sob CONCESS??O ao CONTRATANTE n??o implica na obriga????o, imediata ou a qualquer tempo, de entrega do c??digo fonte que deu origem ao produto e que se converte em propriedade intelectual do CONTRATADO;</p>
        <p>1.2) Os servi??os ora aven??ados, concernentes ??s viabilidades do com??rcio, an??ncio e/ ou divulga????o dos produtos e servi??os do CONTRATANTE na Internet estar??o dispon??veis 24 (vinte e quatro) horas por dia, durante o prazo de vig??ncia do presente contrato, salvo quando o servi??o de hospedagem apresentar alguma indisponibilidade ou por qualquer outra raz??o que n??o implique em culpa do CONTRATADO;</p>
        <p>1.3) O CONTRATADO fornecer?? uma senha para acesso ao painel administrativo do card??pio on-line, cuja atualiza????o ser?? de exclusiva responsabilidade do CONTRATANTE, bem como qualquer conte??do diferente daquele originalmente previsto ou mesmo que venha a ferir qualquer dispositivo legal.</p>
        <p>1.4) Uma vez publicado, o card??pio on-line ser?? considerado totalmente acabado e entregue, a partir do que quaisquer altera????es ou acr??scimos pretendidos pelo CONTRATANTE ser??o objeto de an??lise e pr??via aprova????o do novo projeto, independentemente da sua complexidade, estabelecendo-se o respectivo custo, que dever?? ser autorizado para cobran??a na forma que venha a ser convencionada;</p>
        <p>
            1.5) Ap??s o desenvolvimento do card??pio on-line est??o compreendidos:

        <ul>
            <li>- Orienta????o para uso do produto;</li>
            <li>- Suporte para d??vidas via WhatsApp, de segunda ?? sexta feira, no per??odo das 10h00 ??s 18h00.</li>
            <li>- Suporte para emerg??ncias via WhatsApp, todos os dias, no per??odo das 18h00 ??s 22h00.</li>
        </ul>

        ?? 1??. - N??o ser?? poss??vel a recupera????o de dados de responsabilidade do CONTRATANTE na manipula????o do card??pio on-line, por erro ou mau uso do sistema, em raz??o de total impossibilidade t??cnica.
        </p>

        <br />
        <h3>Cl??usula Segunda ??? do Pre??o e Forma de Pagamento:</h3>

        <p>2.0) O CONTRATANTE pagar?? ?? CONTRATADA, mensalmente a partir da data de aceite deste contrato ?? t??tulo de hospedagem e suporte a quantia equivalente ao plano selecionado no momento do aceite deste e informado no painel administrativo do card??pio on-line, podendo ser trocado para um maior de acordo com sua necessidade.</p>
        <p>2.1) Todos os planos poder??o ser corrigidos anualmente todo o m??s de Janeiro;</p>
        <p>2.2) Em caso de atraso no pagamento fica estipulada a multa de 2% (dois por cento), juros de 1% ao m??s e corre????o monet??ria, podendo valer-se a CONTRATADA dos meios pr??prios para exercer a cobran??a;</p>
        <p>2.2) O atraso no pagamento da mensalidade descrita acarretar??, a partir do 3??. (terceiro) dia de atraso, na suspens??o de uso do card??pio on-line, cuja publicidade somente ser?? restabelecida ap??s o seu efetivo pagamento, independentemente de qualquer aviso, notifica????o ou interpela????o Judicial ou extrajudicial;</p>
        <p>2.3) Na hip??tese de 10 (dez) dias de atraso, o presente Contrato ser?? rescindido, caso em que o direito de uso do card??pio on-line ser?? definitivamente inviabilizado, acarretando, ainda, a sua extin????o, sem qualquer obriga????o de indenizar por parte da CONTRATADA, seja por perdas e danos ou lucros cessantes.</p>
        <p>2.4) Na hip??tese de eventual demanda judicial, arcar?? a parte culpada com as custas processuais e honor??rios advocat??cios.</p>

        <br />
        <h3>Cl??usula Terceira - da Vig??ncia e Rescis??o</h3>

        <p>3.0) O presente Contrato ter??-a-vig??ncia de 30 (trinta) dias contando a partir do aceite, prorrogando-se automaticamente por iguais per??odos, salvo se uma das partes renunci??-lo, mediante aviso por mensagem, com pelo menos 3 (tr??s) dias de anteced??ncia.</p>

        <br />
        <h3>Cl??usula Quarta - Disposi????es Gerais</h3>

        <p>4.0) O CONTRATADO ter?? o prazo de 1 (um) dias, ap??s aceite do presente contrato, para disponibiliza????o do acesso ao card??pio on-line no endere??o nomedaloja.subdominio.app/admin.</p>
        <p>4.1) O CONTRATANTE ser?? o ??nico respons??vel pelo cumprimento das legisla????es pertinentes a rela????o de consumo e as demais atinentes aos produtos/servi??os por quaisquer das partes sem o aviso pr??vio por escrito, da outra parte;</p>
        <p>4.2) O presente contrato obrigar?? as partes, seus representantes sucessores e cession??rios autorizados, n??o podendo ser cedido, total ou parcialmente, por qualquer das partes sem o aviso pr??vio por escrito, da outra parte, excetuando-se a hip??tese de inadimpl??ncia, conforme descrito na Cl??usula 2.2;</p>
        <p>4.3) O card??pio on-line ser?? utilizada pelo CONTRATANTE como ferramenta para o desenvolvimento de sua atividade profissional/objeto social. Assim, como o CONTRATANTE n??o ?? o destinat??rio final do objeto contratado, n??o se aplica ao presente neg??cio jur??dico o C??digo de Defesa do Consumidor, mas sim o C??digo Civil em especial Artigos 593 a 609.</p>
        <p>4.4) Na hip??tese do CONTRATANTE constatar qualquer problema no card??pio on-line dever??, necessariamente, comunicar, por escrito, atrav??s de carta com aviso de recebimento (A.R.), sendo reservado a este o prazo de 15 (quinze) dias para a efetiva constata????o do problema e sua solu????o, se for o caso, n??o sendo poss??vel a solu????o do problema efetivamente reconhecido pelo contratado, o contrato ser?? rescindido, restituindo-se somente a ultima mensalidade paga proporcional ao tempo de n??o uso efetivo do sistema.</p>
        <p>4.5) As partes elegem o foro da comarca de S??o Jos?? dos Campos-SP, para dirimir d??vidas ou lit??gios oriundos do presente instrumento, com exclus??o de qualquer outro, por mais privilegiado que seja. E, por estar justo e contratado, aceitam eletronicamente a presente, para que surtam os efeitos legais.</p>
    </div>
    
    <label>Ao marcar clicar no bot??o, voc?? automaticamente concorda com o contrato de concess??o e todos os termos de uso descritos acima.</label>

    <div class="based-btns">
        <a href="?a=1" class="btn btn-read">Concordar com os termos</a>
    </div>
</div>

<script>
    const modalTerms = document.querySelector(".modal-terms")
    const buttonRead = document.querySelector(".btn-read")
    const input = document.querySelector(".input")
    
    if(window.innerWidth > 990) {
        modalTerms.addEventListener("scroll", function(e) {
            const modalEvent = e.target
            const scrollTotal = modalEvent.scrollTop + modalEvent.clientHeight
    
            if (scrollTotal == modalEvent.scrollHeight) {
                buttonRead.classList.add("active")
            } else {
                buttonRead.classList.remove("active")
            }
        })
    } else {
        buttonRead.classList.add("active")
    }
</script>